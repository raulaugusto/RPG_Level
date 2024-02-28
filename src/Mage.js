import { Character } from "./Character.js";
export class Mage extends Character {
  constructor(nome, pv, pa, pd, magia) {
    super(nome, pv, pa, pd);
    this.magia = magia;
  }
  atacar(target) {
    target.pv -= this.pa + this.magia - target.pd;
    if (target.pv < 0) {
      console.log(`${target.nome} morreu!`);
    } else {
      console.log(`Ataque bem sucedido!
          Vida de ${target.nome}: ${target.pv}`);
    }
  }
  curar(...targets) {
    targets.forEach((target) => {
      target.pv += 2 * (this.magia / targets.length);
      console.log(`Curou ${target.nome}, vida: ${target.pv}`);
    });
  }
}
