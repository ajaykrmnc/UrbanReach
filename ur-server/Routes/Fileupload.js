const express = require("express");
const router = express.Router();
const File = require("../models/File");
const fs = require("fs");
const formidable = require("formidable");
const res = require("express/lib/response");

const create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  console.log("create form");
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded",
      });
    }
    const { name, email, role } = fields;

    if (!name || !email || !role) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }
    console.log(fields);
    let product = new File(fields);

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }
      console.log("till here");
      console.log(files);
      product.photo.data = fs.readFileSync(files.photo.filepath);
      console.log("till here 2");
      product.photo.contentType = files.photo.mimetype;
    }

    product.save((err, result) => {
      if (err) {
        console.log("PRODUCT CREATE ERROR ", err);
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(result);
    });
  });
};

const read = (req, res) => {
  File.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: "Products not found",
      });
    }
    res.json(data);
  });
};
const productById = (req, res, next, id) => {
  File.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(400).json({
        error: "Product not found",
      });
    }
    req.product = product;
    next();
  });
};
const photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};

router.post("/upload", create);
router.get("/upload", read);
router.get("/upload/photo/:productId", photo);
router.param("productId", productById);
module.exports = router;
