test("", () => {
  expect(require("./index")().stack).toContain("fake:1:79");
});
