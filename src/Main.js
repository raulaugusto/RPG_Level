import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";

const raul = new Mage("Raul", 500, 15, 20, 60);
const ryan = new Warrior("Ryan", 650, 40, 30, 30, "ataque");
const pedro = new Thief("Pedro", 380, 60, 20);

raul.atacar(ryan);
ryan.atacar(pedro);
pedro.atacar(raul);

ryan.mudarPosicao();
ryan.atacar(pedro);

raul.curar(raul, ryan, pedro);
raul.curar(raul);
