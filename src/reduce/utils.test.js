import {
  countPositiveNumbers,
  findMaxNumber,
  flattenNestedArrays,
  groupByProperty
} from "./utils";

describe("testing reduce utils", () => {
  describe("testing findMaxNumber", () => {
    it("should find maximum in a positive number array	", () => {
      const arr = [3, 7, 2, 9, 5];
      const getMaxNumber = findMaxNumber(arr);
      expect(getMaxNumber).toBe(9);
    });

    it("should find maximum in a negative number array	", () => {
      const arr = [-3, -7, -2, -9, -5];
      const getMaxNumber = findMaxNumber(arr);
      expect(getMaxNumber).toBe(-2);
    });

    it("should find maximum in an array with identical elements	", () => {
      const arr = [7, 7, 7, 7];
      const getMaxNumber = findMaxNumber(arr);
      expect(getMaxNumber).toBe(7);
    });

    it("should ensure original array remains unchanged	", () => {
      const arr = [3, 7, 2, 9, 5];
      const getMaxNumber = findMaxNumber(arr);
      expect(getMaxNumber).not.toBe(arr);
    });

    it("should find maximum in an array with decimal numbers	", () => {
      const arr = [3.5, 7.2, 2.1, 9.7, 5.3];
      const getMaxNumber = findMaxNumber(arr);
      expect(getMaxNumber).toBe(9.7);
    });

    it("should find maximum in an empty array	", () => {
      const arr = [];
      const getMaxNumber = findMaxNumber(arr);
      expect(getMaxNumber).toBeUndefined();
    });
  });

  describe("testing countPositiveNumbers", () => {
    it("should count positive numbers in an array with mixed numbers	", () => {
      const arr = [3, -7, 0, 9, -5];
      const count = countPositiveNumbers(arr);
      expect(count).toBe(3);
    });

    it("should count positive numbers in an array with all positive numbers	", () => {
      const arr = [3, 7, 2, 9, 5];
      const count = countPositiveNumbers(arr);
      expect(count).toBe(5);
    });

    it("should count positive numbers in an array with all negative numbers	", () => {
      const arr = [-3, -7, -2, -9, -5];
      const count = countPositiveNumbers(arr);
      expect(count).toBe(0);
    });

    it("should count positive numbers in an array with decimal numbers	", () => {
      const arr = [3.5, 7.2, -2.1, 9.7, -5.3];
      const count = countPositiveNumbers(arr);
      expect(count).toBe(3);
    });
  });

  describe("testing flattenNestedArrays", () => {
    it("should flatten nested arrays with mixed elements	", () => {
      const arr = [
        [1, 2],
        [3, 4],
        [5, 6]
      ];
      const result = flattenNestedArrays(arr);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should flatten nested arrays with arrays of different lengths	", () => {
      const arr = [[1, 2], [3, 4, 5], [6]];
      const result = flattenNestedArrays(arr);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should flatten nested arrays with empty arrays	", () => {
      const arr = [[], [], []];
      const result = flattenNestedArrays(arr);
      expect(result).toEqual([]);
    });

    it("should flatten nested arrays with arrays containing non-numeric elements	", () => {
      const arr = [
        [1, 2],
        ["a", "b"],
        [3, 4]
      ];
      const result = flattenNestedArrays(arr);
      expect(result).toEqual([1, 2, "a", "b", 3, 4]);
    });

    it("should flatten an empty array of nested arrays	", () => {
      const arr = [];
      const result = flattenNestedArrays(arr);
      expect(result).toEqual([]);
    });

    it("should ensure original nested arrays remain unchanged	", () => {
      const arr = [];
      const result = flattenNestedArrays(arr);
      expect(result).not.toBe(arr);
    });

    it("should check if the function throws an error with invalid input	", () => {
      const arr = 10;
      const result = () => flattenNestedArrays(arr);
      expect(result).toThrow();
    });
  });

  describe("testing groupByProperty", () => {
    it("should group objects by an existing property	", () => {
      const students = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Carol", age: 25 }
      ];

      const groupedByAge = groupByProperty(students, "age");

      expect(groupedByAge).toEqual({
        "25": [
          { age: 25, name: "Alice" },
          { age: 25, name: "Carol" }
        ],
        "30": [{ age: 30, name: "Bob" }]
      });
    });

    it("should group objects by an empty property	", () => {
      const students = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Carol", age: 25 }
      ];

      const groupedByAge = groupByProperty(students, "");

      expect(groupedByAge).toEqual({});
    });

    it("should group objects with no objects	", () => {
      const students = [];

      const groupedByAge = groupByProperty(students, "age");

      expect(groupedByAge).toEqual({});
    });
  });
});
