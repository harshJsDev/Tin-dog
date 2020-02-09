var number;
alert('welcome to Love calculator!\nHere you can predict your compatibility with your partner')
var name = prompt('Enter Your name ');
var partnerName = prompt('Enter Your partner name ');
number = Math.random()* 99;
number = Math.floor(number);
alert(name+' your compatibility with '+partnerName+' is ' +number+'%');