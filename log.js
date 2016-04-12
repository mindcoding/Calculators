var base = 3;
var answer = 81;

var exponent = 0;
var i = 0;
var ans = answer
for(; i < 1;) {
	var divid = ans/base;
	ans = divid;
	exponent = exponent + 1;
	if(divid == 1) {
		i = 1
		console.log("log" + base + "(" + answer + ")" + "=" + exponent);
		break;
	}
}
