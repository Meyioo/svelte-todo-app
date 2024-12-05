import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import { DefaultTodos } from '../lib/constants/todos.constants';
import type { ITodo } from '../model/todo.model';

// Helper function to sync with localStorage
function createPersistedStore(key: string, initialValue: ITodo[]): Writable<ITodo[]> {
	if (!browser) {
		const todos: ITodo[] = [];
		return writable(todos);
	}

	const storedValue = localStorage.getItem(key);
	const data = storedValue ? JSON.parse(storedValue) : initialValue;
	const store = writable(data);

	// Subscribe to changes and update localStorage
	store.subscribe((value) => localStorage.setItem(key, JSON.stringify(value)));

	return store;
}

// Initialize the store with default values or values from localStorage
export const TodosStore = createPersistedStore('todos', DefaultTodos);

export const SearchStore = writable('');

export function addTodo(todo: ITodo): void {
	TodosStore.update((todos) => {
		const nextId = todos.length > 0 ? Math.max(...todos.map((t) => t.id!), 0) + 1 : 1;
		todo.id = nextId;
		todos.push(todo);
		return todos;
	});
}

export function selectTodo(todo: ITodo): void {
	TodosStore.update((todos) => {
		const storedTodo = todos.find((t) => todo === t);
		if (storedTodo) {
			storedTodo.selected = !storedTodo.selected;
		}
		return todos;
	});
}

export function completeSelectedTodos(): void {
	TodosStore.update((todos) => {
		todos.forEach((todo) => {
			if (todo.selected) {
				todo.completed = true;
				todo.selected = false;
			}
		});
		return todos;
	});
}
