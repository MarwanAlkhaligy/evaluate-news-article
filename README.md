# Evaluate a news article with Natural Language Processing

This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

You don't have to worry about NLP, because we will make use of an external api called Meaning Cloud to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

## Following are the project prerequisites:

### Webserver - Node
Web application framework for routing - Express
Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
External script - Service Worker
External API - Aylien
Introduction to Natural Language Processing
NLP is a subset of AI that provides computers ability to process or interact with natural human speech. In NLP, machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech.

### NLP on Human Voice
For example, everyone who has used Alexa or Google Assistant or other voice command systems knows that these devices are always improving, by collecting and interpreting voice data. Verbal interactions can be incredibly hard to decipher. Sarcasm, for instance, requires understanding not just words and grammar but the tone as well, and regional accents and ways of saying things have to be taken into account, not to mention coverage for all the major languages.

### NLP on Text
An example is Grammarly editing tool, which parses the text that you write, and suggests if the tone is professional or not. Another example is the Smart Compose feature for Gmail that uses NLP to suggest words and statements based on your current context.

## Run project
Below shows how to run in development and production mode.

run in development mode
To start the webpack dev server at port 8080

 npm run build-dev

run in production mode
## Generate the dist files and then start server 

 npm run build-prod

 npm run start

## Configs
Here, we have two webpack config files for both development mode(webpack.config.dev.js) and production mode(webpack.config.prod.js )

We also have a package.json to manage dependencies

# Meaning Cloud API 
You can find the API [here](https://www.meaningcloud.com/developer/sentiment-analysis). Once you create an account with MeaningCloud, you will be given a license key to start using the API. This API does not require an SDK, so you can skip ahead to step 4 in the instructions.



