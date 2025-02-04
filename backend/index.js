import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, mongoDBCon } from './config.js'
import UserRoutes from './routes/UserRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());


app.use('/users', UserRoutes);

app.get('/', (req, res) => {
    console.log('Hello');
    return res.status(234).json({ message: 'Welcome' });
});


mongoose.connect(mongoDBCon)
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(PORT, () => {
            console.log(`App is listening to port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });