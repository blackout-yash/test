import express from "express";
import cookies from "cookie-parser";
import session from "cookie-session";
import cors from "cors";

const app = express();
app.use(cookies());

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(session({
    secret: "process.env.SESSION_SECRET",
    resave: false,
    saveUninitialized: true,
    proxy: true,
    cookie: {
        secure: process.env.NODE_ENV === "development" ? false : true,
        httpOnly: process.env.NODE_ENV === "development" ? false : true,
        sameSite: process.env.NODE_ENV === "development" ? false : "none",
    }
}));

app.get("/", (req, res, next) => {
    // res.cookie("connect.sid", "token", {
    //     expires: new Date(Date.now() + 128986400),
    //     httpOnly: true,
    //     sameSite: 'none',
    //     secure: true
    // });

    // res.json({
    //     message: "cookie stored"
    // })

    req.session.userId = "yash";

    // Save the session to the store
    req.session.save((err) => {
        if (err) {
            console.log(error);
        } else {
            console.log(req.session.userId);
            res.redirect("http://localhost:3000");
        }
    });
})

app.get("/check", (req, res, next) => {
    // const token = req.cookies['connect.sid'];
    // if (token) {
    //     res.json({
    //         message: "token found"
    //     })
    // } else {
    //     res.json({
    //         message: "token not found"
    //     })
    // }
    res.json({
        message: req.session.userId
    })
})

app.get("/logout", (req, res) => {
    res.clearCookie('connect.sid');
    res.json({
        message: "logout"
    })
})

app.listen(2323, console.log(2323));