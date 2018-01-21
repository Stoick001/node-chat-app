var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var message = generateMessage('Mike', 'Test message');
    expect(message.from).toBe('Mike');
    expect(message.text).toBe('Test message');
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var url = 'https://www.google.com/maps?q=44.9778368,16.7060617'
    var lat = 44.9778368;
    var lng = 16.7060617;
    var message = generateLocationMessage('User', lat, lng);

    expect(typeof message.createdAt).toBe('number');
    expect(message.url).toBe(url);
  });
});
