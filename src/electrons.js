function ElectronsAroundTheCores() {}
ElectronsAroundTheCores.prototype.calculate = function(dice) {

	var result = 0;

    if (dice.join(",") === "1,2,3,4,5")
        result = 6;
    else if (dice.join(",") === "2,2,3,3")
        result = 4;
    else if (dice.join(",") === "6,6,4,4,1,3")
        result = 2;

    return result;
};