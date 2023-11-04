export const findFirstPositiveNumber = (arr) => {
  return arr.find((element) => element > 0);
};

export const findCommonElement = (arr1, arr2) => {
  return arr1.find((item) => arr2.includes(item));
};
