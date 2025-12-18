import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const expiresIn = "1d";

export const registerController = async (req, res) => {
  try {
    const {
      userName,
      userEmail,
      userPassword,
      userAddress,
      userPhoneNumber,
      userType,
      userProfilePicture,
    } = req.body;

    if (
      !userName ||
      !userEmail ||
      !userPassword ||
      !userAddress ||
      !userPhoneNumber ||
      !userType ||
      !userProfilePicture
    ) {
      return res
        .status(400)
        .send({ message: "Please provide all fields", success: false });
    }
    const existingUser = await userModel.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).send({
        message: "User with this email already exists",
        success: false,
      });
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(userPassword, salt);

    const newUser = await userModel.create({
      userName,
      userEmail,
      userPassword: hashedPassword,
      userAddress,
      userPhoneNumber,
      userType,
      userProfilePicture,
    });
    res.status(201).send({
      message: "User registered successfully",
      success: true,
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message, success: false });
  }
};

export const loginController = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;
    if (!userEmail || !userPassword) {
      return res
        .status(400)
        .send({ message: "Please provide email and password", success: false });
    }
    const user = await userModel.findOne({ userEmail });
    if (!user) {
      return res
        .status(400)
        .send({ message: "User not found", success: false });
    }

    const isPasswordMatched = await bcrypt.compare(
      userPassword,
      user.userPassword
    );
    if (!isPasswordMatched) {
      return res
        .status(400)
        .send({ message: "Invalid credentials", success: false });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn,
    });
    user.userPassword = undefined;
    res
      .status(200)
      .send({ message: "Login successful", success: true, token, user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message, success: false });
  }
};
