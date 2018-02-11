var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}




//8



while (x < 6) {
  console.log('Printing out x = ' + x);
}
x never increments



//x is never assigned a start value


/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<=20) {
    // check divisibility
   if(x%3===0&&x%5===0){
        console.log("JuliaJames");
    }else{
         if(x%3===0)
    {
        console.log("Julia");
    }else if(x%5===0){
        console.log("James");
    }else  if(x%3!==0&&x%5!==0){
        console.log(x);
    }
    }
    x++;
    // print Julia, James, or JuliaJames
    // increment x
}
