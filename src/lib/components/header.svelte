<script lang="ts">
	import { Button, Indicator } from 'flowbite-svelte';
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
				<Button size="xs" onclick={() => completeSelectedTodos()}>
					<Indicator
						color="none"
						class="me-2 bg-primary-200 text-xs font-semibold text-primary-800"
						size="lg">{$selectedCount}</Indicator
					>
					Abschließen</Button
				>
			{/if}
		</div>
	</div>
	{#if showSearch}
		<Searchbar />
	{/if}
</header>
