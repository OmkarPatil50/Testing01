import { findCommonElement, findFirstPositiveNumber } from "./utils";

describe("testing find utils", () => {
  describe("testing findFirstPositiveNumber", () => {
    it("should find first positive number	", () => {
      const arr = [3, 7, -2, 9, -5];
      const result = findFirstPositiveNumber(arr);
      expect(result).toBe(3);
    });

    it("should find first positive number in an array with only negative numbers	", () => {
      const arr = [-3, -7, -2, -9, -5];
      const result = findFirstPositiveNumber(arr);
      expect(result).toBeUndefined();
    });

    it("should find first positive number in an array with decimal numbers	", () => {
      const arr = [3.5, 7.2, 2.1, 9.7, 5.3];
      const result = findFirstPositiveNumber(arr);
      expect(result).toBe(3.5);
    });

    it("should check if the function throws an error with invalid input	", () => {
      const arr = 1;
      const result = () => findFirstPositiveNumber(arr);
      expect(result).toThrow();
    });
  });

  describe("testing findCommonElement", () => {
    it("should find a common element	", () => {
      const array1 = [2, 4, 6, 8, 10];
      const array2 = [5, 7, 8, 10, 12];
      const commonElement = findCommonElement(array1, array2);
      expect(commonElement).toBe(8);
    });

    it("should find a common element in arrays with no common elements	", () => {
      const array1 = [2, 4, 6];
      const array2 = [5, 7, 9];
      const commonElement = findCommonElement(array1, array2);
      expect(commonElement).toBe();
    });

    it("should find a common element when one array is empty	", () => {
      const array1 = [];
      const array2 = [5, 7, 8, 10, 12];
      const commonElement = findCommonElement(array1, array2);
      expect(commonElement).toBe();
    });

    it("should find a common element when both arrays are empty	", () => {
      const array1 = [];
      const array2 = [];
      const commonElement = findCommonElement(array1, array2);
      expect(commonElement).toBe();
    });

    it("should check if the function throws an error with invalid input	", () => {
      const array1 = "hello";
      const array2 = "invalid";
      const commonElement = () => findCommonElement(array1, array2);
      expect(commonElement).toThrow();
    });
  });
});
