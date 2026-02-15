import AgentAPI from "apminsight";
AgentAPI.config();

import express from "express";
import cors from "cors";
import subjectsRouter from "./routes/subjects";
import securityMiddleware from "./middleware/security";
import {toNodeHandler} from "better-auth/node";
import {auth} from "./lib/auth";

const app = express();
const port = process.env.PORT || 8000;
const frontendUrl = process.env.FRONTEND_URL;
if (!frontendUrl) {
    throw new Error("FRONTEND_URL is required for CORS configuration");
}

app.use(cors({
    origin: frontendUrl,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.all('/api/auth/{*splat}', toNodeHandler(auth));

app.use(express.json());

app.use(securityMiddleware);

app.use('/api/subjects', subjectsRouter)

app.get('/', (req, res) => {
    res.send('Welcome to Classroom Backend API!');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
})