// /server/routes/laptopRoutes.js
const express = require('express');
const {
  getAllLaptops,
  getLaptopById,
  createLaptop,
  updateLaptop,
  deleteLaptop,
} = require('../controllers/laptopController');

const router = express.Router();

// Route to get all laptops
router.get('/laptops', getAllLaptops);

// Route to get a single laptop by ID
router.get('/laptops/:id', getLaptopById);

// Route to create a new laptop
router.post('/laptops', createLaptop);

// Route to update an existing laptop by ID
router.put('/laptops/:id', updateLaptop);

// Route to delete a laptop by ID
router.delete('/laptops/:id', deleteLaptop);

module.exports = router;
