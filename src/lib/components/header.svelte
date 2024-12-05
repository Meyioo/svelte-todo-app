<script lang="ts">
	import type { IHeaderProps } from '../../model';
	import Searchbar from './searchbar.svelte';

	const { title, showSearch = false }: IHeaderProps = $props();
</script>

<header class="sticky top-0 w-full border-b border-gray-200 bg-gray-50">
	<div class="mx-auto max-w-screen-xl px-3 py-6 sm:px-6 lg:px-8">
		<div class="flex justify-between gap-4 md:flex-row md:items-center md:justify-between">
			<div>
				<h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h1>
			</div>
		</div>
	</div>
	{#if showSearch}
		<Searchbar />
	{/if}
</header>
