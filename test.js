let table = [
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"],
  ["O", "O", "O", "O", "O"]
];

describe("place the robot on the table", () => {
  test("test case 1", () => {
    let [x, y, f] = [2, 3, 4];
    let newTable = [
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", ">", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"]
    ];

    expect(table.placeRobot(x, y, f).toEqual(newTable));
  });
});

describe("MOVE the robot", () => {
  test("test case 1", () => {
    let [x, y, f] = [2, 3, 4];
    let newTable = [
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", ">"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"]
    ];

    expect(
      table
        .placeRobot(x, y, f)
        .move()
        .toEqual(newTable)
    );
  });
  test("test case 1", () => {
    let [x, y, f] = [2, 4, 4];
    let newTable = [
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", ">"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"]
    ];

    expect(
      table
        .placeRobot(x, y, f)
        .move()
        .toEqual(newTable)
    );
  });
});
describe("move the robot UP, DOWN, LEFT or RIGHT", () => {
  test("test case 1: MOVE UP", () => {
    let [x, y, f] = [2, 3, 4];
    let newTable = [
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "^", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"]
    ];

    expect(
      table
        .placeRobot(x, y, f)
        .moveUp()
        .toEqual(newTable)
    );
  });
  test("test case 2: MOVE LEFT", () => {
    let [x, y, f] = [2, 3, 4];
    let newTable = [
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "<", "O", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"]
    ];

    expect(
      table
        .placeRobot(x, y, f)
        .moveLeft()
        .toEqual(newTable)
    );
  });
  test("test case 2: MOVE AT CORNER", () => {
    let [x, y, f] = [4, 4, 4];
    let newTable = [
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", "O"],
      ["O", "O", "O", "O", ">"]
    ];

    expect(
      table
        .placeRobot(x, y, f)
        .moveRight()
        .toEqual(newTable)
    );
  });
});
