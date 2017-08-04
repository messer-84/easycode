var url = 'https://jsonplaceholder.typicode.com/users/';
var counter = 0;
var sum = 0;
var users = [];
const userId = [1,2,3];


const doRequest = (url, id, callback) => {
  let xhr = new XMLHttpRequest();
  var res;
  xhr.open("GET", url + id, true); // for async
  xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4) {
      if (xhr.status == 200) {
        res = xhr.responseText;
        callback(null, res);
      } else {
        callback(xhr.statusText);
      }
    }
  });
  xhr.send(null);
};

userId.forEach((elem, index, array) => {
  doRequest(url, elem, (err, res) => {
    var ID = JSON.parse(res).id;
    counter ++;
    sum += ID;
    users.push(JSON.parse(res).username);
    // console.log('id', ID);
    // console.log(counter);

    if(counter === 3){
      console.log(sum);
      console.log(users);


      // console.log('counter',counter);

    }

  });
});


