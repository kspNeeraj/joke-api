import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import axios from "axios";


const app=express();
const port=3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/getJoke",async (req,res)=>{
    const response= await axios.get("https://v2.jokeapi.dev/joke/Any");
    console.log(response)
    res.render("index",{
        Response:response.data
    })
})

app.get("/",(req,res)=>{
    res.render("index");
})








app.listen(port,function(){
    console.log(`server is runnung on ${port}`);
});