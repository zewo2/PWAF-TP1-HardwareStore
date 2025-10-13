import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import process from 'process';

dotenv.config();

const DB_NAME = process.env.MYSQL_DATABASE;

function requireEnv(name) {
  const v = process.env[name];
  if (!v) {
    console.error(`Missing required environment variable: ${name}. Please copy .env.example to .env and fill values.`);
    process.exit(2);
  }
  return v;
}

async function init() {
  const host = process.env.MYSQL_HOST || '127.0.0.1';
  const port = process.env.MYSQL_PORT ? Number(process.env.MYSQL_PORT) : 3306;
  const user = requireEnv('MYSQL_USER');
  const password = requireEnv('MYSQL_PASSWORD');
  const dbName = DB_NAME || requireEnv('MYSQL_DATABASE');

  let conn;
  try {
    conn = await mysql.createConnection({ host, port, user, password });
    console.log(`Connected to MySQL at ${host}:${port} as ${user}`);

  // create database if not exists
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
  console.log('Ensured database exists:', dbName);

  // use the database
  await conn.changeUser({ database: dbName });

    // create products table to match frontend product shape
    await conn.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        brand VARCHAR(100) DEFAULT NULL,
  \`type\` VARCHAR(100) DEFAULT NULL,
        description TEXT,
        category VARCHAR(100) DEFAULT '',
        price DECIMAL(10,2) NOT NULL DEFAULT 0,
  \`discountPercent\` INT DEFAULT NULL,
        images JSON DEFAULT (JSON_ARRAY()),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);

    // seed sample data if products empty
    const [rows] = await conn.query('SELECT COUNT(1) as c FROM products');
    const count = rows && rows[0] ? rows[0].c : 0;
    if (count === 0) {
      // insert sample products with full schema
      const sample = [
        ['Intel Core i9-13900K', 'High-end 24-core processor for gaming and productivity.', 'Intel', 'CPU', 'processors', 649.99, 10, JSON.stringify([
          'https://img.globaldata.pt/images/BX8071513900K/58b8f2f7de695f7003ade9ddf3c074ef.jpg?auto=compress%2Cformat&fit=fill&fill-color=fff&q=70&fill=solid&w=727&h=727',
        ])],
        ['NVIDIA GeForce RTX 4090', 'Flagship graphics card for extreme gaming and creative work.', 'NVIDIA', 'GPU', 'graphics', 1799.99, null, JSON.stringify([
          'https://img.globaldata.pt/products/912-V510-265.jpg'
        ])],
        ['Corsair Vengeance 32GB DDR5', 'High-speed DDR5 memory for modern systems.', 'Corsair', 'RAM', 'memory', 189.99, 15, JSON.stringify([
          'https://a-static.mlcdn.com.br/1500x1500/memoria-ram-corsair-vengeance-ddr5-32gb-6000mhz-preto/valedc/vip38883qp/d55ca3039e11628f79da298ea0831155.jpeg'
        ])]
      ];

      await conn.query(
        'INSERT INTO products (name, description, brand, `type`, category, price, `discountPercent`, images) VALUES ?',[ sample ]
      );
      console.log('Inserted sample products with full schema');
    }

    // create contacts table
    await conn.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        reason VARCHAR(50) NOT NULL,
        message VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);


    console.log('Initialization complete.');
  } finally {
    if (conn) await conn.end();
  }
}

init().catch(err => {
  console.error('DB init failed:', err.message || err);
  process.exit(1);
});