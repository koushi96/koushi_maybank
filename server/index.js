const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const {Pool} = require('pg')

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "p@ssw0rd",
    database: "postgres"
})


app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
pool.connect();
app.get("/api/get", (req, res)=>{
    const sqlSelect = "SELECT * FROM product ORDER BY id ASC"
    pool.query(sqlSelect, (err, result)=>{
        if(!err){
            res.send(result);
        } else {
            console.log(err)
        }
        
    })
})
app.post("/api/update", (req, res)=>{
    const stock = req.body.stock
    const id = req.body.id
    const sqlUpdate = "UPDATE product SET stock = $1 WHERE id = $2 "
    pool.query(sqlUpdate, [stock, id], (err, res)=>{
        console.log(err)
    })
    
})
app.post("/api/delete", (req, res)=>{
    const id = req.body.id
    console.log(id)
    const sqlDelete = "DELETE FROM product WHERE id = $1 "
    pool.query(sqlDelete, [id], (err, res)=>{
        console.log(err)
    })
    
})


app.listen(3001, ()=>{
    console.log("running on port 3001");
})