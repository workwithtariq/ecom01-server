// /server/routes/phoneRoutes.js
const express = require('express');
const {
  getAllPhones,
  getPhoneById,
  createPhone,
  updatePhone,
  deletePhone,
} = require('../controllers/phoneController');

const router = express.Router();

// Route to get all phones
router.get('/phones', getAllPhones);

// Route to get a single phone by ID
router.get('/phones/:id', getPhoneById);

// Route to create a new phone
router.post('/phones', createPhone);

// Route to update an existing phone by ID
router.put('/phones/:id', updatePhone);

// Route to delete a phone by ID
router.delete('/phones/:id', deletePhone);

module.exports = router;
