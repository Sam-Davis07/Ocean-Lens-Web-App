const sqlite3 = require("sqlite3").verbose()


const db = new sqlite3.Database("./ecommerce.db")


db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
price INTEGER,
image TEXT
)`)


    db.run(`CREATE TABLE IF NOT EXISTS cart (
id INTEGER PRIMARY KEY AUTOINCREMENT,
productId INTEGER,
quantity INTEGER
)`)


    db.run(`DELETE FROM products`)


    const stmt = db.prepare("INSERT INTO products (name, price, image) VALUES (?, ?, ?)")
    for (let i = 1; i <= 6; i++) {
        stmt.run(`Product ${i}`, 500 + i * 100, "https://via.placeholder.com/150")
    }
    stmt.finalize()
})


module.exports = db