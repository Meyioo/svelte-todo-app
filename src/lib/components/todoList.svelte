<script lang="ts">
	import TodoItem from '$lib/components/todoItem.svelte';
	import { derived } from 'svelte/store';
	import type { Todo } from '../../model';
	import type { ITodoListProps } from '../../model/props.model';
	import { PriorityFilterStore, SearchStore, TodosStore } from '../../store/+todo.store';

	const { completed = false }: ITodoListProps = $props();

	const todos = derived(
		[TodosStore, SearchStore, PriorityFilterStore],
		([$TodosStore, $SearchStore, $PriorityFilterStore]) => {
			const todos = completed ? $TodosStore.completed : $TodosStore.open;

			return todos.filter((todo: Todo) => {
				const matchesSearch =
					$SearchStore.length === 0 ||
					todo.title.toLowerCase().includes($SearchStore.toLowerCase()) ||
					todo.description.toLowerCase().includes($SearchStore.toLowerCase());

				const matchesPriority = !$PriorityFilterStore || todo.priority === $PriorityFilterStore;

				return matchesSearch && matchesPriority;
			});
		}
	);
</script>

<main>
	{#each $todos as todo}
		<TodoItem {todo}></TodoItem>
	{/each}

	{#if $todos.length === 0}
		<p class="mt-3 text-center text-gray-500">Keine Aufgaben gefunden</p>
	{/if}
</main>

<style>
</style>
