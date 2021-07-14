// Prompt user for a number
  let num = parseInt(prompt("Enter a number that is a multiple of 3"));
  
  // Create the mulplication table
  multiplyTable = number => {
    for(let x = 0; x < 20; x++) {	
       let multiply = number * x;
      let result = `${number}`  + " * " + `${x}`  + " = " + `${multiply}`;
       document.write(result);
       document.write("<br>");
       console.log(result);
    }
    return;
  }
  
  //Check if number is a multiple of 3
  if(num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
    // Call the multiple function
    multiplyTable(num);
     } else {
       document.write("Number should be a multiple of 3 or 5 or 7");     //alert("Number should be a multiple of 3 or 5 or 7");
  }