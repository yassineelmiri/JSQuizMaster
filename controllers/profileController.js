const Profile = require('../models/profileModel');

exports.addProfile = (req, res) => {
  const { firstName, lastName, email, dob } = req.body;

  const newProfile = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    dob: dob
  };

  Profile.create(newProfile, (err, result) => {
    if (err) {
      console.error("Error inserting profile:", err);
      res.status(500).send(`Internal Server Error: ${err.message}`);
    } else {
      res.redirect("/add_profile");
    }
  });
};
