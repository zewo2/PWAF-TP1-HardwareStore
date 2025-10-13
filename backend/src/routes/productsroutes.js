import { Router } from "express";
import pool from "../db.js";

const router = Router();

// Get all products
router.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products");
        res.json(rows);
    } catch (err) {
        console.error("Failed to fetch products", err);
        res.status(500).json({ error: "Failed to fetch products" });
    }
});

// Get product by ID
router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: "Invalid id" });
    try {
        const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [id]);
        if (!rows || rows.length === 0) return res.status(404).json({ error: "Not found" });
        res.json(rows[0]);
    } catch (err) {
        console.error("Failed to fetch product", err);
        res.status(500).json({ error: "Failed to fetch product" });
    }
});

// Post a new product
router.post("/", async (req, res) => {
    const { name, brand, type, description, category, price, discountPercent, images } = req.body;
    if (!name || !brand || !type || !description || !category || price == null || !Array.isArray(images)) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const [result] = await pool.query(
            "INSERT INTO products (name, brand, type, description, category, price, discountPercent, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [name, brand, type, description, category, price, discountPercent || null, JSON.stringify(images)]
        );
    console.log('Product created:', { id: result.insertId, name, brand, type });
    res.status(201).json({ success: true, message: 'Product created successfully', id: result.insertId, name, brand, type, description, category, price, discountPercent, images });
    } catch (err) {
        console.error("Failed to create product", err);
        res.status(500).json({ error: "Failed to create product" });
    }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: "Invalid id" });
    try {
        const [result] = await pool.query("DELETE FROM products WHERE id = ?", [id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: "Not found" });
        console.log('Product deleted:', id);
        res.json({ success: true, message: 'Product deleted successfully' });
    } catch (err) {
        console.error("Failed to delete product", err);
        res.status(500).json({ error: "Failed to delete product" });
    }
});

// Update a product by ID
router.put("/:id", async (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: "Invalid id" });
    const { name, brand, type, description, category, price, discountPercent, images } = req.body;
    if (!name || !brand || !type || !description || !category || price == null || !Array.isArray(images)) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    try {
        const [result] = await pool.query(
            "UPDATE products SET name = ?, brand = ?, type = ?, description = ?, category = ?, price = ?, discountPercent = ?, images = ? WHERE id = ?",
            [name, brand, type, description, category, price, discountPercent || null, JSON.stringify(images), id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ error: "Not found" });
        console.log('Product updated:', id);
        res.json({ success: true, message: 'Product updated successfully', id, name, brand, type, description, category, price, discountPercent, images });
    } catch (err) {
        console.error("Failed to update product", err);
        res.status(500).json({ error: "Failed to update product" });
    }
});

export default router;
