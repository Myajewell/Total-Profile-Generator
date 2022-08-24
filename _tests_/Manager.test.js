const Manager = require("../lib/Manager");
const Manager = require("../lib/Manager");
const Manager = new Manager('Bob', '123456789', '12345', 'washingtonmya@gmail.com', );

describe('Manager', () => {
    it('should return the values of the Manager', () => {
      expect(manager.name).toBe('Bob');
      expect(manager.id).toBe('123456789');
      expect(manager.email).tobe('washingtonmya@gmail.com');
      expect(manager.officeNumber).tobe('12345');
    });
  
    it('should return the Manager name', () => {
      expect(manager.getName).toBe('Bob');
      
    });
  
    it('should return the Manager ID', () => {
        expect(manager.getId).toBe('123456789');
        
      });
  
      it('should return the Manager email', () => {
        expect(manager.getemail).toBe('washingtonmya@gmail.com');
        
      });
      it('should return the Manager office phone', () => {
        expect(manager.getPhone).toBe('12345');
        
      });
      it('should return the getRoel method', () => {
        expect(manager.getName).toBe('Manager');
        
      });
  
  });
  