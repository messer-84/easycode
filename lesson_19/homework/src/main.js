/* task 0
Даны строки разделенные различным образом,
верните строки разделенные / или _, в нижнем регистре
solution("ActiveModel::Errors") => active_model/errors"
solution("HelloHowAreYou") => "hello_how_are_you"
solution("MyNAMEIsBOND-JamesBond") => my_name_is_bond_james_bond"
solution("MAINCompany::BEST-MAINUser") => "main_company/best_main_user"
*/

const solution = (str) => {
  //если больше двух букв с заглавной
  //взять  буквы без последней
  //сделать их строчными
  //добавить подчеркиваение
  //последнюю букву сделать строчной
  var array = str.split('');
//взять часть из больших букв
  var newStr = array.map(( elem, index )=>{
    if(index !== 0){
      // var hasUpLetter = /[A-Z]/.test(elem);
      var hasUpLetter = /\b[A-Z]{2,}/.test(elem);


      return hasUpLetter ? '_' + elem.toLowerCase() : elem;
    }
    else{
      return elem.toLowerCase();
    }
  });
  // var newStr = str.match(/([A-Z])/g);
  newStr = newStr.join('');
  console.log(newStr);

};
solution("HelloHowAreYou"); // => "hello_how_are_you"
solution("ActiveModel"); // => "hello_how_are_you"
solution("MAINCompany"); // => "main_company"
// /\b[A-Z]{2,}/g

/* TASK 0.5
  ГОТОВО: Добавить кота в ваш КОД в Node.js !!
  КОТА ОСТАВИТЬ
  Добавить проверку на существование файла

*/
