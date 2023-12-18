import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    classs: {
      type: String,
      required: false,
    },
    class2: {
      type: String,
      required: false,
    },
    price_offer: {
      type: String,
      required: false,
    },
    updatedAt: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.product || mongoose.model("product", productSchema);

export default Product;
