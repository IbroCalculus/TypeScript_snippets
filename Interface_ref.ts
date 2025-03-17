interface Animal {
    name: string;
    move(distance: number): void;
  }
  
  class Dog implements Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    move(distance: number): void {
      console.log(`${this.name} moved ${distance} meters.`);
    }
  }
  
  const dog: Animal = new Dog("Rex");
  dog.move(10); // Output: "Rex moved 10 meters."