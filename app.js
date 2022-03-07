import Dinos from "./dino.json" assert {type: "json"};

const button = document.getElementById("btn");
const form = document.getElementById("dino-compare");
const grid = document.getElementById("grid");
const humanName = document.getElementById("name");
const humanWeight = document.getElementById("weight");
const humanHeight = document.getElementById("feet");
const humanDiet = document.getElementById("diet");
let k = "";
const d = Dinos;
const dinoDict = [];


    // Create Dino Constructor
    class Dino{
        constructor(obj){
            this.obj = obj;
        }

        /* static createDino() {
            fetch("dino.json").then(response => {
                return response.json();
            }).then(obj => {
                dinod.Dinos = obj.Dinos;
                console.log(dinod.Dinos);  
            })
        } */
    }
    
    // Create Dino Objects
    d.Dinos.forEach((e, key) => {
        dinoDict[`${e.species}`] = new Dino(e);
    })
    for(let i in dinoDict){
        for(let j in k = dinoDict[i].obj){
            if(j === "species"){
                delete k[j];
            }
        }
    }

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    let weight = function() {
        let count = 0;
        for(let i in dinoDict){
            for(let j in k = dinoDict[i].obj){
                if(j === "weight"){
                    if(k[j] > humanWeight.value){
                        count++;
                    }
                }
            }
        }
        return function(){
            return count;
        }
    }
    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    let height = function() {
        let count = 0;
        for(let i in dinoDict){
            for(let j in k = dinoDict[i].obj){
                if(j === "height"){
                    if(k[j] > humanHeight.value){
                        count++;
                    }
                }
            }
        }
        return function(){
            return count;
        }
    }
    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    let diet = function() {
        let count = 0;
        for(let i in dinoDict){
            for(let j in k = dinoDict[i].obj){
                if(j === "diet"){
                    if(k[j] === humanDiet.value.toLowerCase()){
                        count++;
                    }
                }
            }
        }
        return function(){
            return count;
        }
    }

    // Generate Tiles for each Dino in d.Dinosay
    function generateTiles(){
        let count = 1;
        for(let i in dinoDict){
            let gridItem = document.createElement("div");
            let image = document.createElement("img");
            let dinoName = document.createElement("h3");
            let dinoText = document.createElement("p");

            if(count === 5){
                image.setAttribute("src", "images/human.png");
                dinoText.innerHTML = `${weight()()} dinos are heavier than you. ${height()()} dinos are bigger than you. ${diet()()} dinos share the same diet as you.`;
                dinoName.innerText = humanName.value;
                gridItem.appendChild(dinoName);
                gridItem.appendChild(image);
                gridItem.appendChild(dinoText);
                
                gridItem.id = "human";
                grid.appendChild(gridItem).className = "grid-item";
    
                let gridItem2 = document.createElement("div");
                let image2 = document.createElement("img");
                let dinoName2 = document.createElement("h3");
                let dinoText2 = document.createElement("p");
                dinoText2.innerHTML = dinoDict[i].obj["fact"];
                
                dinoName2.innerHTML =  i;
                image2.setAttribute("src", `images/${i.toLowerCase()}.png`);
                gridItem2.appendChild(dinoName2);
                gridItem2.appendChild(image2);
                gridItem2.appendChild(dinoText2);
                
                gridItem2.id = i;
                grid.appendChild(gridItem2).className = "grid-item";
            }else{
                image.setAttribute("src", `images/${i.toLowerCase()}.png`);
                dinoText.innerHTML = dinoDict[i].obj["fact"];
                dinoName.innerHTML = i;
                gridItem.appendChild(dinoName);
                gridItem.appendChild(image);
                gridItem.appendChild(dinoText);
                
                gridItem.id = i;
                grid.appendChild(gridItem).className = "grid-item";
            }
            count++;    

        }
    }

// On button click, prepare and display infographic
button.addEventListener("click", () => {
    form.style.display = "none";  
    generateTiles();
});