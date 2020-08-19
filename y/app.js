var amount = 1000;


var gameEle = document.getElementById("Game-sta")
var coins = document.getElementById("coins");
coins.innerHTML = amount

function game(){
    var userAmount = +prompt("your bid amount");
    var userBidNumber = +prompt("Please Bid Number");
    var generatedNumber= randomNumber();
   var bidMatched = comBidAmount(userBidNumber,generatedNumber);
   showGame(bidMatched,userAmount)
}

function randomNumber(){
    var ganNumber =Math.ceil(( Math.random() * 5));
    return ganNumber;
}

function comBidAmount(userBidNumber,generatedNumber){
    var matched = false;
    if (userBidNumber === generatedNumber){
        matched = true;
    }
    return matched;
}

function showGame(bidMatched,userAmount){
    if(bidMatched){
        amount =amount + userAmount;
        coins.innerHTML = amount
        gameEle.innerHTML = "you won the bid. " + userAmount + "is added your account.";
    }
    else{
        amount = amount - userAmount;
        coins.innerHTML = amount
        gameEle.innerHTML = "you lost the bid. " + userAmount + "is deducted from your account.";
    }
}