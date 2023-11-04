import {
  removeVowels,
  reverseStrings,
  squareRoots,
  transformKeys
} from "./utils";

describe("testing map utils", () => {
  describe("testing transformKeys", () => {
    it("should transform keys to uppercase", () => {
      const obj = { name: "John", age: 30, city: "New York" };

      const updatedObj = transformKeys(obj);

      expect(updatedObj).toEqual(["NAME", "AGE", "CITY"]);
    });
    it("should return an empty array for an empty object", () => {
      const obj = {};

      const updatedObj = transformKeys(obj);

      expect(updatedObj).toEqual([]);
    });
    it("should not modify the original object", () => {
      const obj = { name: "John", age: 30, city: "New York" };

      const updatedObj = transformKeys(obj);

      expect(obj).not.toBe(updatedObj);
    });
  });

  describe("testing reverseStrings", () => {
    it("should reverse multiple strings", () => {
      const arr = ["hello", "world", "jest"];

      const updatedArray = reverseStrings(arr);

      expect(updatedArray).toEqual(["olleh", "dlrow", "tsej"]);
    });

    it("should handle empty input array", () => {
      const arr = [];

      const updatedArray = reverseStrings(arr);

      expect(updatedArray).toEqual([]);
    });

    it("should reverse strings with spaces", () => {
      const arr = ["hello world", "goodbye space"];

      const updatedArray = reverseStrings(arr);

      expect(updatedArray).toEqual(["dlrow olleh", "ecaps eybdoog"]);
    });

    it("should keep original array unchanged", () => {
      const arr = ["abc", "def"];

      const updatedArray = reverseStrings(arr);

      expect(updatedArray).not.toBe([arr]);
    });

    it("should reverse and check individual characters", () => {
      const arr = ["abc", "123"];
      const updatedArray = reverseStrings(arr);
      for (let i = 0; i < updatedArray.length; i++) {
        const splittedArray = updatedArray[i].split("");
        for (let j = 0; j < splittedArray.length; j++) {
          expect(updatedArray[i]).toContainEqual(splittedArray[j]);
        }
      }
    });
  });

  describe("testing squareRoots", () => {
    it("should calculate square roots of positive integers", () => {
      const arr = [4, 9, 16];

      const updatedArray = squareRoots(arr);

      expect(updatedArray).toEqual([2, 3, 4]);
    });

    it("should calculate square roots of positive floating-point numbers", () => {
      const arr = [2.25, 0.25, 1.44];

      const updatedArray = squareRoots(arr);

      expect(updatedArray).toEqual([1.5, 0.5, 1.2]);
    });

    it("should handle empty input array", () => {
      const arr = [];

      const updatedArray = squareRoots(arr);

      expect(updatedArray).toEqual([]);
    });
    it("should ensure original array remains unchanged", () => {
      const arr = [4, 9, 16];

      const updatedArray = squareRoots(arr);

      expect(arr).not.toBe(updatedArray);
    });
    it("should ensure each result is close to the actual square root", () => {
      const arr = [25, 64, 100];
      const updatedArray = squareRoots(arr);
      const arrToCheck = [5, 8, 10];

      for (let i = 0; i < updatedArray.length; i++) {
        expect(updatedArray[i]).toBeCloseTo(arrToCheck[i]);
      }
    });
  });

  describe("testing removeVowels", () => {
    it("should remove vowels from single word strings", () => {
      const arr = ["hello", "world"];

      const updatedArray = removeVowels(arr);

      expect(updatedArray).toEqual(["hll", "wrld"]);
    });

    it("should handle strings with mixed case vowels", () => {
      const arr = ["ApplE", "OrAngE"];

      const updatedArray = removeVowels(arr);
      expect(updatedArray).toEqual(["ppl", "rng"]);
    });

    it("should handle empty strings", () => {
      const arr = ["", "test", ""];

      const updatedArray = removeVowels(arr);
      expect(updatedArray).toEqual(["", "tst", ""]);
    });

    it("should handle strings with no vowels", () => {
      const arr = ["xyz", "qrst"];

      const updatedArray = removeVowels(arr);
      expect(updatedArray).toEqual(["xyz", "qrst"]);
    });

    it("should ensure original array remains unchanged", () => {
      const arr = ["hello", "world"];

      const updatedArray = removeVowels(arr);
      expect(updatedArray).not.toBe(arr);
    });

    it("should handle strings with all vowels", () => {
      const arr = ["aeiou", "AEIOU"];

      const updatedArray = removeVowels(arr);
      expect(updatedArray).toEqual(["", ""]);
    });
  });
});
