const express = require("express");
const authRouter = express.Router();

const { validateBody } = require("../decorators");
const authSchema = require("../schemas/authSchema");
const verifyEmailSchema = require("../schemas/authSchema");
const auth = require("../middlewares/auth");
const { upload } = require('../middlewares');

const { register, verifyEmail, resendVerifyEmail, login, logout, getCurrent, updateAvatar } = require("../controllers/auth");

authRouter.post("/register", validateBody(authSchema), register);
authRouter.get("/verify/:verificationToken", verifyEmail);
authRouter.post("/verify", validateBody(verifyEmailSchema), resendVerifyEmail);
authRouter.post("/login", validateBody(authSchema), login);
authRouter.post("/logout", auth, logout);
authRouter.get("/current", auth, validateBody(authSchema), getCurrent);
authRouter.patch("/avatars", auth, upload.single('avatar'), updateAvatar);


module.exports = authRouter;
