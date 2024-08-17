const express = require('express');
const { Massage } = require('../service/service')
const router = express.Router()

const massageFunc = new Massage()

router.get('/services', async (req, res) => {
  try {
    const massageService = await massageFunc.readMassageItem();
    res.json(massageService)
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
})

router.get('/services/:id', async (req, res) => {
  const searchId = parseInt(req.params.id, 10);
  try {
    const searchedMassage = await massageFunc.readById(searchId);
    res.json(searchedMassage)
  } catch (error) {
    console.error('Error fetching massage contents:', error);
    res.status(500).json({ error: 'Failed to fetch massage content' });
  }
})


module.exports = router