function Enum(...enumEles: string[]) {
  let obj = {};

  for (let index of Object.keys(enumEles)) {
    let val = enumEles[index];
    obj[(obj[val] = index)] = val;
  }

  obj = new Proxy(obj, {
    set: () => {
      throw Error("Enumeration objects cannot be changed!");
    }
  });

  return obj;
}

export default Enum;
module.exports = Enum;
