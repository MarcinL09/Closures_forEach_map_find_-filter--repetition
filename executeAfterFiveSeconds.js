// create the executeAfterFiveSeconds function that calls the provided function after five seconds

function executeAfterFiveSeconds(string) {
    setTimeout(string, 5000);
}

function sayHello() {
    console.log('Hello!');
}
executeAfterFiveSeconds(sayHello);