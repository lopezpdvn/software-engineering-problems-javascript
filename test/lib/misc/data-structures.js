'use strict';

const assert = require('assert');

describe('Built-in data structures', function() {

    it('Dynamic Array', function() {
        const x = [];
        x.push('one');
        x.push('three');
        x.splice(0, 0, 'zero');
        x.splice(2, 0, 'two');
        x.push('four');
        assert.strictEqual(5, x.length);
        assert.strictEqual(1, x.indexOf('one'));
        assert.deepStrictEqual(['one'], x.splice(1, 1));
        assert.strictEqual(4, x.length);
        assert.strictEqual(-1, x.indexOf('one'));
        assert.strictEqual('two', x[1]);
        assert.strictEqual(2, x.indexOf('three'));
        assert.deepStrictEqual(['zero', 'two', 'three', 'four'], x);
        x[1] = 'dos';
        assert.deepStrictEqual(['zero', 'dos', 'three', 'four'], x);
        assert.doesNotThrow(() => x[99]);
        assert.strictEqual(undefined, x[99]);
    });

    it('Iterator low level', function() {
        const x = ['zero', 'one', 'two', 'three'];
        const ans = x.slice();

        for(let i = x[Symbol.iterator](), j = i.next(), k = 0;
            !j.done;
            j = i.next(), k++) {
            assert.strictEqual(j.value, ans[k]);
        }

        const i = x[Symbol.iterator]();
        let j = undefined, k = -1;
        while(k++, j = i.next(), !j.done) {
            assert.strictEqual(j.value, ans[k]);
        }
    });

    it('Hash table', function() {
        const x = new Map();
        x.set('zero', 0);
        x.set('one', 1);
        x.set('two', 2);
        assert.strictEqual(3, x.size);
        assert.strictEqual(1, x.get('one'));
        assert.strictEqual(undefined, x.get('four'));
        x.set('one', 11);
        assert.strictEqual(11, x.get('one'));
        assert.ok(x.delete('two'));
        assert.ok(!x.delete('two'));
        assert.strictEqual(2, x.size);
        assert.ok(!x.has('two'));
        assert.ok(0 > Array.from(x.values()).indexOf('two'));
        assert.ok(0 <= Array.from(x.values()).indexOf(11));
    });

    it('Hash table iteration', function() {
        const keys = new Set();
        keys.add('zero');
        keys.add('one');
        keys.add('three');
        keys.add('two');
        const values = new Set();
        values.add(0);
        values.add(2);
        values.add(3);
        values.add(1);
        const x = new Map();
        x.set('zero', 0);
        x.set('one', 1);
        x.set('three', 3);
        x.set('two', 2);

        x.forEach((v, k) => {
            assert.ok(keys.has(k));
            assert.ok(values.has(v));
        });

        for(let k of x.keys()) {
            assert.ok(keys.has(k));
        }

        for(let v of x.values()) {
            assert.ok(values.has(v));
        }

        for(let [k, v] of x) {
            assert.ok(keys.has(k));
            assert.ok(values.has(v));
        }

    });


});
