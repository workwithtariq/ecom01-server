// /server/routes/gadgetRoutes.js
const express = require('express');
const {
  getAllGadgets,
  getGadgetById,
  createGadget,
  updateGadget,
  deleteGadget,
} = require('../controllers/gadgetController');

const router = express.Router();

// Route to get all gadgets
router.get('/gadgets', getAllGadgets);

// Route to get a single gadget by ID
router.get('/gadgets/:id', getGadgetById);

// Route to create a new gadget
router.post('/gadgets', createGadget);

// Route to update an existing gadget by ID
router.put('/gadgets/:id', updateGadget);

// Route to delete a gadget by ID
router.delete('/gadgets/:id', deleteGadget);

module.exports = router;
