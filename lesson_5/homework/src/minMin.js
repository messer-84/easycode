let numArray = [10, 20, 30, 2, 31, 11, 9];
let numArray2 = [-1, 0, 25];
let numArray3 = [-4, -10, 25, 10];
let numArray4 = [0, 200, 10, 25, 15];

function findMin(arr) {
  var min = arr[0];
  var min2 = arr[0];


  // поиск минимального значения дважды
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      // min2 = min;

    }
    //min = 0



    //min2 > 0 && min
    if(min2 >  arr[i] || arr[i] != min ){
      min2 = arr[i];
      console.log('if min2',min2);
     }

  }

    console.log("min1", min);
   console.log("min2", min2);
  return min + min2;
}

console.log("min num", findMin(numArray4));
