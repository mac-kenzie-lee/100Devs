//OOP
//data and behavior

//class === object oriented abstration for an idea of concept manipulated by a program

//class, -> can only contain methods;
//constructor() method-> initializes the object, gives object properties
//---inside methods-> this, represents the object on which the method was called

class MyClass{
    constructor(p1,p2) {
        this.p1 = p1;
        this.p2 = p2;
    } 
    method() {
        return 'x';
    }
}

//objects are created with the new operator. 
const X = new MyClass('hi','bye')

//oop => based on prototypes.
//any js object with an internal property that is a link to an other, its prototype, is prototype

//Object.create();?


const delphine = {
    name: 'Delphine',
    health: 100,
    strength: 20,
    xp: 0,
    //methods, return character description

    describe() {
        return `${this.name} has ${this.health} hp, ${this.strength} srgth and ${this.xp} xp.`
    }
};

//delphine falls in a trap
delphine.health -= 10;

class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0; //zero for new chars
        this.gold=  10,
        this.key =1
        
    }

    //describe the characters
    describe() {
        return `${this.name} has ${this.health} health points, ${this
            .strength} as strength and ${this.xp} XP points, ${this.name} has ${this.gold} g, and ${this.key} keys`;
        }
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damage`
            );
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} hp left.`)
            } else {
                target.health = 0;
                const bonusXP = 10;
                this.gold += target.gold
                this.key += target.key
                target.gold = 0
                target.key = 0;
            
                
                console.log(`${this.name} has defeated ${target.name} and gains ${bonusXP} xp`)
                this.xp += bonusXP;
            }

        } else {
            console.log(`${this.name} has been defeated.`)
        }
    }
    }

const mickey = new Character('Mickey', 100, 3);
const minnie = new Character('Minnie', 100, 20);
const dragon = new Character('Dragon', 1000, 100);
const orc = new Character('Orc', 100, 25)


//coding time prompt
// TODO: define the Dog class here
class Dog {
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark() {
        return 'ruf ruf ruff'
    }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);


class Account{
    constructor(name, initialDeposit)
    {
        this.name = name;
        this.balance = initialDeposit;
        this.credit = 0;

    }
    describe() {
        console.log(`${this.name}'s account has a balance of ${this.balance} and a credit of ${this.credit}`)
    }
    addToCredits(amount){
        this.credit += amount;
        this.describe()
    }
}

const sean = new Account('Sean', 1000)
const brad = new Account('Brad', 1000)

const georges = new Account('Georges', 1000)