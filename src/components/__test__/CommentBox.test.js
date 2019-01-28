import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a submit button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("should allow text input in textarea", () => {
  //
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  //force component to update after simulating change because setState is async
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("should submit form and clear comment box", () => {
  wrapped
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  wrapped.update();
  wrapped.find("form").simulate("submit");
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
