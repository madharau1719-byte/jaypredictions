const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ status: "Backend running" });
});

app.post("/stkpush", (req, res) => {
    const phone = req.body.phone;

    if (!phone) {
        return res.json({ success: false, message: "Phone required" });
    }

    console.log("STK sent to:", phone);

    res.json({
        success: true,
        reference: "TXN123"
    });
});

app.get("/verify/:ref", (req, res) => {
    res.json({
        paid: true
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on " + PORT);
});
