<script lang="ts">
	import type { ITodoItemProps } from '../../model';
	import { selectTodo } from '../../store/+todo.store';

	let { todo }: ITodoItemProps = $props();

	function toggleSelection(): void {
		selectTodo(todo);
	}
</script>

<div class="flex w-full border-b-2 p-2 text-left">
	{#if !todo.completed}
		<div class="me-4 ms-2 flex items-center">
			<input
				type="checkbox"
				class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
				id="checkbox"
				onclick={() => toggleSelection()}
				checked={todo.selected}
			/>
		</div>
	{/if}
	<div>
		<strong class="font-medium text-gray-900"> {todo.title} </strong>
		<p class="mt-1 text-pretty text-sm text-gray-700">
			{todo.description}
		</p>
	</div>
</div>

<style>
</style>
