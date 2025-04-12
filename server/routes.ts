import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Return success
      res.status(201).json({
        success: true,
        message: "Mensagem recebida com sucesso!",
        contactId: contactMessage.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Erro de validação",
          errors: validationError.details
        });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({
          success: false,
          message: "Erro interno ao processar sua mensagem"
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json({ success: true, messages });
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({
        success: false,
        message: "Erro ao buscar mensagens de contato"
      });
    }
  });

  // Mark a contact message as read
  app.patch("/api/contact/:id/read", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: "ID inválido"
        });
      }

      const success = await storage.markContactMessageAsRead(id);
      if (!success) {
        return res.status(404).json({
          success: false,
          message: "Mensagem não encontrada"
        });
      }

      res.json({
        success: true,
        message: "Mensagem marcada como lida"
      });
    } catch (error) {
      console.error("Error marking message as read:", error);
      res.status(500).json({
        success: false,
        message: "Erro ao marcar mensagem como lida"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
