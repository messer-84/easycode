class Create{
  constructor(){

  }
  myShow(){
    console.log('test');
    // return 15;
  }
  init(){
    this.myShow();
  }
}

const create = new Create();
// create.myShow();
create.init();
