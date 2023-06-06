# Truthiness

1. toBeNull matches only null
2. toBeUndefined matches only undefined
3. toBeDefined is the opposite of toBeUndefined
4. toBeTruthy matches anything that an if statement treats as true
5. toBeFalsy matches anything that an if statement treats as false


test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});