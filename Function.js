//Local and global scope VAR and LET Keyword
var carName = "BMW";

function cars()
{
    let carName = "Mercedes"; 
    console.log(carName);
}

cars();
console.log(carName);