const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  brand: { 
    type: String, 
    enum: ['Xiaomi', 'Oppo', 'Vivo', 'Realme', 'OnePlus'], 
    required: true 
  },
  model: { 
    type: String, 
    required: true 
  },

  displaySize: { 
    type: String, 
    enum: ['5 inch', '6 inch', '7 inch and above'], 
    required: true 
  },

  chipset: { 
    type: String, 
    enum: ['Bionic', 'Snapdragon', 'Mediatek', 'Exynos', 'Unisoc', 'Kirin'], 
    required: true 
  },

  ram: { 
    type: String, 
    enum: ['4GB', '6GB', '8GB', '12GB', '16GB'], 
    required: true 
  },

  rom: { 
    type: String, 
    enum: ['32GB', '64GB', '128GB', '256GB', '1024GB'], 
    required: true 
  },

  battery: { 
    type: String, 
    enum: ['4000mAh', '5000mAh', '6000mAh'], 
    required: true 
  },

  features: { 
    type: [String], 
    enum: ['Dual SIM', 'Fast Charging', 'eSIM Support', 'Waterproof'], 
    default: [], 
    required: true 
  },

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

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
