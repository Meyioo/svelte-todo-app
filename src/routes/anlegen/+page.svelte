<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, Datepicker, Input, Label } from 'flowbite-svelte';
	import { PriorityEnum, type ITodo } from '../../model/todo.model';
	import { addTodo } from '../../store/+todo.store';

	const todo: ITodo = $state({
		id: null,
		title: '',
		description: '',
		completed: false,
		selected: false,
		dueDate: new Date(),
		priority: PriorityEnum.Low
	});

	const priorities = [
		{
			level: PriorityEnum.Low,
			label: 'Gering',
			color: 'bg-green-500',
			activeColor: 'bg-green-700'
		},
		{
			level: PriorityEnum.Medium,
			label: 'Mittel',
			color: 'bg-amber-500',
			activeColor: 'bg-amber-700'
		},
		{
			level: PriorityEnum.High,
			label: 'Hoch',
			color: 'bg-red-500',
			activeColor: 'bg-red-700'
		}
	];

	function isDisabled(): boolean {
		return !todo.title || !todo.description || !todo.dueDate;
	}

	function selectPriority(p: PriorityEnum): void {
		todo.priority = p;
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
		{#each priorities as { level, label, color, activeColor }}
			<button
				type="button"
				class="center relative me-3 inline-block select-none whitespace-nowrap rounded-lg px-3.5 py-2 font-sans text-xs font-bold
			uppercase leading-none text-white last-of-type:me-0 {color} {todo.priority === level
					? activeColor
					: ''}"
				onclick={() => selectPriority(level)}
			>
				<div class="mt-px">{label}</div>
			</button>
		{/each}
	</div>
	<div class="flex items-center justify-between">
		<Button type="button" onclick={submit} disabled={isDisabled()}>Aufgabe anlegen</Button>
	</div>
</form>
