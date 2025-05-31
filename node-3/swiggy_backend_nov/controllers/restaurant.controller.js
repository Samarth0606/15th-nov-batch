import RestaurantModel from "../models/Restaurant.models.js";

export async function createRestaurant(req,res){
    // logic
    try{
        let {name,imgUrl,rating, cuisines, deliveryTime} = req.body;
        const newRest = await RestaurantModel.create({name,imgUrl,rating, cuisines, deliveryTime})
        res.status(201).json({message:"new rest has been added"})
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}

export async function readRestaurant(req,res){
    try{
        const data = await RestaurantModel.find();
        return res.status(200).json(data)
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}


export async function updateRestaurant(req,res){
    try{
        // console.log(req.params);
        let {id} = req.params;
        // console.log(req.body);
        let updatedRest = await RestaurantModel.findByIdAndUpdate(id , req.body , {new:true})
        res.status(200).json({updatedRest})

    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}


export async function deleteRestaurant(req,res){
    try{
        let {id} = req.params;
        await RestaurantModel.findByIdAndDelete(id);
        res.status(200).json({message:"Restaurant deleted successfully"})
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }
}