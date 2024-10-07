import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";
import { cleanup } from "@testing-library/react";

// afterEach(() => {
//   cleanup();
// });

describe("_saveQuestion", () => {
  it("returns a question on successful save", async () => {
    let result = await _saveQuestion({
      optionOneText: "Eat pizza",
      optionTwoText: "Sleep",
      author: "tylermcginnis",
    });

    expect(result.author).toEqual("tylermcginnis");
    expect(result.optionOne.text).toEqual("Eat pizza");
    expect(result.optionTwo.text).toEqual("Sleep");
    expect(result.optionOne.votes).toEqual([]);
    expect(result.optionTwo.votes).toEqual([]);
    expect(result.id).toBeDefined();
    expect(result.timestamp).toBeDefined();
  });

  it("rejects if optionOneText is missing", async () => {
    await expect(
      _saveQuestion({
        optionTwoText: "Play checkers",
        author: "tylermcginnis",
      })
    ).rejects.toBe("Please provide optionOneText, optionTwoText, and author");
  });

  it("rejects if optionTwoText is missing", async () => {
    await expect(
      _saveQuestion({
        optionOneText: "Play Zelda",
        author: "tylermcginnis",
      })
    ).rejects.toBe("Please provide optionOneText, optionTwoText, and author");
  });

  it("rejects if author is missing", async () => {
    await expect(
      _saveQuestion({
        optionOneText: "Play Zelda",
        optionTwoText: "Play checkers",
      })
    ).rejects.toBe("Please provide optionOneText, optionTwoText, and author");
  });

});

describe("_saveQuestionAnswer", () => {
  it("returns true on successful save", async () => {
    let result = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });

    expect(result).toBe(true);
  });

  it("rejects if authedUser is missing", async () => {
    await expect(
      _saveQuestionAnswer({
        qid: "8xf0y6ziyjabvozdd253nd",
        answer: "optionOne",
      })
    ).rejects.toBe("Please provide authedUser, qid, and answer");
  });

  it("rejects if qid is missing", async () => {
    await expect(
      _saveQuestionAnswer({
        authedUser: "sarahedo",
        answer: "optionOne",
      })
    ).rejects.toBe("Please provide authedUser, qid, and answer");
  });

  it("rejects if answer is missing", async () => {
    await expect(
      _saveQuestionAnswer({
        authedUser: "sarahedo",
        qid: "8xf0y6ziyjabvozdd253nd",
      })
    ).rejects.toBe("Please provide authedUser, qid, and answer");
  });
});


