/*
   * by balzz
   * dont delete my wm
   * follow more instagram: @iqstore78
*/

const express = require("express")
const axios = require("axios")
const session = require("express-session")
const path = require("path")
const bodyParser = require('body-parser')
const { limit, checkBanned } = require("../declaration/rateLimit.jsx")
const isAuthenticated = require("../declaration/autentikasi.jsx")

const app = express()
app.use(checkBanned)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
    secret: 'Haki',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 } 
}))

// function isAuthenticated(req, res, next) {
//     if (req.session && req.session.email) {
//         next()
//     } else {
//         res.redirect("/login")
//     }
// }

/* !=== PAGE ===! */
app.get("/", limit, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/docs/info.html"))
})
app.get("/docs", limit, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/docs/docs.html"))
})

app.get("/login", limit, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/login.html"))
})

app.get("/profile", limit, isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../pages/profile.html"))
})

/* = ENDPOINT FITURE = */
app.post('/register', (req, res) => {
    require("../declaration/register.jsx")(req, res)
})

app.post('/login', (req, res) => {
    require("../declaration/login.jsx")(req, res)
})

app.get("/logout", (req, res) => {
    require("../declaration/logout.jsx")(req, res)
})

app.get("/prof", isAuthenticated, (req, res) => {
    require("../declaration/profile.jsx")(req, res)
})


app.get("/blackbox", limit, async (req, res) => {
    require("../pages/fitures/blackbox.js")(req, res)
})
app.get("/css", limit, async (req, res) => {
    require("../pages/fitures/css.js")(req, res)
})

app.get("/tiktokdl", limit, async (req, res) => {
    require("../pages/fitures/tiktok.js")(req, res)
})
app.get("/fb", limit, async (req, res) => {
    require("../pages/fitures/Fb.js")(req, res)
})
app.get("/upscale", limit, async (req, res) => {
    require("../pages/fitures/upscaler.js")(req, res)
})
app.get("/andiff", limit, async (req, res) => {
    require("../pages/fitures/andiff.js")(req, res)
})
app.get("/imagine", limit, async (req, res) => {
    require("../pages/fitures/animagine.js")(req, res)
})
app.get("/bing", limit, async (req, res) => {
    require("../pages/fitures/bing.js")(req, res)
})
app.get("/duckduckgo", limit, async (req, res) => {
    require("../pages/fitures/duckduckgo.js")(req, res)
})
app.get("/teachme", limit, async (req, res) => {
    require("../pages/fitures/teachme.js")(req, res)
})
app.get("/gsmarena", limit, async (req, res) => {
    require("../pages/fitures/gsmarena.js")(req, res)
})
app.get("/dependent", limit, async (req, res) => {
    require("../pages/fitures/dependent.js")(req, res)
})
app.get("/yts", limit, async (req, res) => {
    require("../pages/fitures/ytsearch.js")(req, res)
})
app.get("/lyrics", limit, async (req, res) => {
    require("../pages/fitures/lyrics.js")(req, res)
})
app.get("/spotify", limit, async (req, res) => {
    require("../pages/fitures/spotify.js")(req, res)
})
app.get("/google", limit, async (req, res) => {
    require("../pages/fitures/google.js")(req, res)
})
app.get("/moshai", limit, async (req, res) => {
    require("../pages/fitures/moshai.js")(req, res)
})
app.get("/mod", limit, async (req, res) => {
    require("../pages/fitures/happymod.js")(req, res)
})
app.get("/ssweb", limit, async (req, res) => {
    require("../pages/fitures/ssweb.js")(req, res)
})
app.get("/instagramDL", limit, async (req, res) => {
    require("../pages/fitures/instagram.js")(req, res)
})

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../pages/404.html"))
})

module.exports = app
