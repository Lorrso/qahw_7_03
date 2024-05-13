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

  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Властелин Колец",
      "Алеша Попович и Тугарин Змей",
    ];
    const expected = [
      "Алеша Попович и Тугарин Змей",
      "Властелин Колец",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });

  it("Book names should be sorted in descending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
    ];
    const expected = [
      "Властелин Колец",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});
