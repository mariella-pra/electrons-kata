describe('Electrons Around The Cores', function() {
    beforeEach(function() {
        game = new ElectronsAroundTheCores();
    });

    it('should return 0 for an empty array', function() {
        expect(game.calculate([])).toEqual(0);
    });
});