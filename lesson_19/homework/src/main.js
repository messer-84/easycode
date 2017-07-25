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


  // var endPos = str.match(/[A-Z\b]{2,}/g);



  // if (endPos !== null) {
  //   var newLongStrArr = [];
  //   endPos.forEach(elem => {
  //
  //     var posStart = str.indexOf(elem);
  //     // console.log(elem);
  //     newLongStrArr.push(str.slice(posStart, elem.length));
  //     // console.log(elem.length);
  //
  //     var pos = str.indexOf(elem);
  //     var lastLetter = str[pos + elem.length];
  //     if (lastLetter === "-") {
  //       elem = '_' + elem.toLowerCase();
  //     }
  //     else {
  //       // console.log('hi');
  //       var newElem = '_' + elem.slice(-1).toLowerCase();
  //       console.log(newElem);
  //     }
  //   });
  // }
  // console.log(endPos);
  // var nextLetter =

  //если после последнего символа endPos идет -
  //меняем регистр последнего символа и добавляем _ вначале

  var array = str.split('');
//взять часть из больших букв
  var newStr = array.map(( elem, index )=>{
    if(index !== 0){
      if(elem === '-'){
        elem = '_';
      }
      if(elem === ':'){
        elem = '%';
      }
      var hasUpLetter = /[A-Z]/.test(elem);
      // var hasUpLetter = /\b[A-Z]{2,}/.someLetters(elem);


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
solution("ActiveModel::Errors"); //=> active_model/errors"
solution("MAINCompany"); // => "main_company"
solution("MyNAMEIsBOND-JamesBond"); //=> my_name_is_bond_james_bond"

//делим строку на части
//-до совпадения
// - совпадение
//- после совпадения