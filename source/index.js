const buttonSleep = document.getElementById("buttonSleep");
const buttonPlay = document.getElementById("buttonPlay");
const buttonEat = document.getElementById("buttonEat");
const petImage = document.getElementById('Peach');
const petMessage = document.getElementById('text');
const petEnergy = document.getElementById('energyLevel');
const petHunger = document.getElementById('hungerLevel');



function initPet(pet) {
  const petName = pet;
  let energy = 100;
  let hunger = 0;
  let age = 0;
  let status = "";
  petEnergy.textContent=`Energy level:${energy}`;
  petHunger.textContent=`Hunger scale:${hunger}`;

  return {
    sleep: function () {
      if (energy <= 80) {
        petImage.src="././assetsCamila/durmiendo.gif";
        petMessage.textContent= `zZZzZzZZz`;
        status = "sleeping";
        age++;
        energy += 20;
        hunger += 20;
        petEnergy.textContent=`Energy level:${energy}`;
        petHunger.textContent=`Hunger scale:${hunger}`;

        return {
          energy,
          hunger,
          age,
          status,
        };
      } else if(status==='sleeping'){
        petImage.src="./assetsCamila/peachCat.gif";
        petMessage.textContent= "I just slept";
        petEnergy.textContent=`Energy level:${energy}`
        return energy;
      } else {
        petImage.src="./assetsCamila/peachCat.gif";
        petMessage.textContent= "I don't need to sleep, I want to play with those birds";
        petEnergy.textContent=`Energy level:${energy}`
        return energy;
      }
    },
    play: function () {
      if (energy>30){
      petImage.src='./assetsCamila/jugando2.gif';
      petMessage.textContent= `Wiiii, I love this!`;
      status = "running";
      age++;
      energy = energy - 30;
      hunger += 20;
      petEnergy.textContent=`Energy level:${energy}`;      
      petHunger.textContent=`Hunger scale:${hunger}`;
        return {
          energy,
          hunger,
          age,
          status,
        }
      } else{
        petImage.src="./assetsCamila/cansado.gif";
        petMessage.textContent= "I'm too tired to play";
      }
      ;
    },
    eat: function () {
      if(status!== 'eating' && energy<=90){
        petImage.src="./assetsCamila/comiendo.gif";
        petMessage.textContent= `This is mewlicious!`;
        status = "eating";
        age++;
        energy = energy + 10;
        hunger = 0;
        petHunger.textContent=`Hunger scale:${hunger}`;
        petEnergy.textContent=`Energy level:${energy}`;
        return {
          energy,
          hunger,
          age,
          status,
        };
      }else if(energy<=90){
        petImage.src='./assetsCamila/full.gif';
        petMessage.textContent= "I'm full";
        petEnergy.textContent=`Energy level:${energy}`
        return energy, hunger;
      }else{
        petImage.src="./assetsCamila/peachCat.gif";
        petMessage.textContent= "I'm not hungry Karen";
        petEnergy.textContent=`Energy level:${energy}`
        petHunger.textContent=`Hunger scale:${hunger}`;
        return energy, hunger;
      }
      
    },
  };
}

const myPet = initPet("Mocca");


buttonSleep.addEventListener('click',()=>myPet.sleep());
buttonPlay.addEventListener('click',()=>myPet.play());
buttonEat.addEventListener('click',()=>myPet.eat());