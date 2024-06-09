import express from 'express';
import cors from 'cors';
import expressip from 'express-ip';

const app = express();

let visitor: { [key: string]: { lastVisit: number } } = {};
let totalVisitors = 0;
const TIME_LIMIT = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

app.use(cors());
app.use(expressip().getIpInfoMiddleware);

app.get('/', (req, res) => {
    const ip = req.ipInfo?.ip;
    if (!ip) {
        return res.status(500).json({ error: 'Unable to determine IP' });
    }
    const now = Date.now();
    if (!visitor[ip] || now - visitor[ip].lastVisit > TIME_LIMIT) {
        visitor[ip] = { lastVisit: now };
        totalVisitors++;
    }
    console.log('visitor:', visitor);
    res.json({ totalVisitors, visitor });
});

