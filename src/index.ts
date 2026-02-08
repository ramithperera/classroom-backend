import express from "express";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req , res) => {
    res.send('Welcome to Classroom Backend API!');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})