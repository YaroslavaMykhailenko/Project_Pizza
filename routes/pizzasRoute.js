const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Pizza = require('../models/pizzaModel')
router.get("/getallpizzas", async(req, res) =>{
    try{

        const pizzas = await Pizza.find({})
        res.send(pizzas)

    } catch(error){
        return res.status(400).json({ message: error});

    }


})

router.post("/addpizza", async(req, res) => {

    const pizza = req.body.pizza

   try {
    const newpizza = new Pizza({
        name : pizza.name,
        image :pizza.image,
        varients : ['маленька', 'середня', 'велика'],
        description : pizza.description,
        category : pizza.category,
        prices : [pizza.prices]
    })
    await newpizza.save()
    res.send('Піца успішно додана в меню!')
   } catch (error) {
       return res.status(400).json({ message: error });
   }
  
})

module.exports = router;