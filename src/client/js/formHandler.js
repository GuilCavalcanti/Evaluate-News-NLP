import { is_url } from "./checkUrl";

export function handleSubmit(event) {
    event.preventDefault()

    const userInput = {};
    let formResult = document.getElementById('results-1');
    let formResult2 = document.getElementById('results-2');

    // check what text was put into the form field
    let formURL = document.getElementById('name').value;

    userInput.text = formURL;

    if(!is_url(formURL)) {
        formResult.textContent = "Invalid URL!";
        return console.log("Invalid URL");
    }

    let postForm = async(url, data) => {
        let result = await fetch(url, {
            method: "POST",
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        let myData = await result.json();
        if (myData.msg == "Error") {
            formResult.textContent = "An error occurred";
        } else {
            formResult.textContent = `Polarity: ${myData.two}`;
            formResult2.textContent = `Polarity Confidence: ${myData.one}`;
        }
    }

    postForm('http://localhost:8080/api', userInput);
}

export function checkStringLen (str) {
    
    if ((typeof str === 'string' || str instanceof String)) {
        return str.length;
    } else {
        return "Not a string";
    }
}



