  
const Engineer = require("../Assets/lib/Engineer");

describe("Create an Engineer object", () => {
  

  describe("to get Engineer github username", () => {
    it("should get the Engineers github username", () => {
      const testEngineer = new Engineer("David", 3, "email", "Username");

      expect(testEngineer.getGithub()).toBe("Username");
    });
  });

  describe("to get Engineer role", () => {
    it("should get the Engineer role", () => {
      const testEngineer = new Engineer("David", 3, "email", "Username");

      expect(testEngineer.getRole()).toBe("Engineer");
    });
  });
  
});



