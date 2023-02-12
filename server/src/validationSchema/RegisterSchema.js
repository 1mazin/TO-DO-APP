import { check} from "express-validator"

export const RegisterSchema=[
    check('name')
    .trim()
    .isAlpha()
    .withMessage("Name must include alphabets only"),
    check('username','username is required')
    .exists()
    .isAlphanumeric()
    .withMessage("username should be alphanumeric")
    .trim()
    .isLength({min:6,max:32}),
     check("password","password is required")
     .exists()
     .isLength({min:6,max:32})
     .withMessage("Password is less than 6 or greater than 32")
     .trim()
    ,check('email','email is required')
    .exists()
    .isEmail()

]
