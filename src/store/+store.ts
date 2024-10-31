import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import type { Todo } from '../model';

export class TodoStore {
	open: Todo[] = [];
	completed: Todo[] = [];
}

// Helper function to sync with localStorage
function createPersistedStore(key: string, initialValue: TodoStore): Writable<TodoStore> {
	if (!browser) {
		return writable(initialValue);
	}

	const storedValue = localStorage.getItem(key);
	const data = storedValue ? JSON.parse(storedValue) : initialValue;
	const store = writable(data);

	// Subscribe to changes and update localStorage
	store.subscribe((value) => localStorage.setItem(key, JSON.stringify(value)));

	return store;
}

// Initialize the store with default values or values from localStorage
export const TodosStore = createPersistedStore('todos', {
	open: [
		{
			title: 'Einkaufen gehen',
			description: 'Milch, Eier, Brot und Gemüse kaufen',
			completed: false,
			selected: false
		},
		{
			title: 'Bachelorarbeit schreiben',
			description: 'Kapitel über Svelte-Framework fertigstellen',
			completed: false,
			selected: false
		},
		{
			title: 'Fitnessstudio besuchen',
			description: '1 Stunde Ausdauer und Krafttraining',
			completed: false,
			selected: false
		}
	],
	completed: []
});

export const SearchStore = writable('');

export function addTodo(todo: Todo): void {
	TodosStore?.update((store) => {
		store.open.push(todo);
		return store;
	});
}

export function toggleTodoCompletion(index: number): void {
	TodosStore?.update((store) => {
		const updatedStore = { ...store };
		updatedStore.open[index].completed = !updatedStore.open[index].completed;
		return updatedStore;
	});
}

export function removeTodo(index: number): void {
	TodosStore?.update((store) => {
		const updatedStore = { ...store };
		updatedStore.open.splice(index, 1);
		return updatedStore;
	});
}

export function selectTodo(todo: Todo): void {
	TodosStore?.update((store) => {
		const storedTodo = store.open.find((t) => todo === t);
		if (storedTodo) {
			storedTodo.selected = !storedTodo.selected;
		}
		const updatedStore = { ...store };
		return updatedStore;
	});
}

export function closeSelectedTodos(): void {
	TodosStore?.update((store) => {
		const updatedStore = { ...store };
		updatedStore.completed = updatedStore.completed.concat(
			updatedStore.open.filter((todo) => todo.selected)
		);
		updatedStore.open = updatedStore.open.filter((todo) => !todo.selected);
		updatedStore.completed.forEach((todo) => (todo.completed = true));

		return updatedStore;
	});
}
