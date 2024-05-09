import mongoose from "mongoose";

export interface ICategoryItem {
  title: string;
  pic: string;
}

export interface ICategory {
  categorymain: ICategoryItem[];
}

const categoryScehma = new mongoose.Schema({
  category: {
    type: [],
    required: true,
  },
});

// module.exports = mongoose.model("categorymain", categoryScehma);

const Category = mongoose.model("categorymain", categoryScehma);

export default Category;
