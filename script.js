function trailingZeros(n) {
  //your JS code here. If required.
	let c = 0;
	while(n>0){
		if(n%10===0)
			c++;
		n/=10;
	}
	return c;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
