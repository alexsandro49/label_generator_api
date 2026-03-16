import express from 'express';
import cors from 'cors';
import { productRoutes } from './routes/product';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", productRoutes);

export default app

if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
}
