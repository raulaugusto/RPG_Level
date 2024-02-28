import { Character } from "./Character.js";
export class Warrior extends Character {
  constructor(nome, pv, pa, pd, escudo, posicao) {
    super(nome, pv, pa, pd);
    this.escudo = escudo;
    if (posicao !== "ataque" && posicao !== "defesa") {
      console.log(`A posição deve ser de ataque ou de defesa`);
    } else {
      this.posicao = posicao;
    }
  }
  atacar(target) {
    if (this.posicao === "ataque") {
      target.pv -= this.pa - target.pd;
      if (target.pv < 0) {
        console.log(`${target.nome} morreu!`);
      } else {
        console.log(`Ataque bem sucedido!
          Vida de ${target.nome}: ${target.pv}`);
      }
    } else {
      console.log(`O personagem deve estar em posição de ataque para atacar`);
    }
  }
  mudarPosicao() {
    if (this.posicao === "ataque") {
      this.posicao = "defesa";
      this.pd += this.escudo;
      console.log("Em posição de defesa");
    } else {
      this.posicao = "ataque";
      this.pd -= this.escudo;
      console.log("Em posição de ataque");
    }
  }
}
