const buttonSleep = document.getElementById('buttonSleep');
const buttonPlay = document.getElementById('buttonPlay');
const buttonEat = document.getElementById('buttonEat');
const petImage = document.getElementById('Peach');
const petMessage = document.getElementById('text');
const petEnergy = document.getElementById('energyLevel');
const petHunger = document.getElementById('hungerLevel');

function initPet(pet) {
  const petName = pet;
  let energy = 100;
  let hunger = 0;
  let age = 0;
  let status = '';
  return {
    sleep: function () {
      if (energy < 100) {
        petImage.src = '././assetsCamila/durmiendo.gif';
        petMessage.textContent = `zZZzZzZZz`;
        status = 'sleeping';
        age++;
        energy += 20;
        hunger += 20;
        if (hunger > 100) {
          hunger = 100;
        }
        if (energy > 100) {
          energy = 100;
        }
        petEnergy.style.width = `${energy}%`;
        petHunger.style.width = `${hunger}%`;

        return {
          energy,
          hunger,
          age,
          status,
        };
      } else if (status === 'sleeping' && energy === 100) {
        petImage.src = './assetsCamila/peachCat.gif';
        petMessage.textContent = 'I just slept';
        petEnergy.style.width = `${energy}%`;
        return energy;
      }
    },
    play: function () {
      if (energy > 30) {
        petImage.src = './assetsCamila/jugando2.gif';
        petMessage.textContent = `Wiiii, I love this!`;
        status = 'running';
        age++;
        energy = energy - 30;
        hunger += 20;
        if (hunger > 100) {
          hunger = 100;
        }
        if (energy < 0) {
          energy = 0;
        }
        petEnergy.style.width = `${energy}%`;
        petHunger.style.width = `${hunger}%`;
        return {
          energy,
          hunger,
          age,
          status,
        };
      } else {
        petImage.src = './assetsCamila/cansado.gif';
        petMessage.textContent = "I'm too tired to play";
      }
    },
    eat: function () {
      if (status !== 'eating') {
        petImage.src = './assetsCamila/comiendo.gif';
        petMessage.textContent = `This is mewlicious!`;
        status = 'eating';
        age++;
        energy = energy + 10;
        hunger = 0;
        if (energy > 100) {
          energy = 100;
        }
        petEnergy.style.width = `${energy}%`;
        petHunger.style.width = `${hunger}%`;
        return {
          energy,
          hunger,
          age,
          status,
        };
      } else {
        petImage.src = './assetsCamila/full.gif';
        petMessage.textContent = "I'm full";
        petEnergy.style.width = `${energy}%`;
        return energy, hunger;
      }
    },
  };
}

const myPet = initPet('Mocca');

buttonSleep.addEventListener('click', () => myPet.sleep());
buttonPlay.addEventListener('click', () => myPet.play());
buttonEat.addEventListener('click', () => myPet.eat());
