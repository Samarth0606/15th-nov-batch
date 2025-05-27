import mongoose from 'mongoose';

// schema
const restaurantSchema = new mongoose.Schema({
//   name:{
//     type: String,
//     required: true,
//     min: 3,
//     max: 10
//   },
    name: String,
    imageUrl: String,
    rating: Number,
    cuisines: String,
    deliveryTime: String
});

// model
const RestaurantModel = mongoose.model('Restaurants', restaurantSchema);

export default RestaurantModel;
