import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes)

app.get('/users', (req, res) => {
    console.log('acessou a rota');
    return res.json("Olá pessoas")
    
});

app.listen(3333);