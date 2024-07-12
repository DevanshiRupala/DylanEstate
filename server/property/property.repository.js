import mongoose from "mongoose";
import Property from "./property.model.js";

export const createProperty = async (data) => {
    const result = await Property.create({ ...data });
    return result._id;
};

export const preview = async (id) => {
    console.log(id)
    const result = await Property.findOne({ _id:new mongoose.Types.ObjectId(id) });
    return result;
};