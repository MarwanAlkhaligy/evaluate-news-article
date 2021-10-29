import checkURL  from "./checkURL"
import updateUI from "./updateUI"
import resetUI from "./resetUI"



const formHandler = async (event) => {
    console.log('event : ',event)
    event.preventDefault()

    // error message for wrong url
    const errorLabel = document.getElementById('error-message')

    const articleURL = document.getElementById('article-url').value

    const formHeader = document.getElementById('form-header')

    
    
    if ( checkURL(articleURL) ) {
        resetUI()
        formHeader.innerHTML = "Loading"
        try {
            fetchData('http://localhost:8081/add-url', {url: articleURL})
            .then((data) => {
              formHeader.innerHTML = "Form Results"
              updateUI(data)
            })
            
        }catch(error) {
            console.log('Error: no data to display')
        }
        
        console.log("URL : ",articleURL)
        errorLabel.innerHTML = "";
    }else{
      formHeader.innerHTML =''
      resetUI()
      errorLabel.innerHTML = "Wrong URL";
    }
}

const fetchData = async (url = '', data = { url: '' }) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
  
      const newData = await response.json();
      return newData;
    } catch (error) {
      alert('Sorry, something went wrong!');
      return error;
    }
  };
export default formHandler
