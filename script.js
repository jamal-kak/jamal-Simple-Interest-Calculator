function compute()
{
    p = document.getElementById("principal").value;
    
// 
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);


    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

}
        

// listening on anay rate value change and updating the rate-val span
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}



// function that validates the principal input
function validatePrincipal(){
    p = document.getElementById("principal").value;

    if( p <= 0 ){
        window.alert("Enter a positive number");
        document.getElementById("principal").value = 1;
        document.getElementById("principal").focus();
    }
}