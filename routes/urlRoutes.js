const express=require("express");

const router=express.Router();
const {shortenURL}=require("../controllers/urlController");

// Test POST Route
router.post("/shorten", shortenURL);

module.exports=router;