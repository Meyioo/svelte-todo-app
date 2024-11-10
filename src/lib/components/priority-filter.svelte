<script lang="ts">
	import { PriorityEnum } from '../../model';
	import { PriorityFilterStore } from '../../store/+todo.store';

	let priority: PriorityEnum | null;

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
		if (p === priority) {
			priority = null;
			PriorityFilterStore.set(null);
			return;
		}

		priority = p;
		PriorityFilterStore.set(p);
	}
</script>

<div class="mx-3 my-3 flex justify-around">
	{#each priorities as { level, label, color, activeColor }}
		<button
			class="center relative inline-block select-none whitespace-nowrap rounded-lg px-3.5 py-2 font-sans text-xs
			font-bold uppercase leading-none text-white {color} {priority === level ? activeColor : ''}"
			on:click={() => selectPriority(level)}
		>
			<div class="mt-px">{label}</div>
		</button>
	{/each}
</div>
