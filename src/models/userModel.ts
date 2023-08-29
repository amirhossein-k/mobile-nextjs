import mongoose from "mongoose";

interface USER {
  name: string;
  email: string;
  password: string;
  isVerfied: boolean;
  isAdmin: boolean;
  forgetPasswordToken: string;
  forgetPasswordTokenExpiry: Date;
  verifyToken: string;
  verifyTokenExpiry: Date;
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "plaese provide a name"],
  },
  email: {
    type: String,
    required: [true, "plaese provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "plaese provide a password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgetPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  address: {
    type: Array,
    required: true,
    default: [{location: "", state: "", zipcode: ""}],
  },
  listordershop: {
    type: Array,
    require: true,
    default: [],
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
