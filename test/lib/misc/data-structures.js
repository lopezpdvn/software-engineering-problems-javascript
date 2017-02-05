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
        assert.ok(5 === x.length);
        assert.ok(1 === x.indexOf('one'));
        assert.deepStrictEqual(['one'], x.splice(1, 1));
        assert.ok(4 === x.length);
        assert.ok(-1 === x.indexOf('one'));
        assert.ok('two' === x[1]);
        assert.ok(2 === x.indexOf('three'));
        assert.deepStrictEqual(['zero', 'two', 'three', 'four'], x);
        x[1] = 'dos';
        assert.deepStrictEqual(['zero', 'dos', 'three', 'four'], x);
        assert.doesNotThrow(() => x[99]);
        assert.ok(undefined === x[99]);
    });
});
