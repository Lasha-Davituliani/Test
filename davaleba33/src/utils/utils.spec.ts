import { sum } from './utils';

describe('utils function', () => {
  describe('sum function', () => {
    it('should be retur 3 when passed 2 and 1', () => {
      const result = sum(2, 1);
      expect(result).toBe(3);
    });
    it('should be -4 when passed -1 and -3', () => {
      const result = sum(-1, -3);
      expect(result).toBe(-4);
    });

    it('shoud 0.3 when passed 0.1 and 0.2', () => {
      const result = sum(0.1, 0.2);
      expect(result).toBeCloseTo(0.3);
      // expect(result).toBe(0.3)
    });
  });

  describe('nonprimitive type', () => {
    it('test nonPrimitive types', () => {
      //   const obj = {};
      //   expect(obj).toBe({});
      // expect(obj).toEqual({})
      //   expect("").toBeTruthy()
      //   expect(" ").toBeTruthy()
      //   expect(0).toBeTruthy()
      // const names = ["giorgi","nika"]
      // expect(names).toContain("giorgi22")
      // expect(names).toContain("giorgi")
      //  expect(names).toContain("nika22")
      // expect(5).toBeGreaterThan(2)
    });
  });
});