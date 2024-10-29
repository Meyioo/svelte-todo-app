<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import { Todo } from '../../model';
	import { addTodo, todos } from '../../store/+store';
	todos;
	const todo: Todo = $state({ title: '', description: '', completed: false });
</script>

<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
	<form action="#" class="mx-auto mb-0 mt-4 max-w-md space-y-4">
		<div>
			<label for="title" class="sr-only">Titel</label>

			<div class="relative">
				<input
					type="text"
					name="title"
					class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
					placeholder="Titel eingeben"
					bind:value={todo.title}
				/>
			</div>
		</div>

		<div>
			<label for="description" class="sr-only">Beschreibung</label>

			<div class="relative">
				<input
					type="text"
					name="description"
					class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
					placeholder="Beschreibung hinzufügen"
					bind:value={todo.description}
				/>
			</div>
		</div>

		<div class="flex items-center justify-between">
			<Button label="Aufgabe anlegen" type="submit" onclick={addTodo(todo)}></Button>
		</div>
	</form>
</div>
