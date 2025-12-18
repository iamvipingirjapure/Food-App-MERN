import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    if (!title || !description || !imageUrl) {
      return res.status(400).send({
        message: "Please provide all fields title, description, imageUrl",
        success: false,
      });
    }
    const newCategory = new categoryModel({
      title,
      description,
      imageUrl,
    });
    const savedNewCategory = await newCategory.save();
    return res.status(200).send({
      message: "Category created successfully",
      success: true,
      savedNewCategory,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message, success: false });
  }
};

export const getAllCategoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      return res.status(404).send({
        message: "Categories not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Categories fetched successfully",
      success: true,
      totalCategories: categories.length,
      categories,
    });
  } catch (error) {
    res.status(404).send({ message: error.message, success: false });
    return res.status(500).send({ message: error.message, success: false });
  }
};

export const getCategoryByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findById(id);
    if (!category) {
      return res.status(404).send({
        message: "Category not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Category fetched successfully",
      success: true,
      category,
    });
  } catch (error) {
    res.status(404).send({ message: error.message, success: false });
    return res.status(500).send({ message: error.message, success: false });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).send({
        message: "Category not found",
        success: false,
      });
    }
    return res.status(200).send({
      message: "Category deleted successfully",
      success: true,
      category,
    });
  } catch (error) {
    res.status(404).send({ message: error.message, success: false });
    return res.status(500).send({ message: error.message, success: false });
  }
};
