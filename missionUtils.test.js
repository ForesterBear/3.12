const assert = require('assert');
const { getTotalBullets, checkSupplyReady } = require('./missionUtils');

describe('Модуль підрахунку боєприпасів', function() {
    it('повертає 300 для getTotalBullets(10, 30)', function() {
        assert.strictEqual(getTotalBullets(10, 30), 300);
    });

    it('повертає true для checkSupplyReady(500, 300)', function() {
        assert.strictEqual(checkSupplyReady(500, 300), true);
    });

    it('повертає false для checkSupplyReady(200, 300)', function() {
        assert.strictEqual(checkSupplyReady(200, 300), false);
    });
});
