// Endpoints focused on Users.
const router = require('express').Router();

const {
    signInUser,
    registerUser,
    getUserInfo,
} = require('../handlers/users');

// User endpoints.
router.post("/user/signIn", signInUser);
// router.post("/user/new", registerUser);
// router.post("/user/info", getUserInfo);

module.exports = router;