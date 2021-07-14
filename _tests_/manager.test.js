



const Manager = require("../Assets/lib/Manager.js");

describe("Creates a Manager object", () => {
  describe("to set office number", () => {
    it("should equal office number", () => {
      const testManager = new Manager("Joe", 1, "email", 20);

      expect(testManager.officeNumber).toEqual(20);

    });
  });

 
  
   

     describe("get Manager role", () => {
       it("should get Manager role", () => {
         const testManager = new Manager("Joe", 1, "email", 20);

         expect(testManager.getRole()).toBe('Manager');
       });
     });

  

});
