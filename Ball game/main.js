//var heightLuc = 162;
//var heightLong = 157;
//var ageLuc = 20;
//var ageLong = 24;
//var scoreLuc = heightLuc + 5 * ageLuc;
//var scoreLong = heightLong + 5 * ageLong;
//if(scoreLuc > scoreLong) {
//    console.log('Luc wins the game with ' + scoreLuc + ' points!')
//} else if (scoreLong > scoreLuc) {
//    console.log('Long wins the game with ' + scoreLong + ' points!')
//} else {
//    console.log('there is a draw.');
//}

var years = [1997, 2000, 2005, 1999, 1968];

function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    for (var i = 0; i < years.length; i++) {
        ages[i] = new Date().getFullYear() - years[i];
    }
    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log('Person is ' + ages[i] + ' year old, and is full age');
            fullAges.push(true);
        } else {
            console.log('Person is ' + ages[i] + ' year old, and is NOT full age');
            fullAges.push(false);
        }
    }
    return fullAges;
}
var res = printFullAge(years);