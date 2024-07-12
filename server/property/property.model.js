import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  username : {
    type : String,
    required: true
  },
  what : {
    type : String,
    required: true
  },
  country : {
    type : String,
    required: true
  },
  contact : {
    type : String,
    required : true
  },
  propertyType: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: [String],
    required: true
  },
  buildUpArea: {
    type: Number,
    required: true
  },
  carpetArea: {
    type: Number,
    required: true
  },
  address : {
    type : String,
    required: true
  },
  furnishing: {
    type: [String],
    required: true
  },
  tiles: {
    type: [String],
    required: true
  },
  societyAmenities: {
    type: [String],
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  security: {
    type: Number,
    required: true
  },
  images: [{
    type: [String],   
  }]
});

const Property = mongoose.model('propertydetails', propertySchema);

export default Property;
