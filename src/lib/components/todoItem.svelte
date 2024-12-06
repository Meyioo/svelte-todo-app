<script lang="ts">
	import { Checkbox } from 'flowbite-svelte';
	import type { ITodoItemProps } from '../../model';
	import { selectTodo } from '../../store/+todo.store';
	import TodoItemPriority from './todoItem-priority.svelte';

	const { todo }: ITodoItemProps = $props();

	function toggleSelection(): void {
		selectTodo(todo);
	}
</script>

<button class="w-full border-b-2 p-2 text-left" onclick={toggleSelection}>
	<div class="flex">
		{#if !todo.completed}
			<div class="me-4 ms-2 flex items-center">
				<Checkbox onclick={() => toggleSelection()} checked={todo.selected}></Checkbox>
			</div>
		{/if}
		<div>
			<strong class="font-medium text-gray-900"> {todo.title} </strong>
			<p class="mt-1 text-pretty text-sm text-gray-700">
				{todo.description}
			</p>
		</div>
		<div class="ms-auto">
			<p class="text-pretty text-right text-sm text-gray-700">
				Fälligkeitsdatum: <br />
				{new Date(todo.dueDate).toLocaleDateString()}
			</p>
			<div class="text-end">
				<TodoItemPriority priority={todo.priority}></TodoItemPriority>
			</div>
		</div>
	</div>
</button>

<style>
</style>
