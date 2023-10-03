import { Router } from "express"
import { __dirname } from "../../utils.js"
import managerUser from "../dao/mongoosedb/managerMongose/managerUserMongoose.js"

const router = Router()

const ManagerUser = new managerUser()

router.get("/", async (req, res) => {
    console.log({user:req.session.user});
    res.render("profile", { user: req.session.user })
})


router.get("/addCart", async (req, res) => {
    try {
        if (req.session.user && req.session.user.id) {
            const { id } = req.session.user
            console.log("desde req.session", id);

            const createCarToUser = await ManagerUser.addCartToUser(id)


            res.json({ createCarToUser })


        } else {
            return res.status(403).send('Usuario no se ha logeado o no resgistrado ')
        }
    } catch (error) {

    }


})



export default router