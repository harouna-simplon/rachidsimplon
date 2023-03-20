function convert() {
const montant = parseFloat(document.getElementById('montant').value);
const de = document.getElementById('de').value;
const en = document.getElementById('en').value;
let resultat;

if (en === '$') {
    resultat = montant * 550;
    
}else if (en ==='£') {
    resultat = montant * 650;
    
} else {
    resultat = montant * 17.81;
    
}

document.getElementById('resultat') = resultat


}