<script lang="ts">
	import TodoItem from '$lib/components/todoItem.svelte';
	import type { Todo } from '../../model';
	import { SearchStore, TodosStore } from '../../store/+store';

	let todos: Todo[] = [];
	let search = '';
	TodosStore?.subscribe((value) => (todos = value.open));
	SearchStore?.subscribe((value) => (search = value));

	$: filteredTodos =
		search.length > 0
			? todos.filter((todo) => todo.title.includes(search) || todo.description.includes(search))
			: todos;
</script>

<main>
	{#each filteredTodos as todo}
		<TodoItem {todo}></TodoItem>
	{/each}
</main>

<style>
</style>
