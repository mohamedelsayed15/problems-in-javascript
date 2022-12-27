let i = 1;
//we make empty string variable to concat to it so we can print on same line
let out = ""

//forEach is more readable code than traditional for loop but for is faster  
//for is faster than while 

while (i <= 100) {
    //the more terms in a one condition, the higher its level
    if ((i % 5) === 0 && (i % 3) === 0) {//level 1
    out += " FizzBuzz"
    }
    if ((i % 3) === 0) { // ====================
    out +=" Fizz"
    }
    if ((i % 5) === 0) { // level 2
    out +=" Buzz"
    }
    if ((i % 7) === 0) { //========================
    out +=" Bazz"
    }
    else {  // level 3
    out += " "+i
    }
    
    i++
}

console.log(out.trim())
