<script lang="ts">
	import { Todo } from '../../model/todo.model';

	let todo: Todo = new Todo('John Clapton', 'asd');
</script>

<fieldset>
	<div class="space-y-2">
		<label
			for="Option1"
			class="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 dark:border-gray-700 dark:hover:bg-gray-900 dark:has-[:checked]:bg-blue-700/10"
		>
			<div class="flex items-center">
				&#8203;
				<input
					type="checkbox"
					class="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
					id="Option1"
				/>
			</div>

			<div>
				<strong class="font-medium text-gray-900 dark:text-white"> {todo.title} </strong>

				<p class="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">
					{todo.description}
				</p>
			</div>
		</label>
	</div>
</fieldset>

<style>
</style>
