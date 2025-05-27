import RestaurantModel from "../models/Restaurant.models.js";

export function  createRestaurant(req,res){
    // logic

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
