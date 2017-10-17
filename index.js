// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'JPY',
  minimumFractionDigits: 2,
});

var sum = 0;


function calculate(id){
	val = document.getElementById("p_"+id);
	val = val.value;
	val = parseInt(val, 10);
	amt = document.getElementById(id+"amt");
	amtInt = parseInt(amt.value);
	amtInt++;
	amt.value = amtInt;
	sumL = parseInt(amtInt * val, 10);
	console.log("val: " + val + " amt: " + amt.value + " sum: " + sumL);
	document.getElementById("i"+id).innerHTML = "Quantity: " + amt.value + " Total: " + formatter.format(sumL);
	return false;
}

function summarize(id){
	val = document.getElementById("p_"+id);
	val = val.value;
	val = parseInt(val, 10);
	amt = document.getElementById(id+"amt").value;
	amtInt = parseInt(amt);
	sumL = parseInt(amtInt * val, 10);
	console.log("Summ: val: " + val + " amt: " + amt + " sum: " + sumL);
	return sumL;
}

function totalSum(){
	sum = 0;
	for (var i = 1; i < 4; i++) {
		sum += summarize(i);
	}
	document.getElementById("total sum").innerHTML = "Total sum is: " + formatter.format(sum) + ".";	
	return false;
}

function showPrices(btn) {
	prices = document.getElementById("prices");
	obj2 = document.getElementById("pTxt");
	if (prices.style.display === "none") {
        prices.style.display = "block";
        obj2.style.display = "block";
        btn.innerHTML = "Hide prices!"; 
    } else {
        prices.style.display = "none";
        obj2.style.display = "none";
        btn.innerHTML = "Show prices!";
    }
	return false;
}

function buy(){
	document.body.innerHTML = "<h2>Your purchase is: " + formatter.format(sum) +"</h2>";
}