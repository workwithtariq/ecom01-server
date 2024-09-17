// /server/models/laptopModel.js
const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
  brand: {
    type: String,
    enum: ["Asus", "HP", "Dell", "Lenovo", "Apple", "Xiaomi"],
    required: true,
  },
  model: { 
    type: String, 
    required: true 
  },

  // New field for laptop series
  series: {
    type: String,
    enum: ["Consumer", "Business", "Gaming", "Premium"],
    required: true,
  },

  processorType: {
    type: String,
    enum: ["Intel", "AMD", "Apple", "Snapdragon"],
    required: true,
  },

  processorModel: {
    type: String,
    enum: [
      "i3",
      "i5",
      "i7",
      "i9",
      "Ryzen 3",
      "Ryzen 5",
      "Ryzen 7",
      "Ryzen 9",
      "Apple M1",
      "M2",
      "M3",
    ],
    required: true,
  },

  // New field for generation
  generation: {
    type: String,
    enum: [
      "10th gen",
      "11th gen",
      "12th gen",
      "13th gen",
      "Ryzen 3000",
      "4000",
      "5000",
      "6000",
    ],
    required: true,
  },

  displaySize: {
    type: String,
    enum: ["11 inch", "14 inch", "15 inch", "17 inch"],
    required: true,
  },

  displayType: {
    type: String,
    enum: ["LED", "OLED", "AMOLED"],
    required: true,
  },

  // New fields for RAM size and type
  ramSize: {
    type: String,
    enum: ["4GB", "8GB", "16GB", "32GB"],
    required: true,
  },
  ramType: {
    type: String,
    enum: ["DDR3", "DDR4", "DDR5"],
    required: true,
  },

  storage: {
    type: String,
    enum: ["256GB SSD", "512GB SSD", "1TB SSD", "1TB HDD"],
    required: true,
  },

  graphicsCard: {
    type: String,
    enum: ["Integrated", "NVIDIA", "AMD"],
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  availability: {
    type: String,
    enum: ["In stock", "Out of stock", "Pre-order", "Upcoming"],
    required: true,
  },

  releaseDate: {
    type: Date,
    default: Date.now,
  },

  description: {
    type: String,
  },

  ratings: {
    type: Number,
    min: 1,
    max: 5,
  },
});

const Laptop = mongoose.model("Laptop", laptopSchema);

module.exports = Laptop;
