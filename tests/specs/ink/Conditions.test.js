var testsUtils = require('../../common.js');

describe('Conditions', () => {

	var story;

	function loadStory(name) {
		story = testsUtils.loadInkFile(name, "conditions");
	}

	beforeEach(() => {
		story = undefined;
	});

	test('all switch branches fail is clean', () => {
		loadStory("all_switch_branches_fail_is_clean");

		story.Continue();
		expect(story.state.evaluationStack.length).toBe(0);
	});

	test('else branches', () => {
		loadStory("else_branches");

		expect(story.ContinueMaximally()).toBe("other\nother\nother\nother\n");
	});

	test('empty multiline conditional branch', () => {
		loadStory("empty_multiline_conditional_branch");

		expect(story.Continue()).toBe("");
	});

	test('trivial condition', () => {
		loadStory("trivial_condition");

		story.Continue()
		expect(story.hasError).toBe(false);
	});
});
