import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";
import { Creators as TodoActions } from "../../store/ducks/todos";

import TodoList from "../../TodoList";

const mockStore = createStore();

const INITIAL_STATE = {
  todos: { data: ["Fazer café", "Estudar React"] }
};

const store = mockStore(INITIAL_STATE);
/**
 * !!! Test With Redux !!!
 */

it("should render the list", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  expect(wrapper.find("li").length).toBe(2);
});

it("should be able to add new todos", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );

  wrapper.find("TodoList").setState({ text: "novo todo hein" });
  wrapper.find("button").simulate("click");

  expect(store.getActions()).toContainEqual(
    TodoActions.addTodo("novo todo hein")
  );
});
/**
 * Test E2E
 */

// it("should render the list and button", () => {
//   const wrapper = mount(<TodoList />);

//   expect(wrapper.find("ul").exists()).toBe(true);
//   expect(wrapper.find("input[name='todo']").exists()).toBe(true);
//   expect(wrapper.find("button").exists()).toBe(true);
// });

// it("should be able to add new todo", () => {
//   const wrapper = mount(<TodoList />);

//   wrapper.find("input[name='todo']").simulate("change", {
//     target: { value: "novo todo" }
//   });

//   wrapper.find("button").simulate("click");

//   expect(wrapper.find("ul").contains(<li>novo todo</li>)).toBe(true);
// });

// it("should add new todos to local storage", () => {
//   const setItemMock = jest.fn();

//   global.localStorage.__proto__.getItem = jest.fn().mockReturnValue("[]");
//   global.localStorage.__proto__.setItem = setItemMock;

//   const wrapper = mount(<TodoList />);

//   wrapper.setState({ text: "novo todo" });
//   wrapper.instance().handleAddTodo();

//   expect(setItemMock).toHaveBeenLastCalledWith(
//     "todos",
//     JSON.stringify(["novo todo"])
//   );
// });

// it("should load todos in componentDidMount", () => {
//   const getItemMock = jest
//     .fn()
//     .mockReturnValue(JSON.stringify(["Fazer café!"]));

//   global.localStorage.__proto__.getItem = getItemMock;

//   const wrapper = mount(<TodoList />);

//   expect(wrapper.state("todos")).toEqual(["Fazer café!"]);
// });
