// ============================================
//  MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
//   - Size (radio buttons): Small $7.50, Medium $10.00,
//     Large $12.50, XL $15.00
//   - Toppings (checkboxes): $0.50 each
//   - Service (dropdown): Dine In $0, Take Out $1.50,
//     Delivery $3.00

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
let btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click", function() {
    //   a) Get the selected size price:
    let size = document.getElementsByName("rg");
    let sizeprice = 0;
    for (let i = 0; i < size.length; i++) {
        if (size[i].checked) {
            sizeprice = parseFloat(size[i].value);
        }
    }
    
    //   b) Count checked toppings:
    let toppings = document.getElementsByName("cb");
    let topcount = 0;
    for (let i = 0; i < toppings.length; i++) {
        if (toppings[i].checked) {
            topcount = topcount + 1;
        }
    }
    let toppcount = topcount * 0.5;
    
    //   c) Get the service fee:
    let fee = document.getElementById("serviceSelect").value;
    let extr = 0;
    if (fee == "dinein") {
        extr = 0;
    }
    else if (fee == "takeout") {
        extr = 1.50;
    }
    else {
        extr = 3.00;
    }
    
    //   d) Calculate total: size + toppings + service fee
    let total = (sizeprice + toppcount + extr).toFixed(2);
    
    //   e) Get the customer name from the input with ID "myInput"
    let rame = document.getElementById("myInput").value;
    if (rame == "") {
        rame = "Customer";
    }
    
    //   f) Display the result in the element with ID "myPara":
    // FIX 1: Explicitly select the "myPara" element using document.getElementById
    let myPara = document.getElementById("myPara");
    myPara.innerHTML = rame + ", your total is $" + total;
}); // FIX 2: Added missing closing parenthesis for addEventListener


// STEP 4: Get the "Clear" button by ID ("clearBtn")
let clere = document.getElementById("clearBtn");
let rad = document.getElementById("r3");

clere.addEventListener("click", function() {
    // FIX 3: Actually reset the DOM element properties directly, instead of changing local variables
    document.getElementById("myInput").value = "";
    rad.checked = true;
    
    // FIX 4: Re-fetch or safely access toppings so it doesn't cause an "undefined" reference error
    let toppings = document.getElementsByName("cb");
    for (let i = 0; i < toppings.length; i++) {
        toppings[i].checked = false;
    }
    
    document.getElementById("serviceSelect").value = "dinein";
    document.getElementById("myPara").innerHTML = "";
});
