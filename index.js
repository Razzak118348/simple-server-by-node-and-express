const express = require('express');
const phones = require('./phone.json');
const app = express();
const cors = require('cors')
    //tader kase j port ase seta dibe r jdi na dey tahole 5000 dibe
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())

const customer = [
    { id: 1, name: 'Raju', email: 'raju@gmail.com' },
    { id: 2, name: 'Auno', email: 'auno@gmail.com' },
    { id: 3, name: 'raja', email: 'raja@gmail.com' }
]


//request ,and response => req, res
app.get('/', (req, res) => {
    res.send('hi this is first web server made by razzak')
})

app.get('/customer', (req, res) => {
    res.send(customer)
})

app.post('/customer', (req, res) => {
    console.log('post api hitting')

    const newCustomer = req.body;
    newCustomer.id = customer.length + 1;
    customer.push(newCustomer)
    res.send(newCustomer)
    console.log(req.body)
})

app.get('/phones', (req, res) => {
    res.send(phones);

})
app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('i need data for id', id);
    const phone = phones.find(phone => phone.id === id) || {}
    res.send(phone)
})

app.get('/data', (req, res) => {
    res.send('More data comming soon ,,nodemon is calling')
})

//work korar jonno dekhbo
app.listen(port, () => {
    console.log(`my first server port is ${port}`)

})