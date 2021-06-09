// thisについて学ぶ

let obj = {
    id:2,
    printId() {
        console.log(this.id) // 同オブジェクトのidにアクセスする
    }
}
obj.printId(); // 2が出力される

const sayHello = function() {
    console.log(this['hello']);
}

hello = 'hello';

const secondObject = {
    hello: "Called 'hello' from secondObject",
    sayHello
}

sayHello(); // グローバルに定義されている、'hello' をthisは参照する

secondObject.sayHello(); // secondObjectに定義されている、helloの値を参照する

function MyObj(id) {
    this.id = id;
}

// MyObj.prototype.printId = 

// 7:30~