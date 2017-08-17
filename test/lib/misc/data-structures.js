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
        const x = new Map();
        x.set('zero', 0);
        x.set('one', 1);
        x.set('three', 3);
        x.set('two', 2);
        const keys = new Set(x.keys());
        const values = new Set(x.values());

        x.forEach((v, k) => {
            assert.ok(x.has(k));
            assert.ok(keys.has(k));
            assert.ok(values.has(v));
        });

        for(let k of x.keys()) {
            assert.ok(keys.has(k));
            assert.ok(x.has(k));
        }

        for(let v of x.values()) {
            assert.ok(values.has(v));
        }

        for(let [k, v] of x) {
            assert.ok(keys.has(k));
            assert.ok(x.has(k));
            assert.ok(values.has(v));
        }

        for(let [k, v] of x.entries()) {
            assert.ok(keys.has(k));
            assert.ok(x.has(k));
            assert.ok(values.has(v));
        }

        for(let y in x) {
            assert.ok(false); // This line does not execute.
        }
    });


});
