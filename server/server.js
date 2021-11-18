const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./db.js');


app.get('cafes/searching', (req, res) => {
    // Gu=req.get['gu']
    db.query("SELECT * FROM cafeinfo WHERE name= '스타벅스'", (err, data) => {
        if(!err) res.send({ cafe : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
}) 