<script lang="ts">
	import { derived } from 'svelte/store';
	import type { IHeaderProps } from '../../model';
	import { completeSelectedTodos, TodosStore } from '../../store/+todo.store';
	import Searchbar from './searchbar.svelte';

	const { title, showSearch = false, showCompleteBtn = false }: IHeaderProps = $props();
	const selectedCount = derived(
		TodosStore,
		($Todos) => $Todos.filter((todo) => todo.selected).length
	);
</script>

<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-gray-50">
	<div class="mx-auto max-w-screen-xl px-3 py-6 sm:px-6 lg:px-8">
		<div class="flex justify-between gap-4 md:flex-row md:items-center md:justify-between">
			<div>
				<h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
			</div>
			{#if showCompleteBtn && $selectedCount > 0}
				<button
					class="rounded-md bg-blue-700 px-3 py-1 text-white hover:bg-blue-800"
					onclick={() => completeSelectedTodos()}
				>
					<span class="text-primary-800 me-2 rounded-full bg-white px-2 font-semibold text-gray-700"
						>{$selectedCount}</span
					>
					Abschließen</button
				>
			{/if}
		</div>
	</div>
	{#if showSearch}
		<Searchbar />
	{/if}
</header>
