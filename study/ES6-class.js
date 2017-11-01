class Person{
	constructor(param){
		this.value = param
	}
	fn(){
		console.log("fn")
	}
}

class Male extends Person{
	constructor(param,color) {
		super(param)		
		this.color = color
	}

}
var man = new Male("test","red")
man.fn()
console.log(man.value)
console.log(man.color)