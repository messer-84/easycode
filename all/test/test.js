var arr, asc;
arr = [{ a: 1, text: 'BBB', c: 'z'},
{ a: 3, text: 'AAA', c: 'c'},
{ a: 2, text: 'yyy!', c: 'a'},
{ a: 4, text: 'Z.', c: 'b'}];





asc = function (field) { // функция для сортировки в прямом порядке (по возрастанию)
 return function (x, y) {
   return x[field] > y[field];
 }
};

console.log(arr.sort(asc('text'))); // сортируем по полю "text"