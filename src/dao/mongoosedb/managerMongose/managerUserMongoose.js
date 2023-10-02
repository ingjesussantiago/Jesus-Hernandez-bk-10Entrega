import userModel from "../models/user.model.js"
import { cartModel } from "../models/cart.model.js";


export default class ManagerCart {

    addCartToUser = async (id) => {
        try {

            const user = await userModel.findById(id)
            console.log("getuser", user);
            if (user.cart.length === 0) {
                console.log("El carrito está vacío");

                const cart = await cartModel.create({});
                console.log(cart);   
                
                //ahora hay que insertar el carrito al usuario


            } else {
                console.log("El carrito contiene elementos");
            }

            return user

        } catch (error) {
            console.error('Error al traer add carrito:', err.message);
            return [];
        }

    }



}
