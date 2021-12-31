// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  describe("encoding a message", () => {
    it("should encode a message by changing each letter to number pairs", () => {
      const input = "thinkful";
      const actual = polybius(input);
      const expected = "4432423352125413";
      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const input = "jiggle";
      const actual = polybius(input);
      const expected = "424222221351";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const input = "thinkful jiggle";
      const actual = polybius(input);
      const expected = "4432423352125413 424222221351";
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const input = "THINkful";
      const actual = polybius(input);
      const expected = "4432423352125413";
      expect(actual).to.equal(expected);
    });

    it("ensures output to be string", () => {
      const input = "thinkful";
      const actual = polybius(input);
      const expected = "4432423352125413";
      expect(actual).to.equal(expected);
      expect(expected).to.be.a("string");
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const input = "23513434112251";
      const actual = polybius(input, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const input = "424222221351";
      const actual = polybius(input, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should maintain spaces", () => {
      const input = "2345 23513434112251";
      const actual = polybius(input, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const input = "4432423352125413 42422222135";
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });
  });
});
