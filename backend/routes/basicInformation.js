const express = require('express');
const router = express.Router();

const basicInformationCopy = require('../models/basicInformation');

router.post('/basicInformation', (req, res) => {

  const newBasicInformation = new basicInformationCopy({
    fullName: req.body.fullName,
    jobTitle: req.body.jobTitle,
    email: req.body.email,
    website: req.body.website,
    location: req.body.location
  });

  newBasicInformation.save()
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });

});

router.get('/getBasicInformation', (request, response) => {
  basicInformationCopy.find()
    .then(data => response.json(data))
    .catch(error => response.json(error));
});

module.exports = router;