const ftoc = function(fahrenheit) {
let fTemper = fahrenheit;
let fToc = (fTemper - 32) * 5 / 9;
let chanT = fTemper + fToc;

}

const ctof = function(celsius) {
let cTemper = celsius;
let cTof = cTemper * 9 / 5 + 32;
let chanT2 = cTemper + cTof;
}



module.exports = {
  ftoc,
  ctof
}
