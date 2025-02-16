document.getElementById("generate").addEventListener("click", async function () {
    let inputText = document.getElementById("input-text").value;

    let response = await fetch("https://positiveheadlinegenerator.onrender.com/predict/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText })  
    });

    let data = await response.json();  
    console.log(data);  // Debug: Check API response in console

    // Fix display issue: Ensure correct JSON key is accessed
    document.getElementById("output").innerText = data.modified_text ?? "Error: No response"; 
});
