// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  describe("encoding the message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const input = "thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet);
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters when encoding the message", () => {
      const input = "THinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet);
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const input = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet);
      const expected = "elp xhm xf mbymwwmfj dne";
      expect(actual).to.equal(expected);
    });

    it("should allow keys and symbols", () => {
      const input = "message";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet);
      const expected = "y&ii$r&";
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding the message", () => {
    it("should decode by using the given substitution alphabet", () => {
      const input = "jrufscpw";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, false);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });

    it("should allow keys and symbols", () => {
      const input = "y&ii$r&";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, false);
      const expected = "message";
      expect(actual).to.equal(expected);
    });
  });

  describe("error handling", () => {
    it("should return false if the alphabet parameter is missing", () => {
      const input = "thinkful";
      const actual = substitution(input);
      expect(actual).to.be.false;
    });

    it("should contain alphabet with 26 characters", () => {
      const input = "thinkful";
      const alphabet = "short";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });

    it("should not contain repititive alphabet characters", () => {
      const input = "thinkful";
      const alphabet = "abcabcabcabcabcabcabcabcyz";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });
});
