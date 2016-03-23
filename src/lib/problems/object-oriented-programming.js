'use strict';

// Jessie =============================================================
/* Constructor/Prototype pattern */
function Jessie(hostname) {
    this.hostname = hostname;
    this.createDate = new Date();
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

exports.Jessie = Jessie;
exports.DoublyLinkedList = DoublyLinkedList;
exports.StackLinkedList = StackLinkedList;
exports.Class00 = Class00;
exports.FunctionConstructorWithThis = FunctionConstructorWithThis;
exports.FunctionConstructorWithoutThis = FunctionConstructorWithoutThis;
