const Item = require('../models/Item')

exports.getAllItems = (req, res, next) => {
    Item.find()
        .sort({date: -1}) 
        .then(items => res.status(200).json(items))
        .catch(err => res.status(404).json(err))
}

exports.addItem = (req, res, next) => {
    delete req.body._id
    const item = new Item({
        name: req.body.name
    })
    item.save()
        .then((item) => res.status(200).json(item))
        .catch(() => res.status(500).json({err}))
}

exports.deleteItem = (req, res, next) => {
       Item.deleteOne({_id: req.params.id})
           .then(() => res.status(200).json({message: "Item deleted!"}))
           .catch((err) => res.status(404).json({err}) )
    }

    