const service = 'https://81mmi65fab.execute-api.us-east-1.amazonaws.com/default/lambda-microservice';

export default class DynamoUtils {
    static getAllUsers(callback) {
        fetch(`${service}?TableName=employee`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,access-control-allow-origin',
            },
        })
            .then(res => res.json())
            .then((data) => {
                callback(data.Items);
            }).catch(console.log)
    }

    static getAllEntries(callback) {
        fetch(`${service}?TableName=time_entry`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,access-control-allow-origin',
            },
        })
            .then(res => res.json())
            .then((data) => {
                callback(data.Items);
            }).catch(console.log)
    }

    static postUser(login) {
        fetch("https://81mmi65fab.execute-api.us-east-1.amazonaws.com/default/lambda-microservice",
            {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                mode: 'no-cors',
                body: JSON.stringify(
                    {
                        "TableName": "employee",
                        "Item": {
                            "login": login,
                        }
                    }
                )
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(err => { console.log(err); });
    }

    static postTimeEntry(login, entryDate, entries) {
        fetch("https://81mmi65fab.execute-api.us-east-1.amazonaws.com/default/lambda-microservice",
            {
                method: "PUT",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(
                    {
                        "TableName": "time_entry",
                        "Key": {
                            "login": login,
                            "date": entryDate
                        },
                        "UpdateExpression": "set entries = :entries",
                        "ExpressionAttributeValues": {
                            ":entries": entries,
                        },
                        "ReturnValues": "NONE"
                    }
                )
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(err => { console.log(err); });
    }
}

