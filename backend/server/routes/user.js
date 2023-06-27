import express from "express";
import {
    changePassword,
    forgetpassword,
    getMyProfile,
    login,
    logOut,
    resetpassword,
    signup,
    updatePic,
    updateProfile,
} from "../controller/user.js";
import { isAuthenticated } from "../middleWares/auth.js";
import { singleUpload } from "../middleWares/multer.js";

const router = express.Router();

router.post("/login", login);

router.post("/new", singleUpload, signup);

router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", isAuthenticated, logOut);

// Updating Routes
router.put("/updateprofile", isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, changePassword);
router.put("/updatepic", isAuthenticated, singleUpload, updatePic);

// Forget Password & Reset Password
router.route("/forgetpassword").post(forgetpassword).put(resetpassword);

export default router;