const Employee = require("../lib/Employee");

const Employee = require(Employee);
const employee = new Employee('Bob', '123456789', 'washingtonmya@gmail.com', );

describe('fizzBuzz', () => {
    it('should return the values of the employee', () => {
      expect(employee.name).toBe('Bob');
      expect(employee.id).toBe('123456789');
      expect(employee.email).tobe('washingtonmya@gmail.com');
    });
  
    it('should return the employee name', () => {
      expect(employee.getName).toBe('Bob');
      
    });
  
    it('should return the employee ID', () => {
        expect(employee.getId).toBe('123456789');
        
      });
  
      it('should return the employee email', () => {
        expect(employee.getemail).toBe('washingtonmya@gmail.com');
        
      });
      it('should return the getRoel method', () => {
        expect(employee.getName).toBe('Employee');
        
      });
  
  });
  