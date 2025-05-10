import numberFormat from "./numbreFormat"; // Replace 'yourFileName' with the actual file name

describe("numberFormat function", () => {
  it("should format a valid number as a string", () => {
    const result = numberFormat(1234567.89);
    expect(result).toBe("1,234,567.89");
  });

  it("should handle a string representing a valid number", () => {
    const result = numberFormat("9876543.21");
    expect(result).toBe("9,876,543.21");
  });

  it("should handle zero as a number", () => {
    const result = numberFormat(0);
    expect(result).toBe("0");
  });

  it("should handle zero as a string", () => {
    const result = numberFormat("0");
    expect(result).toBe("0");
  });

  it("should handle negative numbers", () => {
    const result = numberFormat(-1234.56);
    expect(result).toBe("-1,234.56");
  });

  it('should handle invalid input and return "-"', () => {
    const result = numberFormat("invalidNumber");
    expect(result).toBe("-");
  });

  it('should handle NaN input and return "-"', () => {
    const result = numberFormat(NaN);
    expect(result).toBe("-");
  });
});
