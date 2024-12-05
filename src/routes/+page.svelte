<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import TodoList from '$lib/components/todoList.svelte';

	const completed = false;
</script>

<div>
	<Header title="Offen" showSearch={true} showCompleteBtn={true} />

	<TodoList {completed} />
</div>

<style>
</style>
