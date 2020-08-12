// reference type
const object1 = { age: 2 }
const object2 = object1
const object3 = { age: 2 }

// console.log(object1 === object2) // true
// console.log(object1 === object3) // false

object1.age = 12

// console.log(object2.age) // 12

// class
class Player {
  constructor(name, hp, mana = 10) {
    this.name = name
    this.hp = hp
    this.mana = mana
  }
  shout() {
    console.log(`My name is ${this.name}!!!`)
  }
}

class Melee extends Player {
  constructor(name, hp, mana, sword) {
    super(name, hp, mana)
    this.sword = sword
  }
  shout() {
    super.shout()
    console.log(`I have ${this.sword.name}!!!`)
  }
}

const player1 = new Player('Melee', 200, 20)
const melee1 = new Melee('Fighter', 100, 10, { name: 'iron sword', attack: 5 })
// player1.shout()
// melee1.shout()
// console.log(player1.mana) // 20
// console.log(melee1.sword.name) // iron sword
Object.values(melee1.sword).forEach((name) => console.log(name))
