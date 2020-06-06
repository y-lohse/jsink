import * as testsUtils from "../common";

describe("Lists", () => {
  let story: any;
  beforeEach(() => {
    story = testsUtils.loadInkFile("tests", "inkjs");
    story.allowExternalFunctionFallbacks = true;
  });

  it("should be defined", () => {
    story.ChoosePathString("lists.basic_list");

    expect(story.Continue()).toEqual("cold\n");
    expect(story.Continue()).toEqual("boiling\n");
  });

  it("should increment/decrement", () => {
    story.ChoosePathString("lists.increment");

    expect(story.Continue()).toEqual("cold\n");
    expect(story.Continue()).toEqual("boiling\n");
    expect(story.Continue()).toEqual("evaporated\n");
    expect(story.Continue()).toEqual("boiling\n");
    expect(story.Continue()).toEqual("cold\n");
  });

  it("should print the values", () => {
    story.ChoosePathString("lists.list_value");

    expect(story.Continue()).toEqual("1\n");
    expect(story.Continue()).toEqual("2\n");
    expect(story.Continue()).toEqual("3\n");
  });

  it("should set names from values", () => {
    story.ChoosePathString("lists.value_from_number");

    expect(story.Continue()).toEqual("cold\n");
    expect(story.Continue()).toEqual("boiling\n");
    expect(story.Continue()).toEqual("evaporated\n");
  });

  it("should handle user defined values", () => {
    story.ChoosePathString("lists.defined_value");
    expect(story.Continue()).toEqual("2\n");
    expect(story.Continue()).toEqual("3\n");

    // That's 0 and not 5, because it adds up to a non existing
    // list entry see https://github.com/inkle/ink/issues/441.
    expect(story.Continue()).toEqual("0\n");
  });

  it("should add and remove values from lists", () => {
    story.ChoosePathString("lists.multivalue");
    expect(story.Continue()).toEqual("\n");
    expect(story.Continue()).toEqual("Denver, Eamonn\n");
    expect(story.Continue()).toEqual("Denver\n");
    expect(story.Continue()).toEqual("\n");
    expect(story.Continue()).toEqual("\n");
    expect(story.Continue()).toEqual("Eamonn\n");
  });

  it("should resolve list queries", () => {
    story.ChoosePathString("lists.listqueries");
    expect(story.Continue()).toEqual("list is empty\n");
    expect(story.Continue()).toEqual("2\n");
    expect(story.Continue()).toEqual("Denver\n");
    expect(story.Continue()).toEqual("Eamonn\n");
    expect(story.Continue()).toEqual("list is not empty\n");

    expect(story.Continue()).toEqual("exact equality\n");
    expect(story.Continue()).toEqual("falsy exact equality\n");
    expect(story.Continue()).toEqual("exact inequality\n");
    expect(story.Continue()).toEqual("exact inequality works\n");

    expect(story.Continue()).toEqual("has Eamonn\n");
    expect(story.Continue()).toEqual("has falsy works\n");
    expect(story.Continue()).toEqual("has not\n");
    expect(story.Continue()).toEqual("falsy has not\n");
    expect(story.Continue()).toEqual(
      "Adams, Bernard, Cartwright, Denver, Eamonn\n"
    );
    expect(story.Continue()).toEqual("\n");
    expect(story.Continue()).toEqual("\n");

    expect(story.Continue()).toEqual("truthy greater than\n");
    expect(story.Continue()).toEqual("falsy greater than\n");
    expect(story.Continue()).toEqual("greater than empty\n");
    expect(story.Continue()).toEqual("empty greater than\n");

    expect(story.Continue()).toEqual("truthy smaller than\n");
    expect(story.Continue()).toEqual("falsy smaller than\n");
    expect(story.Continue()).toEqual("smaller than empty\n");
    expect(story.Continue()).toEqual("empty smaller than\n");

    expect(story.Continue()).toEqual("truthy greater than or equal\n");
    expect(story.Continue()).toEqual("truthy greater than or equal\n");
    expect(story.Continue()).toEqual("falsy greater than or equal\n");
    expect(story.Continue()).toEqual("greater than or equals empty\n");
    expect(story.Continue()).toEqual("empty greater than or equals\n");

    expect(story.Continue()).toEqual("truthy smaller than or equal\n");
    expect(story.Continue()).toEqual("truthy smaller than or equal\n");
    expect(story.Continue()).toEqual("falsy smaller than or equal\n");
    expect(story.Continue()).toEqual("smaller than or equals empty\n");
    expect(story.Continue()).toEqual("empty smaller than or equals\n");

    expect(story.Continue()).toEqual("truthy list AND\n");
    expect(story.Continue()).toEqual("falsy list AND\n");
    expect(story.Continue()).toEqual("truthy list OR\n");
    expect(story.Continue()).toEqual("falsy list OR\n");
    expect(story.Continue()).toEqual("truthy list not\n");
    expect(story.Continue()).toEqual("falsy list not\n");

    expect(story.Continue()).toEqual("Bernard, Cartwright, Denver\n");
    expect(story.Continue()).toEqual("Smith, Jones\n");

    expect(story.Continue()).toEqual("Carter, Braithwaite\n");
    expect(story.Continue()).toEqual("self_belief\n");
  });
});
