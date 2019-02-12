// Задача 1.



function promiseCreator(time, val) {
    if (tipeof(val) !== 'string' || tipeof(time) !== 'number') {
        console.error('Значение не передано');
    }
    return new Promise((out) => {
        setTimeout(() => { out(val) } , time);
    });
}

const prom = promiseCreator(500, 'Ok!');









// Задача 2.


class Prom {
    constructor() {
      this.promise = new Promise((res, rej) => {
        this.res = res;
        this.rej = rej;
      })
    }
    resolve(value) {
      this.res(value);
    }
    reject(reason) {
      this.rej(reason);
    }
  }
  const inst = new Prom();
  inst.promise.then((data) => console.log(data));
  inst.resolve('test');