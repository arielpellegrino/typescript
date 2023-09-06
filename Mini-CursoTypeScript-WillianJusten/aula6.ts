//classes

class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    logDetails(): void{
        console.log(`The player ${this.name} is ${this.age} years old.`)
    }

}

class charAccount extends UserAccount {

}


const ariel = new UserAccount("Ariel", 25);
console.log(ariel)
console.log(ariel.age)
ariel.logDetails();