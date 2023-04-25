var mongoClient = require("mongodb").MongoClient;

var url =  "mongodb://127.0.0.1:27017/";

const client = new mongoClient(url, {useUnifiedTopology: true}); 

async function run(); {
    try{
        await.client.connect;

        const APWMyDB = client.db("APWMyDB"); 
        const users = APWMyDB.collection("users"); 
        const scores = APWMyDB.collection("scores"); 
        const words = APWMyDB.collection("words");
        const correct_guesses = APWMyDB.collection("correct_guesses");
        const incorrect_guesses = APWMyDB.collection("incorrect_guesses"); 

        let users = dbManager.get().collection("users");
        let words = dbManager.get().collection("words");
        let scores = dbManager.get().collection("scores"); 
        let correct_guesses = dbManager.get().collection("correct_guesses");
        let incorrect_guesses = dbManager.get().collection("incorrect_guesses");
        
        const database = client.db("APWMyDB");
        const users = database.collection("users"); 
        const doc = {
            username: "user1",
            password: "password1",
            created_at: new Date()
        }
        const options = {
            username: "user1"
        }
        const users = await users.findOne(query);
        const result = users.insertOne(doc);

        const database = client.db("APWMyDB");
        const words = database.collection("words");
        const doc = {
            word: "example",
            submitted_by: "user1",
            created_at: new Date();


        }
        const options = {
        }
        const words = await words.findOne(query);
        
        const result = words.insertOne(doc);

        const database = client.db("scores"); 
        const scores = database.collection("scores");
        const filter = {score: 100};
        const updateDoc = {
            username: "user1",
            $set {
                z: 100,
            },
        }

        const doc = {
            user_id: 1, 
            username: "user1",
            score: 100,
            correct_word: "hangman",
            created_at: new Date();

        }
        
        const options = {
            sort = { score: -1 },
            projection = {limit: 10 },
              
              }

        const result = await scores.insertOne(doc);
        const result = await scores.updateOne(filter, updateDoc);
        const scores = await scores.findOne(query, options);
     
        const database = client.db("APWMyDB");
        const incorrect_guesses = database.collection("incorrect_guesses");
        const doc = {
            player_id: "user1",
            letter: "z",
            created_at: new Date(); 
        }
        
        const options = {
            letter: "z"
        }
        
        const result = await incorrect_guesses.insertOne(doc);
        const incorrect_guesses = await incorrect_guesses.findOne(query); 

        const database = client.db("correct_guesses"); 
        const correct_guesses = database.collection("correct_guesses");

        const doc = {
            player_id: "user2",
            letter: "e",
            created_at: new Date();



        }
        
        const options = {
            letter: "e",
        }
        
        const result = await correct_guesses.insertOne(doc);
        const correct_guesses = await correct_guesses.findOne(query);

    } finally {
        await.client.close(); 
    }
}.listen(3000, async ()=> {

    try{
        await dbManager.get("APWMyDB");
    } catch (e){
        console.log(e.message)
    }
    console.log("Connection has started!");
});




 

