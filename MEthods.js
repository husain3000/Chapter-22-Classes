class Something {
    constructor(data) {
      this.data = data;
    }
  
    doSomething(text) {
      return {
        data: this.data,
        text
      };
    }
  }
  
  var s = new Something({ someKey: "someValue" });
  var result = s.doSomething("hello");
  console.log(result.data); // Output: { someKey: "someValue" }
  console.log(result.text); // Output: "hello"
  