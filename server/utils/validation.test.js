const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () => {
  it('should reject non string values', () => {
    expect(isRealString(3)).toBeFalsy();
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('   ')).toBeFalsy();
  });

  it('should alow valid strings', () => {
    expect(isRealString('valid')).toBeTruthy();
  });
});
