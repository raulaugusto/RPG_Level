import { Character } from "./Character.js";

export class Thief extends Character {
  constructor(nome, pv, pa, pd) {
    super(nome, pv, pa, pd);
  }
  atacar(target) {
    target.pv -= 2 * (this.pa - target.pd);
    if (target.pv < 0) {
      console.log(`${target.nome} morreu!`);
    } else {
      console.log(`Ataque bem sucedido! 
        Vida de ${target.nome}: ${target.pv}`);
    }
  }
}
