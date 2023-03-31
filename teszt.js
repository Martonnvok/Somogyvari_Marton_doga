QUnit.module('add', function () {
    QUnit.test('vann e a weboldal ?', function (assert) {
        assert.ok(masodfokuEgyenletMegoldasa, 'Létezik?');
    });

    QUnit.test('a oldal számol-e ?', function (assert) {
        assert.ok(masodfokuEgyenletMegoldasa(1, 4, 4));
    });

    QUnit.test('Függvény-  ?', function (assert) {
        assert.ok(typeof masodfokuEgyenletMegoldasa === "function", "Függvény-e ?");
    });

    QUnit.test('masodfokuEgyenletMegoldasa(1,4,4)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 4, 4), {
            X1: -2,
            X2: -2
        });
    });

    QUnit.test('masodfokuEgyenletMegoldasa(1,2,3)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 2, 3), {
            X1: NaN,
            X2: NaN
        });
    });

    QUnit.test('masodfokuEgyenletMegoldasa(3,2,1)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(3, 2, 1), {
            X1: NaN,
            X2: NaN
        });
    });

    QUnit.test('masodfokuEgyenletMegoldasa(5,5,5)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(5, 5, 5), {
            X1: NaN,
            X2: NaN
        });
    });
    QUnit.test('masodfokuEgyenletMegoldasa(5,4,5)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(5, 4, 5), {
            X1: NaN,
            X2: NaN
        });
    });
    QUnit.test('masodfokuEgyenletMegoldasa(4,5,5)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(4, 5, 5), {
            X1: NaN,
            X2: NaN
        });
    });
    QUnit.test('masodfokuEgyenletMegoldasa(5,4,4)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(5, 4, 4), {
            X1: NaN,
            X2: NaN
        });
    });
    QUnit.test('masodfokuEgyenletMegoldasa(3,3,3)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(3, 3, 3), {
            X1: NaN,
            X2: NaN
        });
    });
    QUnit.test('masodfokuEgyenletMegoldasa(2,2,2)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(2, 2, 2), {
            X1: NaN,
            X2: NaN
        });
    });
    QUnit.test('masodfokuEgyenletMegoldasa(1,1,1)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(1, 1, 1), {
            X1: NaN,
            X2: NaN
        });
    });
    QUnit.test('masodfokuEgyenletMegoldasa(7,7,7)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(7, 7, 7), {
            X1: NaN,
            X2: NaN
        });
    });
    QUnit.test('masodfokuEgyenletMegoldasa(8,8,8)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(8, 8, 8), {
            X1: NaN,
            X2: NaN
        });
    });
    QUnit.test('masodfokuEgyenletMegoldasa(9,9,9)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(9, 9, 9), {
            X1: NaN,
            X2: NaN
        });
    });

    QUnit.test('masodfokuEgyenletMegoldasa(10,10,10)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(10, 10, 10), {
            X1: NaN,
            X2: NaN
        });
    });

    QUnit.test('masodfokuEgyenletMegoldasa(110,110,110)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(110, 110, 110), {
            X1: NaN,
            X2: NaN
        });
    });

    QUnit.test('masodfokuEgyenletMegoldasa(0,0,0)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(0, 0, 0), {
            X1: NaN,
            X2: NaN
        });
    });

    QUnit.test('masodfokuEgyenletMegoldasa(111,111,111)', function (assert) {
        assert.equal(masodfokuEgyenletMegoldasa(111, 111, 111), {
            X1: NaN,
            X2: NaN
        });
    });

});






