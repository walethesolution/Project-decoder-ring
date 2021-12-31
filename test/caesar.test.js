// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it(" should return false if shift is 0", () => {
    const input = "abcde";
    const shift = 0;
    actual = caesar(input, shift);
    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is above 25", () => {
    const input = "thinkful";
    const shift = 26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("should return false if the shift amount is less than -25", () => {
    const input = "letter";
    const shift = -26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });
});

describe("caesar", () => {
  it("should encode a message by shifting the letters", () => {
    const input = "message";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "phvvdjh";

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is", () => {
    const input = "a message.";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "d phvvdjh.";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "A Message";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "d phvvdjh";

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const input = "zebra magazine";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "cheud pdjdclqh";

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const input = "zebra magazine";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = "wbyox jxdxwfkb";

    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("should decode a message by shifting the letters in the opposite direction", () => {
    const input = "phvvdjh";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "message";

    expect(actual).to.equal(expected);
  });

  it("should leaves spaces and other symbols as is", () => {
    const input = "d phvvdjh.";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "a message.";

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "D pHvvdjh";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "a message";

    expect(actual).to.equal(expected);
  });

  it("should appropriately handle letters at the end of the alphabet", () => {
    const input = "cheud pdjdclqh";
    const shift = 3;
    const actual = caesar(input, shift, false);
    const expected = "zebra magazine";

    expect(actual).to.equal(expected);
  });

  it("should allow for a negative shift that will shift to the left", () => {
    const input = "wbyox jxdxwfkb";
    const shift = -3;
    const actual = caesar(input, shift, false);
    const expected = "zebra magazine";

    expect(actual).to.equal(expected);
  });
});
