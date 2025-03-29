function createHelloWorld() {
    
    return function(...args: any[]): string {
        return "Hello World"
    };
};
const a = createHelloWorld()
console.log(a())

