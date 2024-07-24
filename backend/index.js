// import 'dotenv/config'
// import connectDB from "./src/db/index.js";
// import { app } from './src/app.js';

// // dotenv.config();

// connectDB()
// .then( () => {
//     app.listen( process.env.PORT || 3001, () => {
//         console.log(`Server running at port ${process.env.PORT}`)
//     })
// })
// .catch( (err) => {
//     console.log(err);
// })

import 'dotenv/config';
import connectDB from "./src/db/index.js";
import { app } from './src/app.js';
import userRoutes from './src/routes/users.routes.js';
import { errorHandler } from './src/middleware/errorMiddleware.js';

// Connect to the database
connectDB()
    .then(() => {
        // Use the user routes
        app.use('/api/users', userRoutes);

        // Error handling middleware
        app.use(errorHandler);

        // Start the server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running at port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1); // Exit process with failure
    });
