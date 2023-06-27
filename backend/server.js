import app from "./app.js"
import { connectDB } from "./server/data/database.js";
import cloudinary from "cloudinary";
import Stripe from 'stripe';

connectDB();

const secret = process.env.STRIPE_SECRET
export const stripe = new Stripe(secret);


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});


app.listen(process.env.PORT, () => {
    console.log(
        `Server listening on port: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE.`
    );
});