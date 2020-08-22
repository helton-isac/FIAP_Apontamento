const service = 'https://81mmi65fab.execute-api.us-east-1.amazonaws.com/default/lambda-microservice';

export default class DynamoUtils {
    static getAllUsers(callback) {
        fetch(`${service}?TableName=time_entry`, {

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
}

