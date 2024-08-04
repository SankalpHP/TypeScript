var sportsone = ["Golf", "Cricket", "Tennies", "Swimming"];
// lets use the simplied for loop
for (var _i = 0, sportsone_1 = sportsone; _i < sportsone_1.length; _i++) {
    var tempsport = sportsone_1[_i];
    if (tempsport == "Cricket") {
        console.log(tempsport + " << My Favorite!");
    }
    else {
        console.log(tempsport);
    }
}
