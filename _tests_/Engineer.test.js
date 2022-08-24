const Engineer = require("../lib/Engineer");
const Engineer = new Engineer('Bob', '123456789', 'myajewell', 'washingtonmya@gmail.com', );

describe('Engineer', () => {
    it('should return the values of the Engineer', () => {
      expect(engineer.name).toBe('Bob');
      expect(engineer.id).toBe('123456789');
      expect(engineer.email).tobe('washingtonmya@gmail.com');
      expect(engineer.gitHUb).tobe('myajewell');
    });
  
    it('should return the engineer name', () => {
      expect(engineer.getName).toBe('Bob');
      
    });
  
    it('should return the engineer ID', () => {
        expect(engineer.getId).toBe('123456789');
        
      });
  
      it('should return the engineer email', () => {
        expect(engineer.getemail).toBe('washingtonmya@gmail.com');
        
      });
      it('should return the engineer GitHub', () => {
        expect(engineer.getGitHUb).toBe('12345');
        
      });
      it('should return the getRole method', () => {
        expect(engineer.getRole).toBe('engineer');
        
      });
  
  });
  