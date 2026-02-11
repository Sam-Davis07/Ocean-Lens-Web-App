const express = require("express")
const cors = require("cors")
const db = require("./db")
const bcrypt = require("bcrypt")


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

app.post("/signup", async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.json({ success: false, message: "Missing fields" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    db.run(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, hashedPassword],
        function (err) {
            if (err) {
                return res.json({ success: false, message: "User already exists" })
            }
            res.json({ success: true })
        }
    )
})
app.post("/login", (req, res) => {
    const { email, password } = req.body

    db.get(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (err, user) => {

            if (!user) {
                return res.json({ success: false, message: "User not found" })
            }

            const match = await bcrypt.compare(password, user.password)

            if (!match) {
                return res.json({ success: false, message: "Wrong password" })
            }

            res.json({
                success: true,
                user: { id: user.id, email: user.email }
            })
        }
    )
})

app.delete("/cart/:id", (req, res) => {
    db.run("DELETE FROM cart WHERE id = ?", [req.params.id])
    res.sendStatus(200)
})


app.listen(5000)
