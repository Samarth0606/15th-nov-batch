import { createRestaurant, deleteRestaurant, readRestaurant, updateRestaurant } from "../controllers/restaurant.controller.js";


export function restRoutes(app){
    app.post('/api/restaurant' , createRestaurant);
    app.get('/api/restaurants' , readRestaurant);
    app.patch('/api/restaurant/:id' , updateRestaurant);
    app.delete('/api/restaurant/:id' , deleteRestaurant);
}