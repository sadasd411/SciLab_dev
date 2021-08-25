const express = require("express");
const html2json = require("html2json").html2json;
const json2html = require("html2json").json2html;
const router = express.Router();

const Content = require("../models/procedure.model");



router.get("/:_id", async function (req, res, next) {
  try {
    const content = await Content.findOne({ _id: req.params._id });
    const { title, html } = content;
    res.json({ title, html });
  } catch (err) {
    console.error(err);
  }
});

router.get("/search/:title", async function (req, res, next) {
  try {
    const content = await Content.findOne({ title: req.params.title });
    const { html } = content;
    res.json({ html });
  } catch (err) {
    console.error(err);
  }
});

router.get("/test/:_id", async function (req, res, next) {
  try {
    const content = await Content.findOne({ _id: req.params._id });
    const { title, html } = content;
    res.json({ title, html: json2html(html) });
  } catch (err) {
    console.error(err);
  }
});

router.post("/", function (req, res, next) {
  const newContent = new Content({
    title: req.body.title,
    html: html2json(req.body.html),
  });
  newContent
    .save()
    .then((content) => res.json(content))
    .catch((err) => console.error(err));
});

router.patch("/procedure/:id", async (req, res) => {
  try {
    const updatedContent = await Content.findByIdAndUpdate(
      { _id: req.params._id },
      {
        $set: {
        procedureName: req.body.procedureName,
         html: html2json(req.body.html),
        },
      }
    );
    res.json(updatedContent);
  } catch (err) {
    console.error(err);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const removedContent = await Content.remove({ _id: req.params._id });
    res.json(removedContent);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
