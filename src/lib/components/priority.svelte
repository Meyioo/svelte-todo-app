<script lang="ts">
	import { PriorityEnum, type ITodo } from '../../model/todo.model';

	const { todo }: { todo: ITodo } = $props();

	const priorities = [
		{
			level: PriorityEnum.Low,
			label: 'Gering',
			color: 'bg-green-500',
			activeColor: 'bg-green-700'
		},
		{
			level: PriorityEnum.Medium,
			label: 'Mittel',
			color: 'bg-amber-500',
			activeColor: 'bg-amber-700'
		},
		{
			level: PriorityEnum.High,
			label: 'Hoch',
			color: 'bg-red-500',
			activeColor: 'bg-red-700'
		}
	];

	function selectPriority(p: PriorityEnum): void {
		todo.priority = p;
	}
</script>

{#each priorities as { level, label, color, activeColor }}
	<button
		type="button"
		class="center relative me-3 inline-block select-none whitespace-nowrap rounded-lg px-3.5 py-2 font-sans text-xs font-bold
			uppercase leading-none text-white last-of-type:me-0 {color} {todo.priority === level
			? activeColor
			: ''}"
		onclick={() => selectPriority(level)}
	>
		<div class="mt-px">{label}</div>
	</button>
{/each}
