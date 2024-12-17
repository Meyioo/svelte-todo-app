<script lang="ts">
	import Priority from '$lib/components/priority.svelte';
	import type { ITodo } from '../../model';
	import { addTodo } from '../../store/+todo.store';

	const todo: ITodo = $state({
		id: null,
		title: '',
		description: '',
		completed: false,
		selected: false,
		createDate: new Date(),
		dueDate: null,
		priority: null
	});

	function formIsInvalid(): boolean {
		return !todo.title || !todo.description || !todo.dueDate || !todo.priority;
	}

	function submit(): void {
		addTodo(todo);
	}
</script>

<div class="grid">
	<div class="mb-6 md:w-1/2">
		<label class="mb-2 block" for="title"> Titel </label>
		<input
			class="block w-full rounded border-gray-300 px-4 py-3"
			id="title"
			type="text"
			placeholder="Titel eingeben"
			bind:value={todo.title}
		/>
	</div>
	<div class="mb-6 md:w-1/2">
		<label class="mb-2 block" for="description"> Beschreibung </label>
		<input
			class="block w-full rounded border-gray-300 px-4 py-3"
			id="description"
			type="text"
			placeholder="Beschreibung eingeben"
			bind:value={todo.description}
		/>
	</div>

	<div class="mb-6 md:w-1/2">
		<label class=" mb-2 block" for="dueDate"> Fälligkeitsdatum </label>
		<input
			class="block w-full rounded border-gray-300 px-4 py-3"
			id="dueDate"
			type="date"
			bind:value={todo.dueDate}
		/>
	</div>

	<div class="mb-6 md:w-1/2">
		<label class="mb-2 block" for="priority"> Priorität </label>
		<Priority bind:priority={todo.priority} />
	</div>

	<button
		type="button"
		class="w-max rounded-lg bg-blue-700 p-2 px-4 text-white disabled:bg-blue-500"
		onclick={submit}
		disabled={formIsInvalid()}>Aufgabe anlegen</button
	>
</div>
