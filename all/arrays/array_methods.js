/* .shift() - удаляет первый элемент
 * изменяет исходный массив
 * возвращает первый(т/е удаленный) элемент
 */
var arr = [1, 2, 10, 20, 75];
console.log(arr);
var firstRmv = arr.shift();
console.log('var shift -', firstRmv);

/* .unshift() - добавляет первый элемент
 * изменяет исходный массив
 * возвращает новую длину массива
 */
var arr2 = [1, 2, 10, 20, 50];
console.log(arr2);
var firstAdd = arr2.unshift(80);
console.log('var unshift -', firstAdd);

/* .push() - добавляет элемент в конец массива
 * изменяет исходный массив
 * возвращает новую длину массива
 */
var arr3 = [1, 2, 30, 40, 50];
console.log(arr3);
var lastAdd = arr3.push(80);
console.log('var push -', lastAdd);

/* .pop() - удаляет последний элемент
 * изменяет исходный массив
 * возвращает последний(т/е удаленный) элемент
 */
var arr4 = [1, 2, 10, 20, 75];
console.log(arr);
var lastRmv = arr4.pop();//75
console.log('var pop -', lastRmv);

// push, pop, shift, unshift - работают с исходнм массивом
// а не с его копией
/*---------------------------------------*/
/*---------------------------------------*/
/*---------------------------------------*/
/* .join() - объединяет элемнты в строку
 * исходные массив не изменяется.
 * возвращает строку сделанную из массива.
 * необязательный параметр - разделитель
 * по умолчанию - запятая
 */
var arr5 = [1, 2, 10, 20, 75];
console.log(arr5);
var str = arr5.join('-');
console.log('join arr', str);//1-2-10-20-75

/* .reverse() - разворачивает массив
 * возвращает переставленный массив
 *
 *
 *
 * */

/* .concat()
 *
 *
 *
 *
 */

/* .sort()
 *
 *
 *
 *
 */

/* .slice()
 * Метод slice(begin, end) копирует участок массива
 * от begin до end, не включая end.
 * Исходный массив при этом не  меняется.
 *
 *
 *
 */


/* .splice()
 *
 *
 *
 *
 */

/* indexOf/lastIndexOf
 *
 *
 *
 *
 * */





