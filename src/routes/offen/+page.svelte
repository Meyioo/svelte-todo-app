<script lang="ts">
	import TodoList from '$lib/components/todoList.svelte';

	export let completed = false;
</script>

<TodoList {completed} />

<style>
</style>
