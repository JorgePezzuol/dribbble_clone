const isEmpty = (jsonObj) => {
  return !Object.values(jsonObj).every((x) => x !== null && x !== "");
}

// export default {
//   isEmpty
// }
export const validations = {
  isEmpty
}

