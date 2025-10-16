import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Dev panel authentication endpoint
  app.post("/api/dev-auth", (req, res) => {
    const { password } = req.body;
    const correctPassword = "devaccess123";
    
    if (password === correctPassword) {
      res.json({ authenticated: true });
    } else {
      res.status(401).json({ authenticated: false, message: "Incorrect password" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
