let salon={ 
    name: "The fasion pet",
    phone: "999-999-999",
    address:{
        street:"Palm",
        number:"262-K",
        zip:"21339"
    },
    pets:[]
}
//Constructor
function Pet(n,a,g,s,b){
    this.name=n;
    this.age=a;
    this.gender=g;    
    this.service=s;    
    this.breed=b;    
}

function displayPetNames(){
    document.getElementById('pets').innerHTML="";
    for(let i=0;i<salon.pets.length;i++){
        document.getElementById('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
}
document.getElementById('totalPets').innerHTML=`Total=${salon.pets.length}`
}

function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p>Welcome to the ${salon.name} is located in ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>`;
}

//get elements from HTML
let inputName= document.getElementById("txtName");
let inputAge= document.getElementById("txtAge");
let inputGender= document.getElementById("txtGender");
let inputService= document.getElementById("txtService");
let inputBreed= document.getElementById("txtBreed");

function register(){
    //1) getting value
    //2) create the newPet using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value,inputBreed.value);
    console.log(newPet);
    //3) push the new pet to the array
    salon.pets.push(newPet);
    //4) call display function
    displayPetNames();
    //5) clear the input
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputService.value="";
    inputBreed.value="";
}

function init(){ 
//Creating predefined obj
let pet1=new Pet("Scooby",60,"Male");
let pet2=new Pet("Junior",30,"Male");
let pet3=new Pet("Kitty",40,"Female");
let pet4=new Pet("Max",50,"Male");
salon.pets.push(pet1,pet2,pet3,pet4)
//executing functions
displayPetNames();
displayFooterInfo();
}
window.onload=init; //wait to render the HTML