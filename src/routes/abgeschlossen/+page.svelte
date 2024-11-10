<script lang="ts">
	import TodoList from '$lib/components/todoList.svelte';

	export let completed = true;
</script>

<TodoList {completed} />

<style>
</style>
