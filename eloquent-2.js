//looping a triangle

var length = 28; //total length of all #
var squares = #;


for (i =0; i<length;i++){
  console.log(squares);
  squares += #;
}

//end of triangle exercise

//FizzBuzz

var count = 1;

while(count < 100){
  if (count % 3==0){ //if divisible by 3
    console.log("Fizz");
  }
  else if (count % 5 == 0){ //if divisible by 5
    console.log("Buzz");
  }
  else if (count % 5 == 0 && count % 3 ==0){ //if both
    console.log("FizzBuzz");
  }
  else{
    console.log(count); //else log the number
  }
  count++; //increment by one
}
//end of FizzBuzz Exercise

//chess board exercise

var count = 0;
var size = 8;

while (count < 64){ //8 X 8 grid equals 64
  if(count % 2 == 0){
  console.log(" "); //logs a space
  }
  else{
    console.log("#"); //logs the hashtag
  }
  
  if (count % size == 0){ 
    console.log("/n"); //once the board has hit 8 characters creates a new line
  }
  count++;
}

//end
