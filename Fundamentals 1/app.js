const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - 2005
document.getElementById("experience")
.innerHTML = yearsOfExperience;

const webDesign = 500
const offerPercentage = (webDesign * 25)/100
const price = webDesign - offerPercentage
document.getElementById("totalPrice").innerHTML = price;

const softApp = 400
const offerAppPercentage = (softApp * 25)/100
const appPrice = softApp - offerAppPercentage
document.getElementById("priceSoftApp").innerHTML = appPrice;

const mobApp = 400
let discount = 25
const offerMobPercentage = (mobApp * discount)/100
const mobPrice = mobApp - offerMobPercentage
document.getElementById("mobOffer").innerHTML = discount;
document.getElementById("priceMobApp").innerHTML = mobPrice;



const package = 1250
const packageDiscount = 30
const offerFullPackagePercentage = (package * packageDiscount)/100
const fullPackagePrice = package - offerFullPackagePercentage
document.getElementById("packageDiscount").innerHTML = packageDiscount;
document.getElementById("fullPackage").innerHTML = fullPackagePrice;

document.getElementById("currentYear")
.innerHTML = currentYear;