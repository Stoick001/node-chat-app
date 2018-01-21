var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate message', () => {
  it('should generate the correct message object', () => {
    var message = generateMessage('Mike', 'Test message');
    expect(message.from).toBe('Mike');
    expect(message.text).toBe('Test message');
    expect(typeof message.createdAt).toBe('number');
  });
});
