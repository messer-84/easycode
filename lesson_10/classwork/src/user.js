var jsonUser = {
    "name": "Jack",
    "userData": {
        "userTelNumber": ["066", "099", "067"]
    }
};

// JSON stringify - преобразование к строке

var stringJson = JSON.stringify(jsonUser);
var newJson = JSON.parse(stringJson);
console.log(newJson);