import { Tracer, Logger } from './config/tracer';
import express from 'express';

Tracer.init();

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    Logger.info('User registration');

    const { name, password, confirm_password } = req.body;

    const { token } = req.headers;

    if (!token) return res.status(401).json({ message: 'Unauthorized user' });

    if (token !== 'ABC') res.status(401).json({ message: 'Invalid Token' });

    if (!name || !password || !confirm_password) return res.status(400).json({ message: 'Invalid fields' });

    if (password !== confirm_password) return res.status(400).json({ message: `Password doesn't match` });

    const user = { name, password };

    return res.status(200).json(user);
})

app.listen(3000, () => console.log('server is running'));