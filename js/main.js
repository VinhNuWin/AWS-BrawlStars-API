document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const brawlerName = document.querySelector('input').value
    try{
        const response = await fetch(`https://brawl-stars-api-100devs.herokuapp.com/api/${brawlerName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.brawlerName
    }catch(error){
        console.log(error)
    }
}