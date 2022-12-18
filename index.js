const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    
    const item = JSON.parse(event.body);
    
    if(!item.id || item.id === '-1')
        item.id = Math.random() * Math.pow(10,16) + ''
    
    // const name = event.name;
    // const health = event.health;
    // const attack = event.attack;
    
    const params = {
        TableName : 'BrawlerTable',
        Item: item
            // "name": name,
            // "health": health,
            // "attack": attack
        
    };
    
    const result = await dynamo.put(params).promise();
        if (err) {
            console.error(
                "Unable to add item. Error JSON:",
                JSON.stringify(err, null, 2)
            );
        } else {
            console.log("Adding data to dynamodb...");
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    response(null, event);
};
    const statusCode = 200;
    
    const headers = { "Access-Control-Allow-Origin":"*" };
    
    const response = { statusCode, headers, body: '' };
       
    return response;
};
