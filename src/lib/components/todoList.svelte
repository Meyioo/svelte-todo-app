<script lang="ts">
	import TodoItem from '$lib/components/todoItem.svelte';
	import { derived } from 'svelte/store';
	import { fade } from 'svelte/transition';
	import type { ITodo } from '../../model';
	import type { ITodoListProps } from '../../model/props.model';
	import { SearchStore, TodosStore } from '../../store/+todo.store';

	const { completed = false }: ITodoListProps = $props();

	const todos = derived([TodosStore, SearchStore], ([$Todos, $SearchTerm]) => {
		return $Todos
			.filter((todo: ITodo) => todo.completed === completed)
			.filter((todo: ITodo) =>
				$SearchTerm.length > 0
					? todo.title.toLowerCase().includes($SearchTerm.toLowerCase()) ||
						todo.description.toLowerCase().includes($SearchTerm.toLowerCase())
					: true
			);
	});
</script>

<main>
	{#each $todos as todo (todo.id)}
		<div transition:fade>
			<TodoItem {todo}></TodoItem>
		</div>
	{/each}

	{#if $todos.length === 0}
		<p class="mt-3 text-center text-gray-500">Keine Aufgaben gefunden</p>
	{/if}
</main>
