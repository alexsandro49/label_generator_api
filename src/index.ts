import express from 'express';
import cors from 'cors';
import { productRoutes } from './routes/product';

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:/5173', 
    methods: ['GET'],
    credentials: true
}));

app.use("/", productRoutes);

export default app

if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
}
