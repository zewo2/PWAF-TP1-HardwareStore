import { Router } from "express";
import pool from "../db.js";

const router = Router();

// Get all contacts
router.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM contacts");
        res.json(rows);
    } catch (err) {
        console.error("Failed to fetch contacts", err);
        res.status(500).json({ error: "Failed to fetch contacts" });
    }
});

// Get contact by ID
router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: "Invalid id" });
    try {
        const [rows] = await pool.query("SELECT * FROM contacts WHERE id = ?", [id]);
        if (!rows || rows.length === 0) return res.status(404).json({ error: "Not found" });
        res.json(rows[0]);
    } catch (err) {
        console.error("Failed to fetch contact", err);
        res.status(500).json({ error: "Failed to fetch contact" });
    }
});

// Post a new contact
router.post("/", async (req, res) => {
    const { name, email, reason, message } = req.body;
    if (!name || !email || !reason || !message) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const [result] = await pool.query(
            "INSERT INTO contacts (name, email, reason, message) VALUES (?, ?, ?, ?)",
            [name, email, reason, message]
        );
    console.log('Contact created:', { id: result.insertId, name, email, reason });
    res.status(201).json({ success: true, message: 'Contact created successfully', id: result.insertId, name, email, reason, content: message });
    } catch (err) {
        console.error("Failed to create contact", err);
        res.status(500).json({ error: "Failed to create contact" });
    }
});

// Delete a contact by ID
router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: "Invalid id" });
    try {
        const [result] = await pool.query("DELETE FROM contacts WHERE id = ?", [id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: "Not found" });
        res.json({ success: true, message: "Contact deleted successfully" });
    } catch (err) {
        console.error("Failed to delete contact", err);
        res.status(500).json({ error: "Failed to delete contact" });
    }
});

export default router;