async function sendText() {
    let inputText = document.getElementById("inputText").value;
    let response = await fetch("/predict/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText })
    });
    let data = await response.json();
    document.getElementById("outputText").innerText = data.modified_text;
}
