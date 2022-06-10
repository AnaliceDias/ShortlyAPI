import dotenv from 'dotenv';
import app from './src/app/index.js'

dotenv.config();

const PORT = process.env.PORT;

app.listen(() => {
    console.log(`Servidor no ar na porta: ${PORT}`);
});