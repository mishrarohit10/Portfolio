import express from 'express';
import cors from 'cors';
import expressip from 'express-ip';
import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const secretKey = process.env.SECRET_KEY;
console.log("secretKey:", secretKey);

let visitor: { [key: string]: { lastVisit: number } } = {};
let totalVisitors = 0;
const TIME_LIMIT = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
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

interface Language {
    name: string;
    total_seconds: number;
    percent: number;
    digital: string;
    decimal: string;
    text: string;
    hours: number;
    minutes: number;
}

interface WakatimeResponse {
    data: {
        human_readable_total: string,
        languages: Language[];
    }
}

app.get('/stats', async(req, res) => {
  try {
    const response: AxiosResponse<WakatimeResponse> = await axios.get(`https://wakatime.com/api/v1/users/current/stats/all_time?api_key=${secretKey}`);
    const responseData: WakatimeResponse = {
      data: {
        human_readable_total: response.data.data.human_readable_total,
        languages: response.data.data.languages,
      },
    };
    res.json(responseData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error fetching data from Wakatime API');
  }
});

