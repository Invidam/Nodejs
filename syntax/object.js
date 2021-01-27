/*
var members = ['hsp','ana','inv'];
var i =0;
while(i<members.length){
	console.log('arr ,',i,":",members[i]);
	i++;
}
	
console.log(members[1]);

var roles = {
	'name': 'hsp',
	'ps': 'ana',
	'git':'inv'
};

console.log(roles.ps);
for(var name in roles)
	console.log('object ,',name,":",roles[name]);
	*/
/*
var f = function(n){
	console.log(1+1);
	console.log(n);
	console.log(1+2);
}
console.log(f);
f(6);

var a = [f];
a[0](7);

var o = {
	func:f
}
o.func(100);
*/
var o = {
	v1:'v1',
	v2:'v2',
	f1:	function () {
		console.log(this.v1);
	},
	f2 : function() {
		console.log(this.v2);
	}
}
o.f1();
o.f2();