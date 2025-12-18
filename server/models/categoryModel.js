import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Please provide a title"] },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    imageUrl: {
      type: String,
      required: [true, "Please provide an image url"],
      default:
        "https://media.istockphoto.com/id/147033440/photo/food-pyramid.jpg?s=612x612&w=0&k=20&c=JLbS8qhEh3i4-iv1-x-a8VplymFInbcasrdfrRaOzOc=",
    },
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("Category", categorySchema);

export default categoryModel;
