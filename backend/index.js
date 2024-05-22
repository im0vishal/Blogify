import 'dotenv/config'
import connectDB from "./src/db/index.js";
import { app } from './src/app.js';

// dotenv.config();

connectDB()
.then( () => {
    app.listen( process.env.PORT || 3001, () => {
        console.log(`Server running at port ${process.env.PORT}`)
    })
})
.catch( (err) => {
    console.log(err);
})