const validUrl = require('valid-url')

const checkURL = (URL) => {
    
    return validUrl.isUri(`${URL}`) 
} 

export default checkURL