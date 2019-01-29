import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ["comment1", "comment2"]
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("should create one <li> per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain("comment1");
  expect(wrapped.render().text()).toContain("comment2");
});
