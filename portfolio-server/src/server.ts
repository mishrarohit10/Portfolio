import express from 'express';
import cors from 'cors';
import expressip from 'express-ip';

const app = express();

let visitor: { [key: string]: number } = {};

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

app.use(cors());
app.use(expressip().getIpInfoMiddleware);

app.get('/', (req, res) => {
    const ip = req.headers['x-client-ip'] as string;
    visitor[ip] = visitor[ip] ? visitor[ip] + 1 : 1;
    console.log(visitor);
    res.json({ visitor });
});

