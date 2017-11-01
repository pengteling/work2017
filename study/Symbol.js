function fun(){
	var a =100;
	console.log(arguments[Symbol(Symbol.iterator)])
}
fun(1,2)