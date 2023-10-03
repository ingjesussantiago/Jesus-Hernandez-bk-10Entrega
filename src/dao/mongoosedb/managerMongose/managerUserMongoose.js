import userModel from "../models/user.model.js"
import { cartModel } from "../models/cart.model.js";


export default class ManagerCart {

    addCartToUser = async (id) => {
        try {

            const user = await userModel.findById(id).populate("cart._id")
            console.log("getuser", user);
            if (user.cart.length === 0) {
                console.log("El carrito está vacío");

                const cart = await cartModel.create({});
                console.log(cart);


                const insertCartToUser = await userModel.updateOne({
                    _id: user._id
                }, {
                    $set: { cart: cart }
                },
                    (err, result) => {
                        if (err) throw err;
                        console.log('Carrito asociado al usuario correctamente');
                        client.close(); // Cerrar la conexión a la base de datos
                    }
                ).exec();

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
