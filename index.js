
let nome = "O Grande Bigue ";
let XP = 7500;
console.log (nome + "tem o xp de " + XP)

function determinarNivel(XP) {
    let nivel = "";  
    if (XP < 1000) {
        nivel = "Ferro ";
    } else if (XP >= 1001 && XP <= 2000) {
        nivel = "Bronze ";
    } else if (XP >= 2001 && XP <= 5000) {
        nivel = "Prata ";
    } else if (XP >= 5001 && XP <= 7000) {
        nivel = "Ouro";
    } else if (XP >= 7001 && XP <= 8000) {
        nivel = "Platina ";
    } else if (XP >= 8001 && XP <= 9000) {
        nivel = "Ascendente ";
    } else if (XP >= 9001 && XP <= 10000) {
        nivel = "Imortal ";
    } else if (XP >= 10001) {
        nivel = "Radiante ";
    }   
    return nivel;
}
for (let i = 0; i < 3; i++) { 

    XP += 1000; 
    let nivel = determinarNivel(XP); 
    console.log("Após o aumento de XP, o herói " + nome + "está no nível de " + nivel + "com " + XP + "XP.")
}
let nivelFinal = determinarNivel(XP);
console.log(nome + "está no nível de " + nivelFinal);
