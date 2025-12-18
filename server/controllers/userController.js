import userModel from "../models/userModel.js";

export const getUserController = async (req, res) => {
  try {
    if (!req.user || !req.user.userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized accessa",
      });
    }
    const user = await userModel.findById({ _id: req.user.userId });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User not found" });
    }

    user.userPassword = undefined;
    return res
      .status(200)
      .send({ success: true, message: "User fetched successfully", user });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res
      .status(500)
      .send({ success: false, error: "Failed to fetch user" });
  }
};

export const updateUserController = async (req, res) => {
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
      !userAddress ||
      !userPhoneNumber ||
      !userType ||
      !userProfilePicture
    ) {
      return res
        .status(400)
        .send({ message: "Please provide all fields", success: false });
    }
    const user = await userModel.findById({ _id: req.user.userId });
    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found", success: false });
    }
    user.userName = userName;
    user.userEmail = userEmail;
    user.userAddress = userAddress;
    user.userPhoneNumber = userPhoneNumber;
    user.userType = userType;
    user.userProfilePicture = userProfilePicture;
    await user.save();
    user.userPassword = undefined;
    return res
      .status(200)
      .send({ message: "User updated successfully", success: true, user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message, success: false });
  }
};

export const updatePasswordController = async (req, res) => {
  try {
    const { userPassword } = req.body;
    if (!userPassword) {
      return res
        .status(400)
        .send({ message: "Please provide password", success: false });
    }
    const user = await userModel.findById({ _id: req.user.userId });
    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found", success: false });
    }
    user.userPassword = userPassword;
    await user.save();
    user.userPassword = undefined;
    return res
      .status(200)
      .send({ message: "Password updated successfully", success: true, user });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message, success: false });
  }
};

export const deleteUserController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete({ _id: req.params.id });
    res
      .status(200)
      .send({ message: "User deleted successfully", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message, success: false });
  }
};
