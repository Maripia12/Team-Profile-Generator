 
const Intern = require("../Assets/lib/Intern");


describe("Create an Intern object", () => {
  describe("to get Intern school name", () => {
    it("should get the Intern school name", () => {
      const testIntern = new Intern("Mary", 4, "email", "School");

      expect(testIntern.getSchool()).toBe("School");

    });
  });

  describe("to get Intern role", () => {
    it("should get the Intern role", () => {
      const testIntern = new Intern("Mary", 4, "email", "School");

      expect(testIntern.getRole()).toBe("Intern");

    });
  });

});

 

 