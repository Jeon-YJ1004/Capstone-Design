const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 8000;
const cors = require('cors');
const db = require('./db.js');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/api/get", (req, res) => {
    const place=req.body.place;
    console.log(place);
    const sql = 'SELECT * FROM `cafeinfo` WHERE name LIKE %+?+%';
    // 전달받은 parameter 값
    // const params = req.query.idx
    db.query(sql,  (err, data) => {
        if(!err){
            
            // res.send({ cafe : data });
            console.log(data);
            res.send(data);
        } 
        else res.send(err);
    })
});
// app.post('/axios/add', (req, res) => {
    
//   });

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
}) 
