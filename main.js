AWS.config.region = "us-west-2";
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-west-2:110254dc-6362-4d82-b1da-f11699e2bc49",
});

// Create client.
const lambda = new AWS.Lambda();

document.querySelector('button').addEventListener('click',apiGet)

async function apiGet(){
  const name = document.querySelector('input').value
  try{
    const response = await fetch(`https://1pwpmi3ceg.execute-api.us-west-2.amazonaws.com/dev/brawler/${name}`)
    const data = await response.json()

    console.log(data)
    document.querySelector('h3').innerText = JSON.stringify(data.Item)
  }catch(error){
    console.log(error)
  }
}


