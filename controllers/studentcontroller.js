const studentModel = require("../models/studentModel");
const professorModel = require("../models/professorModel");
const mailer = require("../models/mailer");

module.exports = {
  getStudents: async (req, res) => {
    try {
      const classe = await professorModel.getclasse(req.session.user.id); // Obtain professor's class
      const students = await studentModel.getStudents(classe.id); // Get students in this class
      res.render("Etudiant/index", { students });
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ message: "An error occurred while fetching students." });
    }
  },

  addStudent: async (req, res) => {
    try {
      const classe = await professorModel.getclasse(req.session.user.id); // Get professor's class for the form
      res.render("Etudiant/create", { classe });
    } catch (error) {
      console.error("Error displaying add student form:", error);
      res.status(500).send(error.message);
    }
  },

  insertStudent: async (req, res) => {
    try {
      const { firstName, lastName, email, password, birthDate, adress, classe_id } = req.body;
      await studentModel.addStudent({ firstName, lastName, email, password, adress, birthDate, classe_id });
      await mailer.sendCredentials(email, firstName, password);
      res.redirect("/students");
    } catch (error) {
      console.error("Error inserting student:", error);
      res.status(500).send(error.message);
    }
  },

  editStudent: async (req, res) => {
    try {
      const student_id = req.query.student; // Get student ID from query
      const student = await studentModel.findById(student_id); // Find student by ID
      res.render("Etudiant/edit", { student });
    } catch (error) {
      console.error("Error fetching student for edit:", error);
      res.status(500).send(error.message);
    }
  },

  updateStudent: async (req, res) => {
    try {
      const { firstName, lastName, adress, id } = req.body; // Get updated student info
      await studentModel.updateStudent({ firstName, lastName, adress, id }); // Update student in DB
      res.redirect("/students");
    } catch (error) {
      console.error("Error updating student:", error);
      res.status(500).send(error.message);
    }
  },

  deleteStudent: async (req, res) => {
    try {
      const student_id = req.body.student_id; // Get student ID from form
      await studentModel.delete(student_id); // Delete student from DB
      res.redirect("/students");
    } catch (error) {
      console.error("Error deleting student:", error);
      res.status(500).send(error.message);
    }
  },

  getDemandes: async (req, res) => {
    try {
      const demandes = await studentModel.getDemandes(); // Fetch all demandes from model
      res.render("Formateur/Demande", { demandes });
    } catch (error) {
      console.error("Error fetching demandes:", error.message);
      res.status(500).json({ message: "An error occurred while fetching demandes.", error: error.message });
    }
  },

  acceptDemande: async (req, res) => {
    try {
      const { id } = req.params;
      await studentModel.acceptDemande(id);
      res.redirect("/demandes");
    } catch (error) {
      console.error("Error accepting demande:", error);
      res.status(500).json({ message: "An error occurred while accepting the demande." });
    }
  },

  rejectDemande: async (req, res) => {
    try {
      const { id } = req.params;
      await studentModel.rejectDemande(id);
      res.redirect("/demandes");
    } catch (error) {
      console.error("Error rejecting demande:", error);
      res.status(500).json({ message: "An error occurred while rejecting the demande." });
    }
  },
};
