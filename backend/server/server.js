import app from '../app.js'
import { config } from 'dotenv'

config({
    path: "./server/data/config.env"
})


app.listen(process.env.PORT, () => {
    console.log(`server is running on:=> ${process.env.PORT}, in ${process.env.NODE_ENV} mode`);
})