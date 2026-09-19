function HashSet(capacity = 16) {
  const loadFactor = 0.75;
  let buckets = [];

  for (let i = 0; i < capacity; i++) buckets[i] = null;

  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }

  function set(key) {
    if (capacity * loadFactor < length() + 1) {
      capacity *= 2;
      const newMap = HashSet(capacity);
      entries().forEach((entry) => {
        newMap.set(entry[0]);
      });
      buckets = newMap.buckets;
    }

    const index = hash(key);

    if (index < 0 || index >= buckets.length)
      throw new Error("Trying to access index out of bounds");

    if (buckets[index] === null) buckets[index] = { [key]: key, next: null };
    else {
      let tmp = buckets[index];
      while (tmp.next !== null) {
        if (tmp.hasOwnProperty(key)) {
          tmp[key] = key;
          return;
        }
        tmp = tmp.next;
      }
      if (tmp.hasOwnProperty(key)) {
        tmp[key] = key;
        return;
      }
      tmp.next = { [key]: key, next: null };
    }
  }

  function get(key) {
    const index = this.hash(key);

    if (buckets[index] !== null) {
      let tmp = buckets[index];
      while (tmp !== null) {
        if (tmp.hasOwnProperty(key)) return tmp[key];
        tmp = tmp.next;
      }
    }
  }

  function has(key) {
    return !!get(key);
  }

  function remove(key) {
    const index = hash(key);

    if (buckets[index] !== null) {
      let tmp = buckets[index],
        prev = null;

      while (tmp !== null) {
        if (tmp.hasOwnProperty(key)) {
          if (prev === null && tmp.next === null) buckets[index] = null;
          else if (prev !== null) prev.next = tmp.next;
          else buckets[index] = tmp.next;
          return true;
        }
        prev = tmp;
        tmp = tmp.next;
      }
    }
    return false;
  }

  function length() {
    let size = 0;
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        let tmp = bucket;
        while (tmp !== null) {
          size++;
          tmp = tmp.next;
        }
      }
    });
    return size;
  }

  function clear() {
    buckets.fill(null);
  }

  function keys() {
    const myKeys = [];
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        let tmp = bucket;
        while (tmp !== null) {
          for (const key in tmp) {
            if (key !== "next") myKeys.push(key);
          }
          tmp = tmp.next;
        }
      }
    });
    return myKeys;
  }

  function values() {
    const myValues = [];
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        let tmp = bucket;
        while (tmp !== null) {
          for (const key in tmp) {
            if (key !== "next") myValues.push(tmp[key]);
          }
          tmp = tmp.next;
        }
      }
    });
    return myValues;
  }

  function entries() {
    const myEntries = [];
    buckets.forEach((bucket) => {
      if (bucket !== null) {
        let tmp = bucket;
        while (tmp !== null) {
          for (const key in tmp) {
            if (key !== "next") myEntries.push([key, tmp[key]]);
          }
          tmp = tmp.next;
        }
      }
    });
    return myEntries;
  }

  return {
    hash,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    buckets,
    get buckets() {
      return buckets;
    },
  };
}

const set = HashSet();

set.set("apple");
set.set("banana");
set.set("carrot");
set.set("dog");
set.set("elephant");
set.set("frog");
set.set("grape");
set.set("hat");
set.set("ice cream");
set.set("jacket");
set.set("kite");
set.set("lion");
set.set("moon");
set.set("dream");
set.set("dragon");

console.log(set.buckets);

// console.log(set.entries());
// set.remove("dog");
// set.remove("hat");
// console.log(set.get("moon"));
set.clear()
console.log(set.buckets);


module.exports = HashSet;
