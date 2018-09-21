const functions = require("../src/index");

test("Mutiplying numbers in array - test 1", function() {
  const input = [1, 2, 3, 4, 5];
  const expectedInput = [1, 2, 3, 4, 5];

  const expectedOutput = [2, 4, 6, 8, 10];

  const output = functions.multiply(input, 2);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});

test("Mutiplying numbers in array - test 2", function() {
  const input = [-3, -2, -4, 4, 5];
  const expectedInput = [-3, -2, -4, 4, 5];

  const expectedOutput = [3, 2, 4, -4, -5];

  const output = functions.multiply(input, -1);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});
/////
test("Make numbers absolute - test 1", function() {
  const input = [1, -2, 3, -4];
  const expectedInput = [1, -2, 3, -4];

  const expectedOutput = [1, 2, 3, 4];

  const output = functions.absolute(input);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});

test("Make numbers absolute - test 2", function() {
  const input = [2, -54, 68, -90];
  const expectedInput = [2, -54, 68, -90];

  const expectedOutput = [2, 54, 68, 90];

  const output = functions.absolute(input);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});

////
test("concat names", function() {
  const input = [
    {
      firstName: "Alan",
      lastName: "Sugar"
    },
    {
      firstName: "James",
      lastName: "Jamerson"
    },
    {
      firstName: "Donald",
      lastName: "Trump"
    }
  ];
  const expectedInput = [
    {
      firstName: "Alan",
      lastName: "Sugar"
    },
    {
      firstName: "James",
      lastName: "Jamerson"
    },
    {
      firstName: "Donald",
      lastName: "Trump"
    }
  ];

  const expectedOutput = ["Alan Sugar", "James Jamerson", "Donald Trump"];

  const output = functions.concatNames(input);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});

////
test("Numbers to String in an array - test 1", function() {
  const input = ["machines", "will", 2, "take", 3, "over", 5, 6, "humanity"];
  const expectedInput = [
    "machines",
    "will",
    2,
    "take",
    3,
    "over",
    5,
    6,
    "humanity"
  ];

  const expectedOutput = [
    "machines",
    "will",
    "2",
    "take",
    "3",
    "over",
    "5",
    "6",
    "humanity"
  ];

  const output = functions.numbersToStrings(input);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});

test("Sort strings by length", function() {
  const input = [
    "machines",
    "will",
    "2",
    "take",
    "3",
    "over",
    "5",
    "6",
    "humanity"
  ];
  const expectedInput = [
    "machines",
    "will",
    "2",
    "take",
    "3",
    "over",
    "5",
    "6",
    "humanity"
  ];

  const expectedOutput = [
    "2",
    "3",
    "5",
    "6",
    "will",
    "take",
    "over",
    "machines",
    "humanity"
  ];

  const output = functions.sortByLength([
    "machines",
    "will",
    "2",
    "take",
    "3",
    "over",
    "5",
    "6",
    "humanity"
  ]);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});

test("Returning the last two numbers in the array - test 1", function() {
  const input = [-3, -2, -4, 4, 5];
  const expectedInput = [-3, -2, -4, 4, 5];

  const expectedOutput = [4, 5];

  const output = functions.lastTwo(input);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});

//////////////

test("Increment car year by 1 year", function() {
  const input = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1992
    },
    {
      make: "Mazda",
      model: "mx8",
      year: 1991
    },
    {
      make: "mercedes",
      model: "c class",
      year: 1993
    }
  ];
  const expectedInput = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1992
    },
    {
      make: "Mazda",
      model: "mx8",
      year: 1991
    },
    {
      make: "mercedes",
      model: "c class",
      year: 1993
    }
  ];

  const expectedOutput = [
    {
      make: "Vauxhall",
      model: "Astra",
      year: 1993
    },
    {
      make: "Mazda",
      model: "mx8",
      year: 1992
    },
    {
      make: "mercedes",
      model: "c class",
      year: 1994
    }
  ];

  const output = functions.incrementYear(input);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});

test("Adding up total sales", function() {
  const input = {
    Mary: [57, 12, 31, 4],
    Dave: [43, 2, 12]
  };
  const expectedInput = {
    Mary: [57, 12, 31, 4],
    Dave: [43, 2, 12]
  };

  const expectedOutput = {
    Mary: 104,
    Dave: 57
  };

  const output = functions.totalSales(input);
  expect(output).toEqual(expectedOutput);
  expect(input).toEqual(expectedInput);
});
