import { checkPhoneNumber } from "../Functions";

describe("checkPhoneNumber", () => {
  it("should return true for valid phone numbers", () => {
    expect(checkPhoneNumber("09123456789")).toBe(true);
  });

  it("should return false for invalid phone numbers", () => {
    expect(checkPhoneNumber("+989123456789")).toBe(false);
    expect(checkPhoneNumber("9123456789")).toBe(false);
    expect(checkPhoneNumber("123456789")).toBe(false);
    expect(checkPhoneNumber("0912345678")).toBe(false);
    expect(checkPhoneNumber("091234567890")).toBe(false);
    expect(checkPhoneNumber("abcde12345")).toBe(false);
    expect(checkPhoneNumber("+98123456789")).toBe(false);
    expect(checkPhoneNumber("")).toBe(false);
  });

  it("should return false for numbers with incorrect formats", () => {
    expect(checkPhoneNumber("00989123456789")).toBe(false);
    expect(checkPhoneNumber("098912345678")).toBe(false);
  });
});
