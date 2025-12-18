import restaurantModel from "../models/restaurantModel.js";

export const createRestaurantController = async (req, res) => {
  try {
    const {
      title,
      description,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      rating,
      ratingCount,
      reviews,
      locationCoordinates,
    } = req.body;

    if (
      !title ||
      !description ||
      !imageUrl ||
      !foods ||
      !time ||
      !pickup ||
      !delivery ||
      !isOpen ||
      !rating ||
      !ratingCount ||
      !reviews ||
      !locationCoordinates
    ) {
      return res
        .status(400)
        .send({ message: "Please provide all fields", success: false });
    }
    const restaurant = await restaurantModel.create({
      title,
      description,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      rating,
      ratingCount,
      reviews,
      locationCoordinates,
    });
    return res.status(200).send({
      message: "Restaurant created successfully",
      success: true,
      restaurant,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message, success: false });
  }
};

export const getAllRestaurantController = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({});
    if (!restaurants) {
      return res.status(404).send({
        message: "Restaurants not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Restaurants fetched successfully",
      success: true,
      totalRestaurants: restaurants.length,
      restaurants,
    });
  } catch (error) {
    res.status(404).send({ message: error.message, success: false });
    return res.status(500).send({ message: error.message, success: false });
  }
};

export const getRestaurantByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await restaurantModel.findById(id);
    if (!restaurant) {
      return res.status(404).send({
        message: "Restaurant not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Restaurant fetched successfully",
      success: true,
      restaurant,
    });
  } catch (error) {
    res.status(404).send({ message: error.message, success: false });
    return res.status(500).send({ message: error.message, success: false });
  }
};
