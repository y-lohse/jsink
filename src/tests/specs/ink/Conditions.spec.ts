import * as testsUtils from "../common";

describe("Conditions", () => {
  let story: any;

  function loadStory(name: any) {
    story = testsUtils.loadInkFile(name, "conditions");
  }

  beforeEach(() => {
    story = undefined;
  });

  it("tests all switch branches fail is clean", () => {
    loadStory("all_switch_branches_fail_is_clean");

    story.Continue();
    expect(story.state.evaluationStack.length).toBe(0);
  });

  it("tests else branches", () => {
    loadStory("else_branches");

    expect(story.ContinueMaximally()).toBe("other\nother\nother\nother\n");
  });

  it("tests empty multiline conditional branch", () => {
    loadStory("empty_multiline_conditional_branch");

    expect(story.Continue()).toBe("");
  });

  it("tests trivial condition", () => {
    loadStory("trivial_condition");

    story.Continue();
  });
});
