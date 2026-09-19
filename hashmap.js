class HashMap {
  loadFactor = 0.75;
  buckets = [];

  constructor(capacity = 16) {
    this.capacity = capacity;
    for (let i = 0; i < this.capacity; i++) {
      this.buckets[i] = null;
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    if (this.capacity * this.loadFactor < this.length() + 1) {
      this.capacity *= 2;
      const newMap = new HashMap(this.capacity);
      this.entries().forEach((entry) => {
        newMap.set(entry[0], entry[1]);
      });
      this.buckets = newMap.buckets;
    }

    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length)
      throw new Error("Trying to access index out of bounds");

    if (this.buckets[index] === null)
      this.buckets[index] = { [key]: value, next: null };
    else {
      let tmp = this.buckets[index];
      while (tmp.next !== null) {
        if (tmp.hasOwnProperty(key)) {
          tmp[key] = value;
          return;
        }
        tmp = tmp.next;
      }
      if (tmp.hasOwnProperty(key)) {
        tmp[key] = value;
        return;
      }
      tmp.next = { [key]: value, next: null };
    }
  }

  get(key) {
    const index = this.hash(key);

    if (this.buckets[index] !== null) {
      let tmp = this.buckets[index];
      while (tmp !== null) {
        if (tmp.hasOwnProperty(key)) return tmp[key];
        tmp = tmp.next;
      }
    }
  }

  has(key) {
    return !!this.get(key);
  }

  remove(key) {
    const index = this.hash(key);

    if (this.buckets[index] !== null) {
      let tmp = this.buckets[index],
        prev = null;

      while (tmp !== null) {
        if (tmp.hasOwnProperty(key)) {
          if (prev === null && tmp.next === null) this.buckets[index] = null;
          else if (prev !== null) prev.next = tmp.next;
          else this.buckets[index] = tmp.next;
          return true;
        }
        prev = tmp;
        tmp = tmp.next;
      }
    }
    return false;
  }

  length() {
    let size = 0;
    this.buckets.forEach((bucket) => {
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

  clear() {
    this.buckets.fill(null);
  }

  keys() {
    const myKeys = [];
    this.buckets.forEach((bucket) => {
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

  values() {
    const myValues = [];
    this.buckets.forEach((bucket) => {
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

  entries() {
    const myEntries = [];
    this.buckets.forEach((bucket) => {
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
}

module.exports = HashMap;
