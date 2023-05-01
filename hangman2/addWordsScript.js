const mongoose = require("mongoose")
const Word = require("./Word.js")

mongoose.connect("mongodb://127.0.0.1/blobs")


/*async function run() {
    const word = await Word.create({ name: "Oxyphenbutazone"})
    await word.save()
    word = await Word.create({ name: "Quizzify"})
    await word.save()
    word = await Word.create({ name: "Quetzals"})
    await word.save()
    word = await Word.create({ name: "Quixotry"})
    await word.save()
    word = await Word.create({ name: "Flapjack"})
    await word.save()
    word = await Word.create({ name: "Gherkins"})
    await word.save()
    console.log(word)
}*/


    Word.insertMany([
        { name: "Oxyphenbutazone"},
        { name: "Quizzify"},
        { name: "Quetzals"},
        { name: "Quixotry"},
        { name: "Flapjack"},
        { name: "Gherkins"}
    ]).then(function(){
        console.log("Data inserted")
    }).catch(function(error){
        console.log(error)
    });

