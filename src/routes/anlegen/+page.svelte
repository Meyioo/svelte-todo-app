<script lang="ts">
	import { goto } from '$app/navigation';
	import Priority from '$lib/components/priority.svelte';
	import { PriorityLevel } from '$lib/constants/priority.constants';
	import { Button, Datepicker, Input, Label } from 'flowbite-svelte';
	import type { ITodo } from '../../model';
	import { addTodo } from '../../store/+todo.store';

	const todo: ITodo = $state({
		id: null,
		title: '',
		description: '',
		completed: false,
		selected: false,
		dueDate: new Date(),
		priority: PriorityLevel.Low
	});

	function formIsInvalid(): boolean {
		return !todo.title || !todo.description || !todo.dueDate;
	}

	function submit(): void {
		addTodo(todo);
		goto('/');
	}
</script>

<form class="grid gap-6 md:grid-cols-2">
	<div>
		<Label for="title" class="mb-2">Titel</Label>
		<Input id="title" placeholder="Titel eingeben" bind:value={todo.title} required />
	</div>
	<div>
		<Label for="description" class="mb-2">Beschreibung</Label>
		<Input
			id="description"
			placeholder="Beschreibung eingeben"
			bind:value={todo.description}
			required
		/>
	</div>
	<div>
		<Label for="dueDate" class="mb-2">Fälligkeitsdatum</Label>
		<Datepicker bind:value={todo.dueDate} required />
	</div>
	<div>
		<Label class="mb-2">Priorität</Label>
		<Priority bind:priority={todo.priority} />
	</div>
	<div class="flex items-center justify-between">
		<Button type="button" onclick={submit} disabled={formIsInvalid()}>Aufgabe anlegen</Button>
	</div>
</form>
