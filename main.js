console.log("howdy");

const dinosaurs = [
    {type: 't-rex', name: "Wrex"},
    {type: 'stegosaurus', name: 'Steve'},
    {type: 'velociraptor', name: 'Ted'},
];

const printToDom = (divId,textToPrint) => {
    const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textToPrint;

}





const buildDinosaurCards = () => {
let domString='';
for(let i = 0; i <dinosaurs.length; i++){
   domString += `<div class="dinosaur">`;
   domString += `<h3>${dinosaurs[i].type}</h3>`;
   domString += `<p>${dinosaurs[i].name}</p>`;
   domString +=`</div>`;
    console.log(domString);
}


const selectedDiv = document.getElementById('dino-barn');
selectedDiv.innerHTML = domString;

};
buildDinosaurCards();

printToDom('dino-barn',domString );