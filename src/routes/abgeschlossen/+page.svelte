<script lang="ts">
	import TodoItem from '$lib/components/todoItem.svelte';
	import type { Todo } from '../../model';
	import { SearchStore, TodosStore } from '../../store/+store';

	let completedTodos: Todo[] = [];
	let search = '';
	TodosStore?.subscribe((value) => (completedTodos = value.completed));
	SearchStore?.subscribe((value) => (search = value));

	$: filteredTodos =
		search.length > 0
			? completedTodos.filter(
					(todo) => todo.title.includes(search) || todo.description.includes(search)
				)
			: completedTodos;
</script>

<main>
	{#each filteredTodos as todo}
		<TodoItem {todo}></TodoItem>
	{/each}
</main>

<style>
</style>
