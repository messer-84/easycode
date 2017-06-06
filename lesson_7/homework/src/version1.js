const jun = counter();

function counter(obj, method, num, fn) {
  //возвращать объект
  //в объекте должен быть метод add
  //показывать в консоли цифру на 1 больше предыдущей

  return {
    countData: 1,
    add: function() {
      console.log(this.countData++);
    },
    [method]: function() {
      console.log('just action',  this.countData);
      if(this.countData < num) {
        console.log('action ', this.countData);
        return fn;
      }
    }
  };
}

jun.add();
//1

function methodCounter(obj, method, num, fn) {

}

jun.metCount([1, 2, 3, 4, 5]);




