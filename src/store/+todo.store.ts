import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import { DefaultTodos } from '../lib/constants/todos.constants';
import type { ITodo } from '../model/todo.model';
import { showToast } from './+toast.store';

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

	showToast({
		message: 'Aufgabe erfolgreich angelegt!',
		duration: 3000,
		color: 'bg-green-500'
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

	showToast({
		message: 'Aufgaben wurden abgeschlossen!',
		color: 'bg-green-500',
		duration: 3000
	});
}

let priorityAscendingOrder = true;

export function sortByPriority(): void {
	const priorityOrder = { low: 1, medium: 2, high: 3 };
	TodosStore.update((todos) => {
		todos.sort((a, b) => {
			const comparison = priorityOrder[a.priority] - priorityOrder[b.priority];
			return priorityAscendingOrder ? comparison : -comparison;
		});
		priorityAscendingOrder = !priorityAscendingOrder;
		return todos;
	});
}

let dueDateAscendingOrder = true;

export function sortByDueDate(): void {
	TodosStore.update((todos) => {
		todos.sort((a, b) => {
			const dateA = new Date(a.dueDate).getTime();
			const dateB = new Date(b.dueDate).getTime();
			return dueDateAscendingOrder ? dateA - dateB : dateB - dateA;
		});
		dueDateAscendingOrder = !dueDateAscendingOrder;
		return todos;
	});
}

let createDateAscendingOrder = true;

export function sortByCreateDate(): void {
	TodosStore.update((todos) => {
		todos.sort((a, b) => {
			const dateA = new Date(a.createDate).getTime();
			const dateB = new Date(b.createDate).getTime();
			return createDateAscendingOrder ? dateA - dateB : dateB - dateA;
		});
		createDateAscendingOrder = !createDateAscendingOrder;
		return todos;
	});
}

let selectedAscendingOrder = true;

export function sortBySelected(): void {
	TodosStore.update((todos) => {
		todos.sort((a, b) => {
			let comparison: number;
			if (a.selected === b.selected) {
				comparison = 0;
			} else {
				comparison = a.selected ? -1 : 1;
			}
			return selectedAscendingOrder ? comparison : -comparison;
		});
		selectedAscendingOrder = !selectedAscendingOrder;
		return todos;
	});
}
