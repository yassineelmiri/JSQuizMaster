const Profile = require('../models/profileModel');

exports.addProfile = (req, res) => {
  const { firstName, lastName, email, dob, speciality } = req.body;

  const newProfile = {
    firstName,
    lastName,
    email,
    dob,
    speciality
  };

  Profile.create(newProfile, (err, result) => {
    if (err) {
      console.error("Error inserting profile:", err);
      res.status(500).send(`Internal Server Error: ${err.message}`);
    } else {
      res.redirect("/profiles");
    }
  });
};

exports.getProfiles = (req, res) => {
  Profile.getAll((err, results) => {
    if (err) {
      console.error("Error fetching profiles:", err);
      res.status(500).send(`Internal Server Error: ${err.message}`);
    } else {
      res.render("Formateur/index", { professors: results });
    }
  });
};
