<script lang="ts">
	import TodoItem from '$lib/components/todoItem.svelte';
	import type { Todo } from '../../model';
	import { TodosStore } from '../../store/+store';

	let todos: Todo[] = [];
	TodosStore?.subscribe((value) => (todos = value));
</script>

<main>
	{#each todos as todo, index}
		<TodoItem {todo} {index}></TodoItem>
	{/each}
</main>

<style>
</style>
