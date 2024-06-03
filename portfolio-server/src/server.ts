import express from 'express';
import cors from 'cors';

const app = express();

let visitor = 0;

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

app.use(cors());
app.use((req, res, next) => {
    visitor++;
    console.log('Visitor:', visitor);
    next();
})  

app.get('/', (req, res) => {
  res.send('Hello World Im alive');
});

