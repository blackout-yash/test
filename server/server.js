import express from "express";
import cookies from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cookies());

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

// app.use(function (req, res, next) {
//     if (req.headers.origin) res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
//     else res.setHeader('Access-Control-Allow-Origin', "*");
//     res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//     next();
// });

app.get("/", (req, res, next) => {
    res.cookie("connect.sid", "token", {
        expires: new Date(Date.now() + 128986400),
        httpOnly: true,
        sameSite: 'none',
        secure: true
    });

    res.json({
        message: "cookie stored"
    })
})

app.get("/check", (req, res, next) => {
    const token = req.cookies['connect.sid'];
    if (token) {
        res.json({
            message: "token found"
        })
    } else {
        res.json({
            message: "token not found"
        })
    }
})

app.get("/logout", (req, res) => {
    res.clearCookie('connect.sid');
    res.json({
        message: "logout"
    })
})

app.listen(2323, console.log(2323));