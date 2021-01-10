console.log('====== test module file: at the very first begining, the 1st line. ======');

export default class Tesla {
  constructor(price) {
    this.price = price;
  }

  start = (model, time) => {
    console.log(`price of ${model} is ${this.price}`);
    console.log(`${model} start in ${time} seconds`);

    return this.start;
  }
}

console.log('Tesla: ', Tesla);
console.log('Tesla.prototype: ', Tesla.prototype);

const model3 = new Tesla(390000);
console.log('model3.start(): ', model3.start('model3', 300));
console.log('model3.__proto__: ', model3.__proto__);

console.log('model3.__proto__ === Tesla.prototype: ', model3.__proto__ === Tesla.prototype);
console.log('Tesla.prototype.constructor === Tesla: ', Tesla.prototype.constructor === Tesla);
