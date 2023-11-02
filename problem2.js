//function convertToNumber(inputString) {
    try {
        const number = Number(inputString);
        if (isNaN(number)) {
          throw new Error("Invalid number");
        }
        return number;
      } catch (error) {
        return "Invalid number";
      }
    
    
    // Test cases
    console.log(convertToNumber("123")); // Output: 123
    console.log(convertToNumber("3.14")); // Output: 3.14
    console.log(convertToNumber("abc"));  // Output: Invalid number
    

    //problem2
    function getPerson(personObject) {
        try {
          if (typeof personObject !== 'object' || !personObject.name || !personObject.age) {
            throw new Error("Invalid parameter type");
          }
      
          const name = personObject.name;
          const age = personObject.age;
      
          return `Name: ${name}, Age: ${age}`;
        } catch (error) {
          return error.message;
        }
      }
      
      // Test cases
      const validPerson = { name: "John", age: 30 };
      console.log(getPerson(validPerson)); // Output: "Name: John, Age: 30"
      
      const invalidPerson = { name: "Alice" };
      console.log(getPerson(invalidPerson)); // Output: "Invalid parameter type"
      
      const invalidType = "This is not an object";
      console.log(getPerson(invalidType)); // Output: "Invalid parameter type"

      
      //problem3
      class Car {
        constructor(company, model, year) {
          this.company = company;
          this.model = model;
          this.year = year;
        }
      
        getDescription() {
          return `This is a ${this.year} ${this.company} ${this.model}`;
        }
      }
      
      // Instantiate an instance of the Car class
      const myCar = new Car("Toyota", "Camry", 2022);
      
      // Call the getDescription method
      const carDescription = myCar.getDescription();
      
      console.log(carDescription); // Output: "This is a 2022 Toyota Camry"

      
      //problem4
      class Employee {
        constructor(name, position, salary) {
          this.name = name;
          this.position = position;
          this.salary = salary;
        }
      
        getSalary() {
          return this.salary;
        }
      }
      
      // Instantiate an instance of the Employee class
      const employee = new Employee("John Doe", "Software Engineer", 75000);
      
      // Call the getSalary method
      const employeeSalary = employee.getSalary();
      
      console.log(`Employee ${employee.name}'s salary is $${employeeSalary}`);

      //problem5

      class Person {
        constructor(name = "Unknown", age = 0) {
          this.name = name;
          this.age = age;
        }
      
        getDetails() {
          return `Name: ${this.name}, Age: ${this.age}`;
        }
      }
      
      // Instantiate an instance of the Person class with default values
      const person1 = new Person();
      console.log(person1.getDetails()); // Output: "Name: Unknown, Age: 0"
      
      // Instantiate an instance of the Person class with custom values
      const person2 = new Person("John", 30);
      console.log(person2.getDetails()); // Output: "Name: John, Age: 30"

      
      //problem6
      class Calculator {
        static add(num1, num2) {
          return num1 + num2;
        }
      }
      
      // Call the static add method of the Calculator class
      const result = Calculator.add(5, 3);
      
      console.log(`Result of addition: ${result}`); // Output: "Result of addition: 8"

      
      //problem7

      class User {
        constructor(username, password) {
          this.username = username;
          this._password = password;
        }
      
        // Getter method for password to return it with asterisks
        get password() {
          return this._password.replace(/./g, '*');
        }
      
        // Setter method for password
        set password(newPassword) {
          if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this._password = newPassword;
          } else {
            console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
          }
        }
      }
      
      // Instantiate an instance of the User class
      const user = new User("john_doe", "MyP@ssw0rd");
      
      console.log(`Username: ${user.username}`);
      console.log(`Password: ${user.password}`); // Password displayed with asterisks
      
      // Try to set a new password
      user.password = "invalid"; // This should log an error message
      
      // Set a valid new password
      user.password = "NewP@ssw0rd";
      console.log(`New Password: ${user.password}`); // New password displayed with asterisks
      