const express = require('express')
const router = express.Router()
const itemCtrl = require('../controllers/item')

router.get('/', itemCtrl.getAllItems)
router.post('/', itemCtrl.addItem)
router.delete('/:id', itemCtrl.deleteItem)

//commit
module.exports = router