export class Character {
  constructor(nome, pv, pa, pd) {
    this.nome = nome;
    this.pv = pv;
    this.pa = pa;
    this.pd = pd;
  }
  atacar(target) {
    target.pv -= this.pa - target.pd;
    if (target.pv < 0) {
      console.log(`${target.nome} morreu!`);
    } else {
      console.log(`Ataque bem sucedido!
          Vida de ${target.nome}: ${target.pv}`);
    }
  }
}
