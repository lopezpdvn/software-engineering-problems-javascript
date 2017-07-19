'use strict';

const assert = require('assert');

describe('Patterns', function() {
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

    it('Generator delegate to iterable/generator', function() {
        const correctSequence = [3, 'abc', 'd', 'e', 'f', 'ghi', 4, 0, 1,
            [-1, -2, -3]];
        assert.strictEqual(true, true);

        function* numGenerator() {
            yield 4;
            yield 0;
            yield 1;
        }

        const miscGenerator = function* () {
            yield 'ghi';
            yield* numGenerator();
        }

        function* mainGenerator() {
            yield 3;
            yield 'abc';
            yield* 'def';
            yield* miscGenerator();
            yield [-1, -2, -3];
        }

        assert.deepStrictEqual(correctSequence, [...mainGenerator()]);
    });

    it('Spread operator as a better `Function.prototype.apply`', function() {
        const a = [-1, 2, 1, 0, 3, -3];
        assert.ok(3 === Math.max.apply(null, a));
        assert.ok(3 === Math.max(...a));
        assert.ok(-3 === Math.min.apply(null, a));
        assert.ok(-3 === Math.min(...a));
    });
});
