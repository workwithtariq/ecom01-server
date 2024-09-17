// /server/controllers/laptopController.js
const Laptop = require("../models/laptopModel");

// Get all laptops
exports.getAllLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find({});
    res.status(200).json(laptops);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch laptops", error });
  }
};

// Get a single laptop by ID
exports.getLaptopById = async (req, res) => {
  console.log("------------- GET ID");
  console.log(req.params);
  console.log("------------- GET ID");
  try {
    const laptop = await Laptop.findById(req.params.id);
    if (!laptop) return res.status(404).json({ message: "Laptop not found" });
    res.status(200).json(laptop);
    console.log(laptop);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the laptop", error });
  }
};

// Create a new laptop (POST)
exports.createLaptop = async (req, res) => {
  const {
    brand,
    model,
    series,
    price,
    processorType,
    processorModel,
    generation,
    displaySize,
    displayType,
    ramSize,
    ramType,
    storage,
    graphicsCard,
    releaseDate,
    availability,
    description,
    ratings,
  } = req.body;
  try {
    const newLaptop = new Laptop({
      brand,
      model,
      series,
      price,
      processorType,
      processorModel,
      generation,
      displaySize,
      displayType,
      ramSize,
      ramType,
      storage,
      graphicsCard,
      releaseDate,
      availability,
      description,
      ratings,
    });

    const savedLaptop = await newLaptop.save();
    res.status(201).json(savedLaptop);
  } catch (error) {
    res.status(400).json({ message: "Failed to create laptop", error });
  }
};

// Update an existing laptop (PUT)
exports.updateLaptop = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedLaptop = await Laptop.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate before updating
    });

    if (!updatedLaptop)
      return res.status(404).json({ message: "Laptop not found" });

    res.status(200).json(updatedLaptop);
  } catch (error) {
    res.status(400).json({ message: "Failed to update laptop", error });
  }
};

// Delete a laptop (DELETE)
exports.deleteLaptop = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedLaptop = await Laptop.findByIdAndDelete(id);

    if (!deletedLaptop)
      return res.status(404).json({ message: "Laptop not found" });

    res.status(200).json({ message: "Laptop deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete laptop", error });
  }
};
