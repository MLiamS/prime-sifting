$(document).ready(function(){
  $("form#form").submit(function(){
    event.preventDefault();
    var num = parseInt($("#input").val());
    if(isNaN(num) === true){
      $("#notANum").show()}

      numArray = [];

      for(i=2; i<=num; i++){
        numArray.push(i)};  // creates number array

        console.log(numArray);






        for(i=2; i<=num; i++){
          numArray.forEach(function(n){
            if (n%i === 0 && n != i){
              var index = numArray.indexOf(n);
              numArray.splice(index , 1, 'x');
            }
          });
        }


      console.log(numArray);
      numString = numArray.join("  ");
      $("#primes").append(numString);
    });





    // console.log(num);
    // console.log(numArray);


  });
