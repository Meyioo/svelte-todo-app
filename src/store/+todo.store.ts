import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';
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
export const TodosStore = createPersistedStore('todos', [
	{
		id: 1,
		title: 'Einkaufen gehen',
		description: 'Milch, Eier, Brot und Gemüse kaufen',
		completed: false,
		selected: false
	},
	{
		id: 2,
		title: 'Bachelorarbeit schreiben',
		description: 'Kapitel über Svelte-Framework fertigstellen',
		completed: false,
		selected: false
	},
	{
		id: 3,
		title: 'Fitnessstudio besuchen',
		description: '1 Stunde Ausdauer und Krafttraining',
		completed: false,
		selected: false
	},

	{
		id: 4,
		title: 'Einkaufen gehen',
		description: 'Lebensmittel und Haushaltswaren besorgen',
		completed: false,
		selected: false
	},
	{
		id: 5,
		title: 'Arzttermin wahrnehmen',
		description: 'Jährliche Gesundheitsuntersuchung',
		completed: false,
		selected: false
	},
	{
		id: 6,
		title: 'E-Mails bearbeiten',
		description: 'Alle wichtigen E-Mails durchgehen und beantworten',
		completed: false,
		selected: false
	},
	{
		id: 7,
		title: 'Projektbericht schreiben',
		description: 'Fortschrittsbericht für das aktuelle Projekt erstellen',
		completed: false,
		selected: false
	},
	{
		id: 8,
		title: 'Wohnung putzen',
		description: 'Staubsaugen und Oberflächen abwischen',
		completed: false,
		selected: false
	},
	{
		id: 9,
		title: 'Freunde treffen',
		description: 'Treffen zum Abendessen vereinbaren',
		completed: false,
		selected: false
	},
	{
		id: 10,
		title: 'Rechnung bezahlen',
		description: 'Telefon- und Internetrechnung begleichen',
		completed: false,
		selected: false
	},
	{
		id: 11,
		title: 'Buch lesen',
		description: 'Kapitel 4 des aktuellen Buches durchlesen',
		completed: false,
		selected: false
	},
	{
		id: 12,
		title: 'Joggen gehen',
		description: '30 Minuten joggen im Park',
		completed: false,
		selected: false
	},
	{
		id: 13,
		title: 'Familie anrufen',
		description: 'Kurzes Gespräch mit den Eltern führen',
		completed: false,
		selected: false
	}
]);

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
