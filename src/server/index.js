//Configure the environment variables
const express = require('express')
const morgan = require('morgan')
const axios = require('axios')
const cors = require('cors')
const bodyParse = require('body-parser');
const path = require('path')
require('dotenv').config()

const mockAPIResponse = require('./mockAPI.js')

const PORT = process.env.SERVER_PORT


// Start up an instance of app
const app = express();

app.use(morgan('dev'))
// Configure cors to avoid cors-origin issue
app.use(cors());
// Configure express to use body-parser as middle-ware.
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());
// Configure express static directory.
app.use(express.static('dist'))


app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html')) 
})

/* Function to GET Web API Data*/
const analysisData = async (req, res) => {
  
    const URL = `${process.env.BASE_API_URL}?key=${process.env.API_KEY} &url=${req.body.url}&lang=en`
    const response = await axios.post(URL)

    try {
      const data = response.data
      if(data === null)
        throw `no data recevied`
      // check for error in the data
        const sample = {
            text: data.sentence_list[0]? data.sentence_list[0].text: '',
            score_tag : data.score_tag,
            agreement : data.agreement,
            subjectivity : data.subjectivity,
            confidence : data.confidence,
            irony : data.irony
        }
        
      res.send(sample)

    }catch(error){
      console.log('ERROR Please Check tour code: ', error)
    }
}
// Post Route
app.post('/add-url', analysisData)

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// export app to use it in the unit testing
module.exports = {
    app,
}