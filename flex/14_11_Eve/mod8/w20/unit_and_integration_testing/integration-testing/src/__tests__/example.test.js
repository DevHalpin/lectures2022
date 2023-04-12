test("example test", () => {
  const mock = jest.fn();
  let result = mock("foo");

  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("foo");

  const mockTwo = jest.fn(() => 'bar');
  result = mockTwo('foo');

  expect(result).toBe('bar');
});
