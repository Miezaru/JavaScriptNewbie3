// function MyError(message) {
//     this.name = 'MyError';
//     this.message = message || 'Сообщение по умолчанию';
//     this.stack = (new Error()).stack;
// }
// MyError.prototype = Object.create(Error.prototype);
// MyError.prototype.constructor = MyError;

// try {
//     var myMax = function (arr) {
//         if ((typeof (arr)) === [] && (typeof (arr)) != null && arr != '') {
//             console.log('done');
//         } else {
//             throw new MyError('Введите верное значение');
//         }
//         let max = Math.max.apply(Math, arr);
//         return max;
//     };
//     let list = [12, 23, 100, 34, 56, 9, 233];
//     console.log(myMax(list)); // 233

// } catch (e) {
//     console.log(e.name); // 'MyError'
//     console.log(e.message); // 'Сообщение по умолчанию'
// }

// let list = [12, 23, 100, 34, 56, 9, 233];
// console.log(myMax(list)); // 233

var yearNow = new Date().getFullYear();

function information() {
    return this.name + ' ' + this.model + ', ' + this.engine + 'cc, year' + this.year + ', ' + this.used;
}

var car = {
    engine: 3201,
    model: 'M3',
    name: 'BMW',
    year: '1995',
    _used: 'used',
    info: information,
    get used() {
        return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
        if (value == 'new' && this.year < yearNow) {
            this.year = yearNow;
        }
    }
};

var car2 = {
    engine: 2999,
    model: 'GLS 450',
    name: 'Mersedes',
    year: '2019',
    _used: 'new',
    info: information,
    get used() {
        return yearNow - this.year ? 'used' : 'new';
    },
    set used(value) {
        if (value == 'new' && this.year < yearNow) {
            this.year = yearNow;
        }
    }
};

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2010, used

car.used = 'new';

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- год изменен

car.used = 'used';

console.log(car.info()); // Chevrolet Lacetti, 2000cc, year 2019, new -- изменения не выполняются

console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new

car.used = 'used';

console.log(car2.info()); // Infinite FX50 AWD, 5000cc, year 2019, new -- изменения не выполняются