class Superclass {
  public isSuper: boolean = true;


  public sayHello(): void {
    console.log('Olá mundo!');
    
  }
}

class Subclass extends Superclass {

}

const myFunc = (object: Superclass) => {
  object.sayHello();
}

const sup = new Superclass();
const sub = new Subclass();

myFunc(sup);
myFunc(sub);

class Animal {
  constructor(protected birthDate: Date) {}
}

class Bird extends Animal {
  showBirthDate() {
    console.log(this.birthDate);
    
  }
}