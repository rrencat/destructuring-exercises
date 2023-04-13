// Destructure the properties from the 'car'
// object below and then log all of them

const car = {
  manufacturer: 'Nissan',
  model: 'Skyline GT-R',
  country: 'Japan',
  coupe: true,
};

const {manufacturer, model, country, coupe} = car;
console.log(manufacturer, model, country, coupe);