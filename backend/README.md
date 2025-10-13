# Backend (MySQL) for PWAF-TP1

This folder contains a minimal Node script to initialize a MySQL database for local development.

Prerequisites

- A running MySQL server accessible from this machine. You can use Docker or a local MySQL install.

Usage

1. Copy `.env.example` to `.env` and adjust connection values if needed.

2. Install dependencies:

   npm install

3. Run the init script to create the database, tables and seed sample data:

   npm run init-db

The script will connect using the environment variables and create the database named by `MYSQL_DATABASE`.

Security note

- Never commit `.env` to source control. The repository's `.gitignore` already contains `/.env`.