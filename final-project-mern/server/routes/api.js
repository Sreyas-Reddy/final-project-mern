const express = require('express');
const router = express.Router();

// Sample endpoints
router.get('/items', (req, res) => res.json({ message: 'Get all items' }));

router.post('/items', (req, res) => res.json({ message: 'Create an item' }));

router.put('/items/:id', (req, res) => res.json({ message: `Update item ${req.params.id}` }));

router.delete('/items/:id', (req, res) => res.json({ message: `Delete item ${req.params.id}` }));

router.get('/status', (req, res) => res.json({ status: 'API is working' }));

module.exports = router;
