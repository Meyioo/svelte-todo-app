<script>
	import FilterOutline from 'flowbite-svelte-icons/FilterOutline.svelte';
	import Button from 'flowbite-svelte/Button.svelte';
	import Dropdown from 'flowbite-svelte/Dropdown.svelte';
	import DropdownItem from 'flowbite-svelte/DropdownItem.svelte';
	import Search from 'flowbite-svelte/Search.svelte';
	import {
		SearchStore,
		sortByCreateDate,
		sortByDueDate,
		sortByPriority,
		sortBySelected
	} from '../../store/+todo.store';
</script>

<form class="mx-3 mb-3 flex gap-2">
	<Search size="md" placeholder="Suche nach..." class="bg-white" bind:value={$SearchStore} />
	<Button class="p-2">
		<FilterOutline class="h-6 w-6" />
	</Button>
	<Dropdown>
		<DropdownItem onclick={() => sortByPriority()}>Priorität</DropdownItem>
		<DropdownItem onclick={() => sortByDueDate()}>Fälligkeitsdatum</DropdownItem>
		<DropdownItem onclick={() => sortByCreateDate()}>Erstellungsdatum</DropdownItem>
		<DropdownItem onclick={() => sortBySelected()}>Auswahl</DropdownItem>
	</Dropdown>
</form>
