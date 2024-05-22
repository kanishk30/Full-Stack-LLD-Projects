// function declaration

function sayHi() {
    console.log('Hi')
};

// sayHi();

// functions as expressions

let sayHiFromExpression = function() {
    console.log('Hi, I am a first class citizen');
    
};

sayHiFromExpression();
console.log(sayHiFromExpression())

