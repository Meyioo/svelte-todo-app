import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
import type { Todo } from '../model';

// Helper function to sync with localStorage
function createPersistedStore(key: string, initialValue: Todo[]): Writable<Todo[]> | null {
	if (!browser) {
		return null;
	}

	const storedValue = localStorage.getItem(key);
	const data = storedValue ? JSON.parse(storedValue) : initialValue;
	const store = writable(data);

	// Subscribe to changes and update localStorage
	store.subscribe((value) => localStorage.setItem(key, JSON.stringify(value)));

	return store;
}

// Initialize the store with default values or values from localStorage
export const TodosStore = createPersistedStore('todos', [
	{
		title: 'Einkaufen gehen',
		description: 'Milch, Eier, Brot und Gemüse kaufen',
		completed: false
	},
	{
		title: 'Bachelorarbeit schreiben',
		description: 'Kapitel über Svelte-Framework fertigstellen',
		completed: false
	},
	{
		title: 'Fitnessstudio besuchen',
		description: '1 Stunde Ausdauer und Krafttraining',
		completed: true
	}
]);

export function addTodo(todo: Todo): void {
	TodosStore?.update((items) => [...items, todo]);
}

export function toggleTodoCompletion(index: number): void {
	console.log('toggleTodoCompletion', index);
	TodosStore?.update((items) => {
		const updated = [...items];
		updated[index].completed = !updated[index].completed;
		return updated;
	});
}

export function removeTodo(index: number): void {
	console.log('removeTodo', index);

	TodosStore?.update((items) => {
		const updated = [...items];
		updated.splice(index, 1);
		return updated;
	});
}
