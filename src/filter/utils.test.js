import { filterByProperties, isPalindromic } from "./utils";
import { filterEvenAndPositive, filterLongStrings } from "./utils";
import * as matchers from "jest-extended";
expect.extend(matchers);

describe("testing filter utility", () => {
  describe("testing filterLongStrings", () => {
    it("should filter strings longer than minimum length", () => {
      const strings = ["apple", "banana", "cherry", "date"];
      const minLength = 5;
      const updatedStrings = filterLongStrings(strings, minLength);
      expect(updatedStrings).toEqual(["banana", "cherry"]);
    });

    it("should handle empty input array", () => {
      const strings = [];
      const minLength = 3;
      const updatedStrings = filterLongStrings(strings, minLength);
      expect(updatedStrings).toEqual([]);
    });

    it("should handle empty output array", () => {
      const strings = ["cat", "dog", "rat"];
      const minLength = 3;
      const updatedStrings = filterLongStrings(strings, minLength);
      expect(updatedStrings).toEqual([]);
    });

    it("should handle negative minimum length", () => {
      const strings = ["hello", "world"];
      const minLength = -2;
      const updatedStrings = filterLongStrings(strings, minLength);
      expect(updatedStrings).toEqual(["hello", "world"]);
    });

    it("should ensure original array remains unchanged", () => {
      const strings = ["apple", "banana", "cherry"];
      const minLength = 4;
      const updatedStrings = filterLongStrings(strings, minLength);
      expect(updatedStrings).not.toBe(strings);
    });

    it("should check if the filtered array is empty", () => {
      const strings = ["apple", "banana", "cherry", "date"];
      const minLength = 10;
      const updatedStrings = filterLongStrings(strings, minLength);
      expect(updatedStrings).toEqual([]);
    });

    it("should check if the function throws an error with invalid input	", () => {
      const strings = "invalid";
      const minLength = 5;
      const updatedStrings = () => filterLongStrings(strings, minLength);
      expect(updatedStrings).toThrow();
    });
  });

  describe("testing filterEvenAndPositive", () => {
    it("should filter even and positive numbers", () => {
      const arr = [2, 4, -6, 8, 9, -10, 11];

      const updatedArray = filterEvenAndPositive(arr);
      expect(updatedArray).toEqual([2, 4, 8]);
    });

    it("should handle empty input array", () => {
      const arr = [];

      const updatedArray = filterEvenAndPositive(arr);
      expect(updatedArray).toEqual([]);
    });

    it("should handle input with no even and positive numbers	", () => {
      const arr = [-3, -5, -7];

      const updatedArray = filterEvenAndPositive(arr);
      expect(updatedArray).toEqual([]);
    });

    it("should handle input with only positive but odd numbers", () => {
      const arr = [1, 3, 5, 7];

      const updatedArray = filterEvenAndPositive(arr);
      expect(updatedArray).toEqual([]);
    });

    it("should check if the output array contains only even and positive numbers	", () => {
      const arr = [2, 4, -6, 8, 9, -10, 11];

      const updatedArray = filterEvenAndPositive(arr);
      expect(
        updatedArray.every((num) => num > 0 && num % 2 === 0)
      ).toBeTruthy();
    });

    it("should check if the output array length is correct	", () => {
      const arr = [2, 4, -6, 8, 9, -10, 11];

      const updatedArray = filterEvenAndPositive(arr);

      expect(updatedArray).toHaveLength(3);
    });

    it("should check if the filtered array does not contain negative numbers", () => {
      const arr = [2, 4, -6, 8, 9, -10, 11];

      const updatedArray = filterEvenAndPositive(arr);

      expect(updatedArray.every((num) => num > 0)).toBeTruthy();
    });

    it("should check if the function throws an error with invalid input	", () => {
      const arr = "Hello";

      const updatedArray = () => filterEvenAndPositive(arr);

      expect(updatedArray).toThrow();
    });
  });

  describe("testing isPalindromic", () => {
    it("should check for a palindromic number	", () => {
      const num = 121;
      const result = isPalindromic(num);
      expect(result).toBe(true);
    });

    it("should check for a non-palindromic number	", () => {
      const num = 123;
      const result = isPalindromic(num);
      expect(result).toBe(false);
    });
    it("should check for a single-digit number		", () => {
      const num = 5;
      const result = isPalindromic(num);
      expect(result).toBe(true);
    });

    it("should filter palindromic numbers from the provided array			", () => {
      const numbers = [121, 123, 1331, 454, 678, 898];
      const result = numbers.filter(isPalindromic);
      expect(result).toEqual([121, 1331, 454, 898]);
    });
    it("should filter palindromic numbers from an empty array		", () => {
      const numbers = [];
      const result = numbers.filter(isPalindromic);
      expect(result).toEqual([]);
    });
    it("should filter palindromic numbers from an array with no palindromic numbers	", () => {
      const numbers = [123, 456, 789];
      const result = numbers.filter(isPalindromic);

      expect(result).toEqual([]);
    });
    it("should ensure the filtered array contains only palindromic numbers		", () => {
      const numbers = [121, 1331, 454, 898];
      const result = numbers.filter(isPalindromic);

      expect(result.every((num) => isPalindromic(num))).toBeTruthy();
    });
    it("should check if the filtered array length is correct		", () => {
      const numbers = [121, 1331, 454, 898];
      const result = numbers.filter(isPalindromic);

      expect(result).toHaveLength(4);
    });
    it("should check if the filtered array is an array	", () => {
      const numbers = [121, 1331, 454, 898];
      const result = numbers.filter(isPalindromic);

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("testing filterByProperties", () => {
    it("should filter items based on criteria	", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];

      const criteria = { price: 10, category: "A" };
      const filteredItems = filterByProperties(items, criteria);

      expect(filteredItems).toEqual([
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 3", price: 10, category: "A" }
      ]);
    });
    it("should ensure original array remains unchanged	", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];

      const criteria = { price: 10, category: "A" };
      const filteredItems = filterByProperties(items, criteria);

      expect(filteredItems).not.toBe(items);
    });
    it("should check if filtered array includes certain items	", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];

      const criteria = { price: 10, category: "A" };
      const filteredItems = filterByProperties(items, criteria);

      expect(filteredItems).toContainEqual(items[0]);
      expect(filteredItems).toContainEqual(items[2]);
    });
    it("should check if filtered array does not include certain items	", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];

      const criteria = { price: 10, category: "A" };
      const filteredItems = filterByProperties(items, criteria);
      expect(filteredItems).not.toContainEqual(items[1]);
      expect(filteredItems).not.toContainEqual(items[3]);
    });
    it("should check if the filtered array length is correct	", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];

      const criteria = { price: 10, category: "A" };
      const filteredItems = filterByProperties(items, criteria);
      expect(filteredItems).toHaveLength(2);
    });
    it("should check if the filtered array is an array	", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];

      const criteria = { price: 10, category: "A" };
      const filteredItems = filterByProperties(items, criteria);
      expect(filteredItems).toBeInstanceOf(Array);
    });
    it("should check if the filtered array is not empty	", () => {
      const items = [
        { name: "Item 1", price: 10, category: "A" },
        { name: "Item 2", price: 25, category: "B" },
        { name: "Item 3", price: 10, category: "A" },
        { name: "Item 4", price: 15, category: "C" }
      ];

      const criteria = { price: 10, category: "A" };
      const filteredItems = filterByProperties(items, criteria);

      expect(filteredItems).not.toHaveLength(0);
    });
  });
});
