const reverseString = require('./reverseString');

test('function exists', () => {
  expect(reverseString).toBeDefined()
})

test('string reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
})

// fails because it should be equal to "olleH"
test("string w/ uppercase reverses", () => {
  expect(reverseString("Hello")).toEqual("olleh");
});