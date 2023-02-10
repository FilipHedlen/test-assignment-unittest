/**
 * @jest-environment jsdom
 */

import * as main from '../ts/main';
import * as functions from '../ts/functions'
import { Todo } from "../ts/models/Todo";

describe("createNewTodo", () => {
    test("Will add new todo to array", () => {
        // Arrange
        document.body.innerHTML =
        `<ul id="todos" class="todo"></ul>`;
        let todo: Todo[] = [];

        // Act
        main.createNewTodo('Buy dogfood', todo);

        // Assert
        expect(todo.length).toBe(1);
    });

    test("Call function createHTML from main if createNewTodo works", () => {
        //Arrange
        document.body.innerHTML = 
        `<ul id="todos" class="todo"></ul>`;
        let todo: Todo[] = [];
        let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();

        // Act
        main.createNewTodo("Buy dogfood", todo);

        // Assert
        expect(spyOnCreateHtml).toHaveBeenCalled();
        spyOnCreateHtml.mockRestore();
    });

    test("Display error if new todo fail to add", () => {
        // Arrange
        document.body.innerHTML =
        `<ul id="todos" class="todo"></ul>`;
        let todo: Todo[] = [];
        let spyOnDisplayError = jest.spyOn(main, "displayError").mockReturnValue();

        // Act
        main.createNewTodo('No', todo);

        // Assert
        expect(spyOnDisplayError).toHaveBeenCalled();
        spyOnDisplayError.mockRestore();
    });
});
