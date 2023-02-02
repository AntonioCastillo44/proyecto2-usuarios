const express = require('express')
const app = express()

app.use(express.json())

const usersBD = [ 
    {
      "id" :1,
      "firstName": "Sahid",
      "lastName": "Kick",
      "email": "sahid.kick@academlo.com",
      "password": "root",
      "age": 22
    }
]

let baseId = 2

app.get('/', (req, res) => {    
        res.json({
            message: 'Server ¡Ok!'
        })
})

app.get('/users', (req, res) => {
    res.json(usersBD)
})

app.post('/users',(req, res) => {
    const data = req.body

    const NewProduct = {
            id : baseId++,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            age: data.age
    }

        usersBD.push(NewProduct)
        res.status(201).json(NewProduct)

})

app.get('/users/:id', (req, res) =>{
    const id = Number(req.params.id)
    const user = usersBD.find((user) => id === user.id)

    if(user){
        res.json(user)
    }else{
        res.status(404).json({
            message: 'Invalid ID'
        })
    }
})

app.listen(9000, () => {
    console.log('El servidor se inicio en http://localhost:9000')
})
module.exports = app
