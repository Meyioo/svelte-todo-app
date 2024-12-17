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

<div class="mb-6 md:flex">
	<div class="mb-6 md:mb-0 md:w-1/2">
		<label class="text-grey-darker mb-2 block text-xs" for="grid-first-name"> Titel </label>
		<input
			class="bg-grey-lighter text-grey-darker border-red mb-3 block w-full appearance-none rounded border px-4 py-3"
			id="grid-first-name"
			type="text"
			placeholder="Titel eingeben"
			bind:value={todo.title}
		/>
	</div>
	<div class="mb-6 md:w-1/2">
		<label class="text-grey-darker mb-2 block text-xs" for="grid-last-name"> Beschreibung </label>
		<input
			class="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border px-4 py-3"
			id="grid-last-name"
			type="text"
			placeholder="Beschreibung eingeben"
			bind:value={todo.description}
		/>
	</div>

	<div class="mb-6 md:w-1/2">
		<label class="text-grey-darker mb-2 block text-xs" for="grid-last-name">
			Fälligkeitsdatum
		</label>
		<input
			class="bg-grey-lighter text-grey-darker border-grey-lighter block w-full appearance-none rounded border px-4 py-3"
			id="grid-last-name"
			type="date"
			bind:value={todo.dueDate}
		/>
	</div>

	<div class="mb-6 md:w-1/2">
		<label class="text-grey-darker mb-2 block text-xs" for="grid-last-name"> Priorität </label>
		<Priority bind:priority={todo.priority} />
	</div>

	<button
		type="button"
		class="rounded-lg bg-blue-700 p-2 px-4 text-white disabled:bg-blue-500"
		onclick={submit}
		disabled={formIsInvalid()}>Aufgabe anlegen</button
	>
</div>
