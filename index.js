function myFunction() {
       var inputCustomer = document.getElementById("inputCustomer").value;
       var inputSale = document.getElementById("inputSale").value;
       var dollaz = inputCustomer - inputSale;

       document.getElementById("outputDollars").innerHTML = Math.floor(dollaz);
       var dollazRound = Math.floor(dollaz);
       var quartaz = (dollaz-dollazRound)*4;

       document.getElementById("outputQuarters").innerHTML = Math.floor(quartaz);

       var quartazRound = Math.floor(quartaz);
       var dimez = (quartaz-quartazRound)*10/4;

       document.getElementById("outputDimes").innerHTML = Math.floor(dimez);

       var dimezRound = Math.floor(dimez);
       var nickelz = (dimez-dimezRound)/10*20;

       document.getElementById("outputNickels").innerHTML = Math.floor(nickelz);

       var nickelzRound = Math.floor(nickelz);
       var hunnids = (nickelz-nickelzRound)/20*100;

       document.getElementById("outputPennies").innerHTML = Math.round(hunnids);

   
}