<script>
	import { Search } from 'flowbite-svelte';
	import { SearchStore } from '../../store/+todo.store';
</script>

<form class="mx-3 mb-3 flex gap-2">
	<Search size="md" placeholder="Suche nach..." class="bg-white" bind:value={$SearchStore} />
</form>
