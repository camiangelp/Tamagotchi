const buttonSleep = document.getElementById("buttonSleep");
const buttonPlay = document.getElementById("buttonPlay");
const buttonEat = document.getElementById("buttonEat");
const petImage = document.getElementById('Peach');
const petMessage = document.getElementById('text');
const petEnergy = document.getElementById('energyLevel');



function initPet(pet) {
  const petName = pet;
  let energy = 100;
  let age = 0;
  let status = "";
  petEnergy.textContent=`Energy:${energy}`;

  return {
    sleep: function () {
      if (energy <= 80) {
        petImage.src="././assetsCamila/durmiendo.gif";
        petMessage.textContent= `${petName} is sleeping`;
        status = "sleeping";
        age++;
        energy += 20;
        petEnergy.textContent=`Energy:${energy}`;

        return {
          energy,
          age,
          status,
        };
      } else if(status==='sleeping'){
        petImage.src="./assetsCamila/peachCat.gif";
        petMessage.textContent= "I just slept";
        petEnergy.textContent=`Energy:${energy}`
        return energy;
      } else {
        petImage.src="./assetsCamila/peachCat.gif";
        petMessage.textContent= "I don't need to sleep";
        petEnergy.textContent=`Energy:${energy}`
        return energy;
      }
    },
    play: function () {
      if (energy>30){
      petImage.src='./assetsCamila/jugando2.gif';
      petMessage.textContent= `${petName} is playing`;
      status = "running";
      age++;
      energy = energy - 30;
      petEnergy.textContent=`Energy:${energy}`;
        return {
          energy,
          age,
          status,
        }
      } else{
        petImage.src="./assetsCamila/cansado.gif";
        petMessage.textContent= "I can't play. I'm tired";
      }
      ;
    },
    eat: function () {
      if(status!== 'eating' && energy<=90){
        petImage.src="./assetsCamila/comiendo.gif";
        petMessage.textContent= `${petName} is eating`;
        status = "eating";
        age++;
        energy = energy + 10;
        petEnergy.textContent=`Energy:${energy}`;
        return {
          energy,
          age,
          status,
        };
      }else if(energy<=90){
        petImage.src='./assetsCamila/peachCat.gif';
        petMessage.textContent= "I'm full";
        petEnergy.textContent=`Energy:${energy}`
        return energy;
      }else{
        petImage.src="./assetsCamila/peachCat.gif";
        petMessage.textContent= "I'm not hungry. I just ate";
        petEnergy.textContent=`Energy:${energy}`
        return energy;
      }
      
    },
  };
}

const myPet = initPet("Mocca");


buttonSleep.addEventListener('click',()=>myPet.sleep());
buttonPlay.addEventListener('click',()=>myPet.play());
buttonEat.addEventListener('click',()=>myPet.eat());