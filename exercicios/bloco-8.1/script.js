const morning = () => 'Acordando!!';

const foodTime = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const time = callback();
  console.log(time);
};

doingThings(morning);
doingThings(foodTime);
doingThings(sleep);

