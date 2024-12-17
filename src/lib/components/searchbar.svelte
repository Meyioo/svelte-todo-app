<script>
	import {
		SearchStore,
		sortByCreateDate,
		sortByDueDate,
		sortByPriority,
		sortBySelected
	} from '../../store/+todo.store';

	let isDropdownOpen = $state(false);
</script>

<div class="relative mx-3 mb-3 flex justify-between">
	<input
		type="text"
		id="search"
		placeholder="Suche nach..."
		bind:value={$SearchStore}
		class="me-2 w-full rounded-md border-gray-200 py-2.5 shadow-sm sm:text-sm"
	/>

	<button
		onclick={() => (isDropdownOpen = !isDropdownOpen)}
		id="dropdown-button"
		type="button"
		class="h-12 w-12 rounded-md bg-blue-700 fill-white px-2 py-3 hover:bg-blue-800"
	>
		<svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
			><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
				d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
			/></svg
		>
	</button>
	<div
		id="dropdown-menu"
		class="absolute right-0 top-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
		class:hidden={!isDropdownOpen}
	>
		<div class="p-2 py-2" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
			<button
				onclick={() => (sortByPriority(), (isDropdownOpen = false))}
				class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
				role="menuitem">Priorität</button
			>
			<button
				onclick={() => (sortByDueDate(), (isDropdownOpen = false))}
				class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
				role="menuitem"
			>
				Fälligkeit
			</button>
			<button
				onclick={() => (sortByCreateDate(), (isDropdownOpen = false))}
				class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
				role="menuitem"
			>
				Erstelldatum
			</button>
			<button
				onclick={() => (sortBySelected(), (isDropdownOpen = false))}
				class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
				role="menuitem"
			>
				Auswahl
			</button>
		</div>
	</div>
</div>
