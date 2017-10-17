function calculate(id){
	val = document.getElementById("p_"+id);
	val = val.value;
	val = parseInt(val, 10);
	amt = document.getElementById(id+"amt");
	amtInt = parseInt(amt.value);
	amtInt++;
	amt.value = amtInt;
	sum = parseInt(amtInt * val, 10);
	console.log("val: " + val + " amt: " + amt.value + " sum: " + sum);
	document.getElementById("i"+id).innerHTML = "Total: " + sum;
	return false;
}

function summarize(id){
	val = document.getElementById("p_"+id);
	val = val.value;
	val = parseInt(val, 10);
	amt = document.getElementById(id+"amt").value;
	amtInt = parseInt(amt);
	sum = parseInt(amtInt * val, 10);
	console.log("Summ: val: " + val + " amt: " + amt + " sum: " + sum);
	return sum;
}

function totalSum(){
	sum = 0;
	for (var i = 1; i < 4; i++) {
		sum += summarize(i);
	}
	document.getElementById("total sum").innerHTML = "Total sum is: " + sum + ".";	
	return false;
}