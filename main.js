//********leap year************/

let leapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
};


//*********Ticket Pricing******/
let thePrice =(age)=> {
    let price;
    
    if (age >= 0 && age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else if (age >= 18) {
        price = 20;
    } else {
        
        return "Invalid age entered.";
    }
    
    return `The ticket price for age ${age} is $${price}.`;

}
//****************************************************Recursive********************* ***********************************/


//******************fibonnaci***********

let fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

//**************palindrome************

let checkPalindrome=(str)=> {
    if (str.length === 1) return 'palindrome';
    if (str.length === 2 && str[0] === str[1]) return 'palindrome';
    if (str[0] === str[str.length - 1]) return checkPalindrome(str.slice(1, -1));
    return 'not palindrome';
}
//*********************power***********

let power = (x, n) => {
  if (n === 0) {
    return 1;
  } else {
    return x * power(x, n - 1);
  }
};