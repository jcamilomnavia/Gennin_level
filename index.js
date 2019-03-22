const express = require('express')

const app = express()

const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).send('hello')
})

app.get('/cats', (req, res) => {
    const cats = "gatos"
    // JSON.stringify

    const jsonString = "{ \"saludo\": \"hola\" }"
    const jsonConverted = JSON.parse(jsonString)
    console.log(jsonConverted.saludo)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const newNumbers = numbers.map((number) => {
        return `${number} => ${number * 10}`
    })

    console.log(JSON.stringify(newNumbers))

    res.status(200).send(JSON.stringify(newNumbers))
})

app.post('/create/cat', (req, res) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("saved...")
            resolve("hola")
        }, 10000);
    }).then((value) => {
        res.send(value)
    }).catch(()=>{

    })

    console.log("saving...")

})


app.listen(PORT, () => {
    console.log(`connected to port ${PORT}`)
})