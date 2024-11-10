<script lang="ts">
	import Todos from '$lib/components/todos.svelte';

	export let completed = false;
</script>

<Todos {completed} />

<style>
</style>
