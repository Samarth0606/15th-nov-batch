import { createRestaurant, readRestaurant } from "../controllers/restaurant.controller.js";


export function restRoutes(app){
    app.post('/api/restaurant' , createRestaurant);
    app.get('/api/restaurants' , readRestaurant)
}