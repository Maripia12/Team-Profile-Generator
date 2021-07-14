 
 
const Employee = require("../Assets/lib/Employee");


describe("Creates an employee object", () => {
    describe("to set employee name", () => {
        it("should set employee name", () => {
      const testEmployee = new Employee("Nancy", 2, "email");

       expect(testEmployee.name).toBe('Nancy');

        }) 

    })

    describe("to set employee id", () => {
      it("should set employee id", () => {
        const testEmployee = new Employee("Nancy", 2, "email");

        expect(testEmployee.id).toBe(2);
      });
    });


    describe("to set employee email", () => {
      it("should set employee email", () => {
        const testEmployee = new Employee("Nancy", 2, "email");

        expect(testEmployee.email).toBe('email');
      });
    });


    describe("to get employee name", () => {
      it("should get employee name", () => {
        const testEmployee = new Employee("Nancy", 2, "email");

        expect(testEmployee.getName()).toBe('Nancy');
      });
    });
    

   describe("to get employee id", () => {
     it("should get employee id", () => {
       const testEmployee = new Employee("Nancy", 2, "email");

       expect(testEmployee.getId()).toEqual(2);
     });
   });


    describe("to get employee email", () => {
      it("should get employee email", () => {
        const testEmployee = new Employee("Nancy", 2, "email");

        expect(testEmployee.getEmail()).toBe('email');
      });
    });

    

    describe("to get employee role", () => {
      it("should get employee role", () => {
        const testEmployee = new Employee("Nancy", 2, "email");

        expect(testEmployee.getRole()).toBe('Employee');
      });
    });

})