<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Todo from '$lib/components/todo.svelte';
	import '../app.css';

	let todos: Todo[] = $state([]);
	let newTodo = $state('');

	function addTodo(): void {
		if (newTodo.trim()) {
			todos.push({ title: newTodo, completed: false });
			newTodo = '';
		}
	}

	function removeTodo(index: number) {
		todos = todos.filter((_, i) => i !== index);
	}
</script>

<main>
	<h1>Todo App</h1>

	<!-- Eingabefeld zur Erstellung einer neuen Aufgabe -->
	<input type="text" bind:value={newTodo} placeholder="Neue Aufgabe hinzufügen" />
	<Button onclick={addTodo} label="Hinzufügen"></Button>

	<!-- Aufgabenliste -->
	{#each todos as todo, index}
		<Todo></Todo>
	{/each}

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
					<strong class="font-medium text-gray-900 dark:text-white"> asdasd</strong>

					<p class="mt-1 text-pretty text-sm text-gray-700 dark:text-gray-200">asdsad</p>
				</div>
			</label>
		</div>
	</fieldset>
</main>

<style>
	/* Einfaches Styling für die Struktur */
	main {
		font-family: Arial, sans-serif;
		max-width: 400px;
		margin: auto;
	}
</style>
