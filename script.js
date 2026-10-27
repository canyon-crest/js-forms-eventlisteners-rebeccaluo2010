let btn = document.getElementById("btnShout");
btn.addEventListener("click", () => {
    let x = document.getElementById("shoutInput").value.toUpperCase()+"!";
    document.getElementById("outShout").innerHTML = x;
});
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
    document.getElementById("myInput").value = "";
    document.getElementById("r3").checked=true;
    let toppings = document.getElementsByName("cb");
    for(let i=0; i<toppings.length; i++){
        toppings[i].checked=false;
    }
    document.getElementById("serviceSelect").value="dinein";
    document.getElementById("myPara").innerHTML = "";
});

// STEP 4: Get the "Clear" button by ID ("clearBtn")
//         Add a click event listener.
//         Inside the listener:
//         a) Set the name input value to ""
//         b) Set the Large radio (id "r3") to checked = true
//         c) Uncheck ALL topping checkboxes (loop through them)
//         d) Set the service dropdown value to "dinein"
//         e) Set the output paragraph innerHTML to ""
