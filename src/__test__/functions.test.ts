/**
 * @jest-environment jsdom
 */


import * as functions from '../ts/functions';
import { Todo } from "../ts/models/Todo";


describe("addTodo", () => {
    test("Should add new todo to array", () => {
        // Arrange
        let todo: Todo[] = [];

        // Act
        let todoText = "Buy dogfood";
        let result = functions.addTodo(todoText, todo);

        // Assert
        expect(result.success).toBe(true);
        expect(todo.length).toBe(1);
    });
  
    test("Should not add new todo to array cause of to few letters", () => {
        // Arrange
        let todo: Todo[] = [];

        // Act
        let todoText = "Hi";
        let result = functions.addTodo(todoText, todo);
        
        // Assert
        expect(result.success).toBe(false);
        expect(result.error).toBe("Du måste ange minst tre bokstäver");
        expect(todo.length).toBe(0);
    });
  });
  
  describe("changeTodo", () => {
    test("Should switch the done property of a Todo", () => {
        // Arrange
        let todo: Todo = { text: "Buy dogfood", done: false };
        
        // Act
        functions.changeTodo(todo);
        
        // Assert
        expect(todo.done).toBe(true);
    });

    test("Should switch the done property of a Todo", () => {
        // Arrange
        let todo: Todo = { text: "Buy catfood", done: true}

        // Act
        functions.changeTodo(todo);

        //Assert
        expect(todo.done).toBe(false);
    });
  });
  

  describe("removeAllTodos", () => {
    test("Should remove all Todos from the todos array", () => {
        // Arrange
        let todo: Todo[] = [
        { text: 'Buy dogfood', done: true },
        { text: 'Buy catfood', done: false },
    ];
    
        // Act
        functions.removeAllTodos(todo);

        // Assert
        expect(todo.length).toBe(0);
    });
  });