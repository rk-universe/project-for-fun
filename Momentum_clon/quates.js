const url="https://quotes.rest/qod?language=en";
fetch(url).then(response => {
    return response.json()
} ).then(data =>{
    document.getElementById("QuatesText").innerText=data.contents.quotes[0].quote
    // console.log(data.contents.quotes[0].quote)
})