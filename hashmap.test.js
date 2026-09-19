const HashMap = require("./hashmap");

const map = new HashMap();

map.set("apple", "red");
map.set("banana", "yellow");
map.set("carrot", "orange");
map.set("dog", "brown");
map.set("elephant", "gray");
map.set("frog", "green");
map.set("grape", "purple");
map.set("hat", "black");
map.set("ice cream", "white");
map.set("jacket", "blue");
map.set("kite", "pink");
map.set("lion", "golden");

describe("get() method", () => {
  test("testing apple key", () => {
    expect(map.get("apple")).toBe("red");
  });

  test("testing banana key", () => {
    expect(map.get("banana")).toBe("yellow");
  });

  test("testing carrot key", () => {
    expect(map.get("carrot")).toBe("orange");
  });

  test("testing dog key", () => {
    expect(map.get("dog")).toBe("brown");
  });

  test("testing elephant key", () => {
    expect(map.get("elephant")).toBe("gray");
  });

  test("testing frog key", () => {
    expect(map.get("frog")).toBe("green");
  });

  test("testing grape key", () => {
    expect(map.get("grape")).toBe("purple");
  });

  test("testing hat key", () => {
    expect(map.get("hat")).toBe("black");
  });

  test("testing ice cream key", () => {
    expect(map.get("ice cream")).toBe("white");
  });

  test("testing jacket key", () => {
    expect(map.get("jacket")).toBe("blue");
  });

  test("testing kite key", () => {
    expect(map.get("kite")).toBe("pink");
  });

  test("testing lion key", () => {
    expect(map.get("lion")).toBe("golden");
  });
});

describe("values() method", () => {
  test("values before update", () => {
    const kayArr = [
      "red",
      "yellow",
      "orange",
      "brown",
      "gray",
      "green",
      "purple",
      "black",
      "white",
      "blue",
      "pink",
      "golden",
    ];
    expect(map.values().sort()).toEqual(kayArr.sort());
  });
});

describe("entries() method", () => {
  test("entries before update", () => {
    const entries = [
      ["apple", "red"],
      ["banana", "yellow"],
      ["carrot", "orange"],
      ["dog", "brown"],
      ["elephant", "gray"],
      ["frog", "green"],
      ["grape", "purple"],
      ["hat", "black"],
      ["ice cream", "white"],
      ["jacket", "blue"],
      ["kite", "pink"],
      ["lion", "golden"],
    ];
    expect(map.entries().sort()).toEqual(entries.sort());
  });
});

describe("update keys", () => {
  test("update apple", () => {
    map.set("apple", "redapple");
    expect(map.get("apple")).toBe("redapple");
  });

  test("update banana", () => {
    map.set("banana", "yellowbanana");
    expect(map.get("banana")).toBe("yellowbanana");
  });

  test("update carrot", () => {
    map.set("carrot", "orangecarrot");
    expect(map.get("carrot")).toBe("orangecarrot");
  });

  test("update dog", () => {
    map.set("dog", "browndog");
    expect(map.get("dog")).toBe("browndog");
  });

  test("update elephant", () => {
    map.set("elephant", "grayelephant");
    expect(map.get("elephant")).toBe("grayelephant");
  });

  test("update frog", () => {
    map.set("frog", "greenfrog");
    expect(map.get("frog")).toBe("greenfrog");
  });

  test("update grape", () => {
    map.set("grape", "purplegrape");
    expect(map.get("grape")).toBe("purplegrape");
  });

  test("update hat", () => {
    map.set("hat", "blackhat");
    expect(map.get("hat")).toBe("blackhat");
  });

  test("update ice cream", () => {
    map.set("ice cream", "white ice cream");
    expect(map.get("ice cream")).toBe("white ice cream");
  });

  test("update jacket", () => {
    map.set("jacket", "bluejacket");
    expect(map.get("jacket")).toBe("bluejacket");
  });

  test("update kite", () => {
    map.set("kite", "pinkkite");
    expect(map.get("kite")).toBe("pinkkite");
  });

  test("update lion", () => {
    map.set("lion", "goldenlion");
    expect(map.get("lion")).toBe("goldenlion");
  });
});

describe("has() method", () => {
  test("has apple key", () => {
    expect(map.has("apple")).toBe(true);
  });

  test("has banana key", () => {
    expect(map.has("banana")).toBe(true);
  });

  test("has carrot key", () => {
    expect(map.has("carrot")).toBe(true);
  });

  test("has dog key", () => {
    expect(map.has("dog")).toBe(true);
  });

  test("has elephant key", () => {
    expect(map.has("elephant")).toBe(true);
  });

  test("has frog key", () => {
    expect(map.has("frog")).toBe(true);
  });

  test("has grape key", () => {
    expect(map.has("grape")).toBe(true);
  });

  test("has hat key", () => {
    expect(map.has("hat")).toBe(true);
  });

  test("has ice cream key", () => {
    expect(map.has("ice cream")).toBe(true);
  });

  test("has jacket key", () => {
    expect(map.has("jacket")).toBe(true);
  });

  test("has kite key", () => {
    expect(map.has("kite")).toBe(true);
  });

  test("has lion key", () => {
    expect(map.has("lion")).toBe(true);
  });

  test("has puppy key", () => {
    expect(map.has("puppy")).toBe(false);
  });

  test("has dragon key", () => {
    expect(map.has("dragon")).toBe(false);
  });

  test("has snake key", () => {
    expect(map.has("snake")).toBe(false);
  });
});

