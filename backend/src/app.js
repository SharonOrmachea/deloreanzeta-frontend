import express from "express";
import categoriaRoutes from "./routes/categoria.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import indexRoutes from "./routes/index.routes.js";
import authRoutes from "./routes/auth.routes.js";

import cors from "cors";

const app = express(); 

app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));
app.use("/api",indexRoutes);
app.use("/api",categoriaRoutes);
app.use("/api",productosRoutes);
app.use("/api",authRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    });
});

export default app;