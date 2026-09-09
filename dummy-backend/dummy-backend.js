import express from "express";

const port = 3000;
const app = express();


app.get("/api/message" , (req, res)=>{
    res.json({message : "welcome to dummy backend"}
);
})

app.listen(port , () =>{
console.log(`Server is running on port ${port}`);
});
