var numToRepresent = 6;
var arrExample = new Array(1000000)
for(var i=0; i<arrExample.length;i++)
{
	arrExample[i] = i+1;
}
function weightyRandom()
{
	var index = 1;
	var returnArr = new Array();
	var copyArr = arrExample.slice();	
	var len = arrExample.length;
	// Run on numToReprsent choose random val from the array
	while(index<= numToRepresent)
	{
		currIndex = Math.floor(Math.pow(len,Math.random())) - index;
		returnArr.push(currArr[currIndex]);
		// Remove the value from the copy array
		copyArr.splice(currIndex , 1);
		index++;	
	}
	// The return array
	console.log(returnArr);
}