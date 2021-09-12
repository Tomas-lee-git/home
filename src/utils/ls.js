const ls = {
  set: (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
  },
  get: (val) => {
    return JSON.parse(localStorage.getItem(val));
  },
};

export default ls;
