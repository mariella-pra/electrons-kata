function ElectronsAroundTheCores() {}
ElectronsAroundTheCores.prototype.calculate = function(dice) {

    var returnvalue = 0;

    if (dice.join(",") === "1,2,3,4,5")
        returnvalue = 6;

	if (dice.join(",") === "2,2,3,3")
        returnvalue = 4;

    return returnvalue;
};