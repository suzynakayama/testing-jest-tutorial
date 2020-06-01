const functions = require('./functions');

// runs before and after each test
// beforeEach(()=> initDb())
// afterEach(() => closeDb())

// runs before and after all tests
// beforeAll(() => initDb());
// afterAll(() => closeDb());

const initDb = () => console.log("Db initialized")
const closeDb = () => console.log("Db closed")

const nameCheck = () => console.log('checking name')

// it will run only on these 2 tests because it is inside the describe block
describe('Checking Names', () => {
  beforeEach(() => nameCheck())

  test('User is Eve', () => {
    const user = 'Eve'
    expect(user).toBe('Eve')
  })

  test("User is Ella", () => {
    const user = "Ella";
    expect(user).toBe("Ella");
  });
})

test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
})

test("Add 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

//! Check for Truthy & Falsy Values
/*
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined is the opposite of toBeUndefined
toBeTruthy matches anything that an if statement treats as true
toBeFalsy matches anything that an if statement treats as false
*/

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be truthy", () => {
  expect(functions.checkValue(5)).toBeTruthy();
});

test("User should be Eve", () => {
  expect(functions.createUser()).toEqual({ name: 'Eve', age: 30 });
  // if you want to use an object or array, you need to use toEqual, not toBe
});

test("Should be under 15", () => {
  expect(functions.add(7, 3)).toBeLessThan(15);
  // there is also toBeGreaterThan, toBeLessThanOrEqual, toBeGreaterThanOrEqual
})

// Regex
test("There should not be and i in the word", () => {
  expect('team').not.toMatch(/I/i);
})

// Arrays
test("Ok should be in arr", () => {
  const arr = ['No', 'Yes', 'Ok']
  expect(arr).toContain('Ok');
})

// Promise fecthing data
// test('User name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => expect(data.name).toEqual('Leanne Graham'))
// })

// Async data
test('User name should be Leanne Graham', async () => {
  // expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})