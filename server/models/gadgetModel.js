const mongoose = require('mongoose');

const gadgetSchema = new mongoose.Schema({
  category: { 
    type: String, 
    enum: ['Smart Watch', 'Earbuds', 'Neckband', 'Power Bank'], 
    required: true 
  },

  brand: {  
    type: String, 
    enum: ['Xiaomi', 'Samsung', 'Motorola', 'Orimo', 'Baseus'], 
    required: true 
  },

  model: { 
    type: String, 
    required: true 
  },

  features: { 
    type: [String], 
    enum: ['Waterproof', 'Noise Cancellation', 'Wireless Charging', 'Bluetooth 5.0', 'Heart Rate Monitor'], 
    default: [], 
    required: true 
  },

  batteryLife: { 
    type: String, 
    required: false 
  }, // For gadgets like smartwatches or earbuds

  price: { 
    type: Number, 
    required: true 
  },

  availability: { 
    type: String, 
    enum: ['In stock', 'Out of stock', 'Pre-order', 'Upcoming'], 
    required: true 
  },

  releaseDate: { 
    type: Date, 
    default: Date.now 
  },

  description: { 
    type: String 
  },

  ratings: { 
    type: Number, 
    min: 1, 
    max: 5 
  }
});

const Gadget = mongoose.model('Gadget', gadgetSchema);

module.exports = Gadget;
