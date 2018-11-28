let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')

const predict = require('./controller/predict');

const app = express()

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
	res.json('Yeah right, it works, so....')
})

app.post('/predict', (req,res)=> {predict.handleApiCall(req,res)})

app.listen(process.env.PORT || 3000, () => {
    console.log('Rock and Roll baby!')
})