class Animal{
    constructor(name, image){
        this.name = name;
        this.image = image;
    }


action(e){
  e.stopPropagation();
  document.getElementById(this.actionSoundName).play();
  
}

getImage(){
    let image = document.querySelector("img")
    image.src= this.image;
}


putInTheDocument()
{
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");
    
    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);
  
    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);
  
    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);
    
    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR);
    
    petTR.addEventListener('click', this.getImage.bind(this));
  

    }
}


class Cat extends Animal {
  constructor(name, image) {
    super(name, image);
    this.name = name;
    this.image = image;
    this.legs = 4;
    this.actionText = "Meoow";
    this.actionSoundName = "meow";
  }
}

class Monkey extends Animal {
  constructor(name, image) {
    super(name, image);
    this.name = name;
    this.image = image;
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
  }
}


var Mila = new Cat("Mila", "https://i4.hurimg.com/i/hurriyet/75/1200x675/5f2ebbaf0f25441490314a5f.jpg");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie", "https://i4.hurimg.com/i/hurriyet/75/750x422/55ea52f3f018fbb8f8787459.jpg");
Charlie.putInTheDocument();
