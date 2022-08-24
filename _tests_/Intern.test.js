const Intern = require("../lib/Intern");
const Intern = new Intern('Bob', '123456789', 'school', 'washingtonmya@gmail.com', );

describe('Intern', () => {
    it('should return the values of the Intern', () => {
      expect(intern.name).toBe('Bob');
      expect(intern.id).toBe('123456789');
      expect(intern.email).tobe('washingtonmya@gmail.com');
      expect(intern.school).tobe('myajewell');
    });
  
    it('should return the intern name', () => {
      expect(intern.getName).toBe('Bob');
      
    });
  
    it('should return the intern ID', () => {
        expect(intern.getId).toBe('123456789');
        
      });
  
      it('should return the intern email', () => {
        expect(intern.getemail).toBe('washingtonmya@gmail.com');
        
      });
      it('should return the intern school', () => {
        expect(intern.getSchool).toBe('12345');
        
      });
      it('should return the getRole method', () => {
        expect(intern.getRole).toBe('intern');
        
      });
  
  });
  