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

});
