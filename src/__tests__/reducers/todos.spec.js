import todosReducer, {
  Creators as TodosActions
} from "../../store/ducks/todos";

describe("Todos Reducer", () => {
  it("should be able to add todos", () => {
    const state = todosReducer({ data: [] }, TodosActions.addTodo("new todo"));

    expect(state.data[0]).toBe("new todo");
  });

  it("should be able to complete todos", () => {
    const todos = ["fazer cafe"];

    const state = todosReducer(
      { data: todos },
      TodosActions.completeTodo("fazer cafe")
    );

    expect(state.data.length).toBe(0);
  });
});
