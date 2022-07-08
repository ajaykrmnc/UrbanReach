const ContactUs = require("./models/contactus");
const Jobapply = require("./models/Job");
const Apply = require("./models/Apply");

exports.create = (req, res) => {
  console.log(req.body);
  const contactus = new ContactUs(req.body);
  contactus.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "error hai bro",
      });
    }
    return res.json({ data });
  });
};

exports.carriercreate = (req, res) => {
  console.log(req.body);
  const contactus = new Jobapply(req.body);
  contactus.save((err, data) => {
    console.log(data);
    if (err) {
      return res.status(400).json({
        error: "error hai bro",
      });
    }
    return res.json({ data });
  });
};

exports.carrierApply = (req, res) => {
  console.log(req.body);
  const contactus = new Apply(req.body);
  contactus.save((err, data) => {
    console.log(data);
    if (err) {
      return res.status(400).json({
        error: "error hai bro",
      });
    }
    return res.json({ data });
  });
};

exports.read = (req, res) => {
  Jobapply.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "error in geting all object of jobs",
      });
    }
    res.json(data);
  });
};
