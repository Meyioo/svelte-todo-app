<script lang="ts">
	import Todos from '$lib/components/todos.svelte';

	export let completed = true;
</script>

<Todos {completed} />

<style>
</style>
