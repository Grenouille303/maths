// // les operateurs arithmetiques

// let a = 10;
// let b = 6;

// console.log(a +b);

//  // soustraction

//  console.log(a-b);

//  // multiplication

//  console.log(a*b);

//  // division

//  console.log(a/b);


//  // Le modulo (le reste d'un division)

//  console.log(a%b);

//  // incrémentation

//  a++
//  console.log(a);

//  // decrementation

//  b--
//  console.log(b);

//  // ex 

//  let prix = 120;

//  let remise = 15;

//  let prixFinal = prix-(prix*remise)/100

//  console.log(prixFinal);

//  // les operateurs de comparaison

// let x = 10;
// let y = "10";



// console.log(x == y); // true (on compare soit le type soit la valeur)

// console.log(x === y); // false (on compare le type et la valeur)

// console.log(x != y); // false
// console.log(x !== y);
// console.log(x > y);


// // operateur logiques
// let age = 17
// let permis = false

// // ET logique  &&

// if (age >= 18 && permis){
//     console.log("peut conduire"); 
// }else{
//     console.log("passe ton permis");    
// }

// // OU logique || 

// if (age > 18 || permis){
//     console.log("peut conduire");
    
// }else{
//     console.log("passe ton permis .");    
// }

// // NON logique !

// console.log(!NaN);

// // fonctions 

function sayHello (prenom) {
console.log(`Bonjour ${prenom}`);
}
let helloBtn = document.createElement('button')
helloBtn.textContent = `say Hello`
document.body.appendChild(helloBtn)

helloBtn.addEventListener('click', () => {
    sayHello("Maïté")
})

sayHello("Mohammed") 

// une fonctioin avec une valeur de retour 

function addition(x , y){
    return x + y
} 

let som = addition ("mot" , 8)

console.log(som);

// fonctions fléché

const multiplication = (a , b) => a*b

console.log(multiplication(5, 2));

// nous allons creer une fonction qui va calculer la TVA

function calcTVA(prixHt, taux = 21){
    return (prixHt*taux/100)
}


function afficheTva(){
    let prix = parseInt(document.getElementById("prixHt").value)
    let tva = prix * 0.21

    document.getElementById('result').textContent = "tu vas raquer " + tva.toFixed(2) + "€" + " grosse"
}


















