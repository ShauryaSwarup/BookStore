import express from "express";
import mysql from "mysql";
import cors from "cors";
// import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3310,
    password: "password",
    database: "test",
});

app.get("/", (req, res) => {
    res.json("Welcome to the homepage");
});

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (err, data) => {
        if (err) res.json(err);
        else res.json(data);
    });
});
app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover,
    ];
    db.query(q, [values], (err, data) => {
        if (err) res.json(err);
        return res.json("Inserted successfully!");
    });
});
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";
    db.query(q, [bookId], (err, data) => {
        if (err) res.json(err);
        return res.json("Deleted successfully!");
    });
});
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q =
        "UPDATE books SET `title` = ?, `desc`= ?, `price` = ?, `cover` = ? WHERE id = ?";
    const values = [
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.cover,
    ];
    db.query(q, [...values, bookId], (err, data) => {
        if (err) res.json(err);
        return res.json("Updated successfully!");
    });
});
app.listen(8800, () => {
    console.log("Listening at 8800!");
});
