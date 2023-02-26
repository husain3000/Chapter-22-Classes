class SuperClass {
    constructor() {
    this.logger = console.log;
    }
    log() {
    this.logger(`Hello ${this.name}`);
    }
   }
   class SubClass extends SuperClass {
    constructor() {
    super();
    this.name = 'world';
    }
   }
   const subClass = new SubClass();
   subClass.log();