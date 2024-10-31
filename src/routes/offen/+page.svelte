<script lang="ts">
	import TodoItem from '$lib/components/todoItem.svelte';
	import { onDestroy } from 'svelte';
	import type { Unsubscriber } from 'svelte/motion';
	import type { Todo } from '../../model';
	import { SearchStore, TodosStore } from '../../store/+store';

	let todos: Todo[] = [];
	let search = '';
	const subscriptions: Unsubscriber[] = [];

	subscriptions.push(TodosStore?.subscribe((value) => (todos = value.open)));
	subscriptions.push(SearchStore?.subscribe((value) => (search = value)));

	$: filteredTodos =
		search.length > 0
			? todos.filter((todo) => todo.title.includes(search) || todo.description.includes(search))
			: todos;

	onDestroy(() => subscriptions.forEach((subscription) => subscription()));
</script>

<main>
	{#each filteredTodos as todo}
		<TodoItem {todo}></TodoItem>
	{/each}
</main>

<style>
</style>
