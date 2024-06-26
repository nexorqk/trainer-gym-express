import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model("User", UserSchema);

export const getUsers = () => UserModel.find();
export const getUserByUsername = (username) => UserModel.findOne({ username });
export const getUserBySessionToken = (sessionToken) =>
  UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
export const getUserById = (id) => UserModel.findById(id);
export const createUser = (values) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id) => UserModel.findByIdAndDelete({ _id: id });
export const updateUserById = (id, values) =>
  UserModel.findByIdAndUpdate(id, values);
