// Endpoints related to users.
"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");
const {
    validateEmail,
    validatePassword,
    validateUniqueName
} = require("./helper/validate");


//////////////////////////////////////////////
//                                          //
//              SIGN IN USER                //
//                                          //
//////////////////////////////////////////////
// verify email exists in DB using req.body.email and verifies password matches using req.body.password. signs in.
const signInUser = async (req, res) => {
    let signInStatus = "good";
    // Validate email is indeed good.
    signInStatus = validateEmail(req.body.email)
    if (!signInStatus === "good") {
        res.status(400).json({ status: 400, data: req.body, message: signInStatus})
    }
    const client = await new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("Escape");
    const email = req.body.email
    const password = req.body.password
    
    const user = await db.collection("accounts").findOne({ email });
    user ? (
        // if email exists in database, make sure password matches.
        user.password !==password ? (
            res.status(400).json({ status: 400, data: req.body, message: "email and password did not match"})
        ) : (
            res.status(200).json({ status: 200, data: user, message: "matched. signing in..."})
        )
    )
    : (
        res.status(400).json({ status: 400, data: req.body, message: "user not found"})
    )
    client.close();
};


module.exports = { signInUser };