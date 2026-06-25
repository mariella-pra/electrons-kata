function ElectronsAroundTheCores() {}
ElectronsAroundTheCores.prototype.calculate = function(dice) {

	var result = 0;

    for (var x=0; x<dice.length; x++) {
        if(dice[x] == 3) {
            result += 2;
        } else if(dice[x] == 5) {
            result += 4;
        }
    }

    return result;
};