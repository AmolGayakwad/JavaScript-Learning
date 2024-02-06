
function BMI(height, weight){ 
    let bmi = weight/Math.pow(height, 2); 
    return bmi; 
} 
    let height = 1.79832; 
    let weight = 70; 
        
    let bmi = BMI(height, weight); 
    console.log("The BMI is " + bmi + " and you are "); 
          
      
    if (bmi < 18.5) 
     console.log("underweight"); 
  
    else if (bmi >= 18.5 && bmi < 24.9) 
     console.log("Healthy"); 
  
    else if (bmi >= 24.9 && bmi < 30) 
     console.log("overweight"); 
  
    else
     console.log("Suffering from Obesity"); 
              