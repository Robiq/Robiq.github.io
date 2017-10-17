function calculate(id){
	val = document.getElementById("p_"+id);
	val = val.value;
	val = parseInt(val, 10);
	//console.log(val);
	amt = document.getElementById(id+"amt").value;
	amtInt = parseInt(amt);
	console.log(amtInt);
	amtInt++;
	amt.value = amtInt;
	sum = parseInt(amtInt * val, 10);
	console.log(sum);
	document.getElementById("i"+id).innerHTML = "Total: " + sum;

	return sum;
}

function totalSum(){
	sum = 0;
	for (var i = 1; i < 4; i++) {
		sum += calculate(i);
		console.log(i + " sum: " + sum);
	}
	document.getElementById("total sum").innerHTML = "Total sum is: " + sum + ".";	
}