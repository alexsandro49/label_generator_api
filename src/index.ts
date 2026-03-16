import express from 'express';
import cors from 'cors';
import { productRoutes } from './routes/product';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/", productRoutes);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});