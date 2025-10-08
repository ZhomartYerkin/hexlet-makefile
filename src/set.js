const set = (object, key, value) => {
  if (!(key in object)) {
    object[key] = value;
  }
  return object;
};

export default set;
