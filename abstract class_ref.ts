abstract class Shape {
    abstract area(): number; // Abstract method (must be implemented by subclasses)
  
    describe(): void {
      console.log("This is a shape.");
    }
  }
  
  class Circle extends Shape {
    radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // const shape = new Shape(); // Error: Cannot instantiate abstract class
  const circle = new Circle(5);
  console.log(circle.area()); // Output: 78.5398...
  circle.describe();          // Output: "This is a shape."