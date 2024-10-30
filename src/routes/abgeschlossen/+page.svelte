<script lang="ts">
	import TodoItem from '$lib/components/todoItem.svelte';
	import type { Todo } from '../../model';
	import { TodosStore } from '../../store/+store';

	let completedTodos: Todo[] = [];
	TodosStore?.subscribe((value) => (completedTodos = value.completed));
</script>

<main>
	{#each completedTodos as todo}
		<TodoItem {todo}></TodoItem>
	{/each}
</main>

<style>
</style>
