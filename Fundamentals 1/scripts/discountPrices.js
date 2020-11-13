let mobileAppPrice = 350;
let webDesignPrice = 500;
let softwareAppPrice = 400;
let discount = 25;

let mobileAppDiscountPrice = (mobileAppPrice -  (mobileAppPrice * (discount / 100 )));
let webDesignDiscountPrice = (webDesignPrice -  (webDesignPrice * (discount / 100 )));
let softwareAppDiscountPrice = (softwareAppPrice -  (softwareAppPrice * (discount / 100 )));
let fullPackagePrice = (webDesignDiscountPrice + softwareAppDiscountPrice + mobileAppDiscountPrice);

