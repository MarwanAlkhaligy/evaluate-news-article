
//  scss file here
require('./styles/resets.scss');
require('./styles/base.scss');
require('./styles/footer.scss');
require('./styles/form.scss');
require('./styles/header.scss');

import  formHandler from './js/formHandler'
// event listener to it when the click to call handleSubmit function
document.getElementById("generate").addEventListener('click', formHandler);

