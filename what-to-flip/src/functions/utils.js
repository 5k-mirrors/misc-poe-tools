export const deepClone = obj => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (err) {
    console.error(`Object deep clone error: ${err}`);

    return {};
  }
};

export const isDefined = value =>
  typeof value !== "undefined" && value !== null;
