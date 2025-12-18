import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    title: { required: true, message: "Please add a title", type: String },
    description: {
      required: true,
      message: "Please add a description",
      type: String,
    },
    imageUrl: {
      required: true,
      message: "Please add a image",
      type: String,
      default:
        "https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?semt=ais_hybrid&w=740&q=80",
    },
    foods: { type: Array },
    time: { type: String },
    pickup: { type: Boolean, default: true },
    delivery: { type: Boolean, default: true },
    isOpen: { type: Boolean, default: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    ratingCount: { type: Number, default: 0 },
    reviews: { type: Array },
    locationCoordinates: {
      latitude: { type: Number },
      longitude: { type: Number },
      latitudeDelta: { type: Number },
      longitudeDelta: { type: Number },
      address: { type: String },
      title: { type: String },
    },
  },
  { timestamps: true }
);

const restaurantModel = mongoose.model("restaurant", restaurantSchema);
export default restaurantModel;
