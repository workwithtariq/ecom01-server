// /server/controllers/phoneController.js
const Phone = require("../models/phoneModel");

// Get all phones
exports.getAllPhones = async (req, res) => {
  try {
    const phones = await Phone.find({});
    res.status(200).json(phones);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch phones", error });
  }
};

// Get a single phone by ID
exports.getPhoneById = async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id);
    if (!phone) return res.status(404).json({ message: "Phone not found" });
    res.status(200).json(phone);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the phone", error });
  }
};

// Create a new phone (POST)
exports.createPhone = async (req, res) => {
  const {
    brand,
    model,
    displaySize,
    chipset,
    ram,
    rom,
    battery,
    features,
    price,
    availability,
    releaseDate,
    description,
    ratings,
  } = req.body;

  console.log("POST /api/phones");

  try {
    const newPhone = new Phone({
      brand,
      model,
      displaySize,
      chipset,
      ram,
      rom,
      battery,
      features,
      price,
      availability,
      releaseDate,
      description,
      ratings,
    });

    const savedPhone = await newPhone.save();
    console.log(savedPhone);
    res.status(201).json(savedPhone);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Failed to create phone", error });
  }
};

// Update an existing phone (PUT)
exports.updatePhone = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPhone = await Phone.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate before updating
    });

    if (!updatedPhone)
      return res.status(404).json({ message: "Phone not found" });

    res.status(200).json(updatedPhone);
  } catch (error) {
    res.status(400).json({ message: "Failed to update phone", error });
  }
};

// Delete a phone (DELETE)
exports.deletePhone = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPhone = await Phone.findByIdAndDelete(id);

    if (!deletedPhone)
      return res.status(404).json({ message: "Phone not found" });

    res.status(200).json({ message: "Phone deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete phone", error });
  }
};
