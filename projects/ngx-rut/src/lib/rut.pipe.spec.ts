import { RutPipe } from "./rut.pipe";

describe("RutPipe", () => {
  it("create an instance", () => {
    const pipe = new RutPipe();
    expect(pipe).toBeTruthy();
  });

  it("formats string to RUT", () => {
    const pipe = new RutPipe();
    expect(pipe.transform("7618285K")).toBe("7.618.285-K");
  });

  it("clean RUT to string", () => {
    const pipe = new RutPipe();
    expect(pipe.transform("7.618.285.K", false)).toBe("7618285K");
  });
});