describe("length() method", () => {
  test("map length before remove", () => {
    expect(map.length()).toBe(12);
  });
});

describe("keys() method", () => {
  test("keys before clear", () => {
    const kayArr = [
      "apple",
      "banana",
      "carrot",
      "dog",
      "elephant",
      "frog",
      "grape",
      "hat",
      "ice cream",
      "jacket",
      "kite",
      "lion",
    ];
    expect(map.keys().sort()).toEqual(kayArr.sort());
  });
});

describe("values() method", () => {
  test("values after update", () => {
    const valuesArr = [
      "redapple",
      "yellowbanana",
      "orangecarrot",
      "browndog",
      "grayelephant",
      "greenfrog",
      "purplegrape",
      "blackhat",
      "white ice cream",
      "bluejacket",
      "pinkkite",
      "goldenlion",
    ];
    expect(map.values().sort()).toEqual(valuesArr.sort());
  });
});

describe("entries() method", () => {
  test("entries after update", () => {
    const entries = [
      ["apple", "redapple"],
      ["banana", "yellowbanana"],
      ["carrot", "orangecarrot"],
      ["dog", "browndog"],
      ["elephant", "grayelephant"],
      ["frog", "greenfrog"],
      ["grape", "purplegrape"],
      ["hat", "blackhat"],
      ["ice cream", "white ice cream"],
      ["jacket", "bluejacket"],
      ["kite", "pinkkite"],
      ["lion", "goldenlion"],
    ];
    expect(map.entries().sort()).toEqual(entries.sort());
  });
});

describe("remove() method", () => {
  test("remove elephant", () => {
    map.remove("elephant");
    expect(map.get("elephant")).toBe(undefined);
  });

  test("remove grape", () => {
    map.remove("grape");
    expect(map.get("grape")).toBe(undefined);
  });

  test("remove hat", () => {
    map.remove("hat");
    expect(map.get("hat")).toBe(undefined);
  });

  test("remove dog", () => {
    map.remove("dog");
    expect(map.get("dog")).toBe(undefined);
  });

  test("remove non-existent key", () => {
    expect(map.remove("puppy")).toBe(false);
  });
});

describe("values() method", () => {
  test("values after renove", () => {
    const valuesArr = [
      "redapple",
      "yellowbanana",
      "orangecarrot",
      "greenfrog",
      "white ice cream",
      "bluejacket",
      "pinkkite",
      "goldenlion",
    ];
    expect(map.values().sort()).toEqual(valuesArr.sort());
  });
});

describe("keys() method", () => {
  test("keys after remove", () => {
    const kayArr = [
      "apple",
      "banana",
      "carrot",
      "frog",
      "ice cream",
      "jacket",
      "kite",
      "lion",
    ];
    expect(map.keys().sort()).toEqual(kayArr.sort());
  });
});

describe("entries() method", () => {
  test("entries after remove", () => {
    const entries = [
      ["apple", "redapple"],
      ["banana", "yellowbanana"],
      ["carrot", "orangecarrot"],
      ["frog", "greenfrog"],
      ["ice cream", "white ice cream"],
      ["jacket", "bluejacket"],
      ["kite", "pinkkite"],
      ["lion", "goldenlion"],
    ];
    expect(map.entries().sort()).toEqual(entries.sort());
  });
});

describe("length() method", () => {
  test("map length after remove", () => {
    expect(map.length()).toBe(8);
  });
});

describe("clear() method", () => {
  test("clear buckets", () => {
    map.clear();
    expect(map.length()).toBe(0);
  });
});

describe("length() method", () => {
  test("map length after clear", () => {
    map.set("hat", "black");
    map.set("ice cream", "white");
    map.set("jacket", "blue");
    map.set("kite", "pink");
    map.set("lion", "golden");

    expect(map.length()).toBe(5);
  });
});

describe("keys() method", () => {
  test("keys after clear", () => {
    const kayArr = ["hat", "ice cream", "jacket", "kite", "lion"];
    expect(map.keys().sort()).toEqual(kayArr.sort());
  });
});

describe("values() method", () => {
  test("values after clear", () => {
    const valuesArr = ["black", "white", "blue", "pink", "golden"];
    expect(map.values().sort()).toEqual(valuesArr.sort());
  });
});

describe("entries() method", () => {
  test("entries after clear", () => {
    const entries = [
      ["hat", "black"],
      ["ice cream", "white"],
      ["jacket", "blue"],
      ["kite", "pink"],
      ["lion", "golden"],
    ];
    expect(map.entries().sort()).toEqual(entries.sort());
  });
});

describe("growth", () => {
  test("test load factor", () => {
    map.clear();
    map.set("apple", "red");
    map.set("banana", "yellow");
    map.set("carrot", "orange");
    map.set("dog", "brown");
    map.set("elephant", "gray");
    map.set("frog", "green");
    map.set("grape", "purple");
    map.set("hat", "black");
    map.set("ice cream", "white");
    map.set("jacket", "blue");
    map.set("kite", "pink");
    map.set("lion", "golden");
    map.set("moon", "silver");
    // console.log(map.buckets);
    expect(map.length()).toEqual(13);
  });
});

// console.log(map.buckets);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
