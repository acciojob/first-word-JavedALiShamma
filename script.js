function firstWord(s) {
  // your code here
	String str="";
	if(s.length==0){
		return str; 
	}
	let i=0;
	let ch=s.charAt(i);
	while(ch!='' && i>=s.length){
		str=str+ch;
		i++;
	}
	return str;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
