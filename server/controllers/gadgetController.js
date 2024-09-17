// /server/controllers/gadgetController.js
const Gadget = require("../models/gadgetModel");

// Get all gadgets
exports.getAllGadgets = async (req, res) => {
  try {
    const gadgets = await Gadget.find({});
    res.status(200).json(gadgets);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch gadgets", error });
  }
};

// Get a single gadget by ID
exports.getGadgetById = async (req, res) => {
  try {
    const gadget = await Gadget.findById(req.params.id);
    if (!gadget) return res.status(404).json({ message: "Gadget not found" });
    res.status(200).json(gadget);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the gadget", error });
  }
};

// Create a new gadget (POST)
exports.createGadget = async (req, res) => {
  const {
    category,
    brand,
    model,
    features,
    batteryLife,
    price,
    availability,
    releaseDate,
    description,
    ratings,
  } = req.body;

  try {
    const newGadget = new Gadget({
      category,
      brand,
      model,
      features,
      batteryLife,
      price,
      availability,
      releaseDate,
      description,
      ratings,
    });

    const savedGadget = await newGadget.save();
    res.status(201).json(savedGadget);
  } catch (error) {
    res.status(400).json({ message: "Failed to create gadget", error });
  }
};

// Update an existing gadget (PUT)
exports.updateGadget = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedGadget = await Gadget.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate before updating
    });

    if (!updatedGadget)
      return res.status(404).json({ message: "Gadget not found" });

    res.status(200).json(updatedGadget);
  } catch (error) {
    res.status(400).json({ message: "Failed to update gadget", error });
  }
};

// Delete a gadget (DELETE)
exports.deleteGadget = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGadget = await Gadget.findByIdAndDelete(id);

    if (!deletedGadget)
      return res.status(404).json({ message: "Gadget not found" });

    res.status(200).json({ message: "Gadget deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete gadget", error });
  }
};
