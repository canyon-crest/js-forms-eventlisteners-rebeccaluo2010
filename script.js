let btn = document.getElementById("btnShout");
btn.addEventListener("click", () => {
    let x = document.getElementById("shoutInput").value.toUpperCase()+"!";
    document.getElementById("outShout").innerHTML = x;
});


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
//         Add a click event listener.
//         Inside the listener:
document.getElementById("btnCalc").addEventListener("click", ()=>{
    let sizes = document.getElementsByName("rg");
    let size = "";
    for(let i=0; i<sizes.length; i++){
        if(sizes[i].checked){
            size = parseFloat(sizes[i].value);
        }
    }
    let toppings = document.getElementsByName("cb");
    let count = 0;
    for(let i=0; i<toppings.length; i++){
        if(toppings[i].checked){
            count++;
        }
    }
    count*=(0.5);
    let service = document.getElementById("serviceSelect").value;
    let fee = 0;
    if(service === "dinein"){
        fee=0;
    }
    else if(service === "takeout"){
        fee=1.50;
    }
    else if(service === "delivery"){
        fee=3.00;
    }
    let total = (size+count+fee).toFixed(2);
    let name = document.getElementById("myInput").value;
    if(name === ""){
        name = "Customer";
    }
    document.getElementById("myPara").innerHTML = name+", your total is $"+total;
});
document.getElementById("clearBtn").addEventListener("click", ()=>{
    let name = "";
    document.getElementById("r3").checked=true;
    let toppings = document.getElementsByName("cb")
    for(let i=0; i<toppings.length; i++){
        toppings[i].checked=false;
    }
    document.getElementById("serviceSelect").value="dinein";
    document.getElementById("output").innerHTML = "";
});

//   a) Get the selected size price:
//      Use document.getElementsByName("rg") to get all
//      size radio buttons. Loop through them to find the
//      one that is .checked, and read its .value.
//      Convert to a number with parseFloat().

//   b) Count checked toppings:
//      Use document.getElementsByName("cb") to get all
//      topping checkboxes. Loop through and count how
//      many are .checked. Multiply count by 0.50.

//   c) Get the service fee:
//      Use document.getElementById("serviceSelect").value
//      to get the selected option value ("dinein", "takeout",
//      or "delivery").
//      Use if/else if/else to set the fee:
//        "dinein"   → 0
//        "takeout"  → 1.50
//        "delivery" → 3.00

//   d) Calculate total: size + toppings + service fee

//   e) Get the customer name from the input with ID "myInput"

//   f) Display the result in the element with ID "myPara":
//      "[name], your total is $[total]"
//      Use .toFixed(2) to format the total.
//      Example: "Alice, your total is $13.50"
//      If name is empty, use "Customer" as the default.


// STEP 4: Get the "Clear" button by ID ("clearBtn")
//         Add a click event listener.
//         Inside the listener:
//         a) Set the name input value to ""
//         b) Set the Large radio (id "r3") to checked = true
//         c) Uncheck ALL topping checkboxes (loop through them)
//         d) Set the service dropdown value to "dinein"
//         e) Set the output paragraph innerHTML to ""
