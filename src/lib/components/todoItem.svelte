<script lang="ts">
	import type { Todo } from '../../model';
	import { toggleTodoCompletion } from '../../store/+store';

	export let todo: Todo;
	export let index: number;
	let selected = false;
</script>

<button onclick={() => toggleTodoCompletion(index)}>
	<div class="flex items-center">
		&#8203;
		<input
			type="checkbox"
			class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
			id="checkbox"
			onclick={() => toggleTodoCompletion(index)}
			bind:checked={selected}
		/>
	</div>
	<div>
		<strong class="font-medium text-gray-900"> {index} {todo.title} </strong>
		<p class="mt-1 text-pretty text-sm text-gray-700">
			{todo.description}
		</p>
	</div>
</button>

<style>
</style>
