class Greeter {
    constructor(message){
        this.message = message;
    }
    greet(){
        var element = document.querySelector('h1');
        element.text = this.message;
    }

}
var greeter = new Greeter('Hello ES6!');
    greeter.greet();