<script lang="ts">
	import TodoItem from '$lib/components/todoItem.svelte';
	import { derived } from 'svelte/store';
	import type { Todo } from '../../model';
	import { SearchStore, TodosStore } from '../../store/+todo.store';

	export let completed = false;

	// abgeleiteter Store zur Filterung der Todos basierend auf dem Suchtext und dem `completed`-Status
	const filteredTodos = derived([TodosStore, SearchStore], ([$TodosStore, $SearchStore]) => {
		const todos = completed ? $TodosStore.completed : $TodosStore.open;
		return $SearchStore.length > 0
			? todos.filter(
					(todo: Todo) =>
						todo.title.toLowerCase().includes($SearchStore.toLowerCase()) ||
						todo.description.toLowerCase().includes($SearchStore.toLowerCase())
				)
			: todos;
	});
</script>

<main>
	{#each $filteredTodos as todo}
		<TodoItem {todo}></TodoItem>
	{/each}
</main>

<style>
</style>
