const apiUrl = "https://api.quotable.io/random";
const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // CORS proxy

async function getquote(url) {
    try {
        const response = await fetch(proxyUrl + url); // Use the proxy URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

getquote(apiUrl);
