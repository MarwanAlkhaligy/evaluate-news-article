const updateUI = (data)  => {

    if ( data ) {
        console.log("Update UI only", data )
        document.getElementById("text").innerHTML = `text: ${data.text}`
        document.getElementById("agreement").innerHTML = `Agreement: ${data.agreement}`
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.subjectivity}`
        document.getElementById("confidence").innerHTML = `Confidence: ${data.confidence}`
        document.getElementById("irony").innerHTML = `Irony: ${data.irony}`
        document.getElementById("score_tag").innerHTML = `Score Tag: ${data.score_tag}`
    }else {
        console.log('error UI error: ', data )
    }
}

export default updateUI 