const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//app.use(cors());
app.use(bodyParser.json());

app.get('/hello/:name',(req,res)=>{
    console.log(req.params.name);
    res.send("Hello from "+req.params.name);
})

app.post('/hello',(req,res)=>{
    console.log(req.query);
    console.log('-------------');
    console.log(req.body);
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.headers)
    res.send("Hello to post")
})

app.all('*',(req,res)=>{
    res.send('Please a valid route');
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})