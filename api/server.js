import express from "express"
import MongoClient from "mongodb"

const app = express();

app.get('/',(req,res) => 
    res.send("Home Page data")
)
app.get('/api/profile/:name', async (req,res) => {

    try {
        const userName = req.params.name;
        const client = await MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true});
        const db = cleint.db('gyde-db');
    
        const userInfo = await db.collection('user').findOne({
            name: userName
        });
    
        res.status(200).json(userInfo);
    
        client.close();
    } catch(error) {

        res.status(500).json({message:"Error connecting to db.", error});
    }

});

app.listen(8000, () => console.log("Listening on port 8000"));