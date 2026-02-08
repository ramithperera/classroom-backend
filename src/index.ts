import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req , res) => {
    res.send('Welcome to Classroom Backend API!');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})