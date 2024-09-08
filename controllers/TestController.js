const Test = require('../models/TestModel');  // Ensure this line is included and correct

exports.createTest = (req, res) => {
  const { Name, testDate, Description, professor_id } = req.body;

  const newTest = {
    Name,
    testDate,
    Description,
    professor_id
  };

  Test.create(newTest, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
    res.send('Test soumis!');
  });
};
