const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Similar books names should be sorted in the same order", () => {
    const input = [
      "Властелин Колец",
      "Властелин Колец",
    ];
    const expected = [
      "Властелин Колец",
      "Властелин Колец",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Books names should be sorted in descending order", () => {
    const input = [
      "Алеша Попович и Тугарин Змей",
      "Гарри Поттер",
      "Властелин Колец",
    ];
    const expected = [
      "Алеша Попович и Тугарин Змей",
      "Властелин Колец",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});
