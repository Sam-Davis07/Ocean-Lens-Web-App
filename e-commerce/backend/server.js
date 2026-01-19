const express = require("express")
const cors = require("cors")
const db = require("./db")


const app = express()
app.use(cors())
app.use(express.json())


app.get("/products", (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        res.json(rows)
    })
})


app.get("/cart", (req, res) => {
    db.all(`SELECT cart.id, products.name, products.price, cart.quantity
FROM cart JOIN products ON cart.productId = products.id`, [], (err, rows) => {
        res.json(rows)
    })
})


app.post("/cart", (req, res) => {
    const { productId } = req.body
    db.get("SELECT * FROM cart WHERE productId = ?", [productId], (err, row) => {
        if (row) {
            db.run("UPDATE cart SET quantity = quantity + 1 WHERE productId = ?", [productId])
        } else {
            db.run("INSERT INTO cart (productId, quantity) VALUES (?, 1)", [productId])
        }
        res.sendStatus(200)
    })
})


app.delete("/cart/:id", (req, res) => {
    db.run("DELETE FROM cart WHERE id = ?", [req.params.id])
    res.sendStatus(200)
})


app.listen(5000)