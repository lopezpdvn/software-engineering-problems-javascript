'use strict';

// Jessie =============================================================
/* Constructor/Prototype pattern */
function Jessie(hostname) {
    this.hostname = hostname;

    Object.defineProperty(this, 'createDate', {
        value: new Date(),
        enumerable: true,
        configurable: false,
        writable: false
    });

    this._runLevel = 4;
}

Jessie.prototype = {
    version: 8.2,
    releaseDate: new Date(2015, 8, 5, 0, 0, 0, 0),
}

Object.defineProperty(Jessie.prototype, "constructor", {
    enumerable: false,
    value: Jessie
});

Object.defineProperty(Jessie.prototype, "OSName", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: "Debian/Jessie"
});

Object.defineProperty(Jessie.prototype, "runLevel", {
    configurable: false,
    get: function () {
        return this._runLevel;
    },
    set: function (newRunLevel) {
        if (newRunLevel < 0) {
            newRunLevel = 0;
        } else if (newRunLevel > 6) {
            newRunLevel = 6;
        }
        this._runLevel = newRunLevel;
    }
});
// End Jessie =========================================================

class DoublyLinkedList {
    constructor(name = (new Date()).toString()) {
        // this.name is read-only.
        Object.defineProperty(this, 'name', {
            value: name,
            enumerable: true,
        });

        this.writable = 'a';
        this._arr = [];
    }

    addLast(node) {
        this._arr.push(node);
    }
}

class StackLinkedList extends DoublyLinkedList {
}

class Class00 {
    constructor(name = (new Date()).toString()) {
        this.name = name;
    }
}

function FunctionConstructorWithThis(name) {
    this.name = name;
}
FunctionConstructorWithThis.prototype.protoArray = ['a', 'b'];

function FunctionConstructorWithoutThis() {
}

// Parasitic combination inheritance ==================================

const inheritPrototype = (subType, superType) => {
    const prototype = Object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
};

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
};

function SubType(name, age) {
    // Constructor stealing
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);
// Replaces SubType.prototype = new SuperType();

SubType.prototype.sayAge = function() {
    console.log(this.age);
};

// ====================================================================

exports.Jessie = Jessie;
exports.DoublyLinkedList = DoublyLinkedList;
exports.StackLinkedList = StackLinkedList;
exports.Class00 = Class00;
exports.FunctionConstructorWithThis = FunctionConstructorWithThis;
exports.FunctionConstructorWithoutThis = FunctionConstructorWithoutThis;
exports.SuperType = SuperType;
exports.SubType = SubType;
exports.inheritPrototype = inheritPrototype;
