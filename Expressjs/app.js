const express = require('express');

const app = express();
const PORT = 3010;

app.get('/', (req, res)=>{
    res.status(200);
    res.send("sadWelcome to rooasdat URL of Server");
});

app.listen(PORT, (error) =>{
        if(!error)
            console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);