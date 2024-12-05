<script lang="ts">
	import { Priorities, PriorityLevel } from '$lib/constants/priority.constants';

	let { priority = $bindable() } = $props();

	function selectPriority(p: PriorityLevel): void {
		priority = p;
	}
</script>

{#each Object.values(Priorities) as { level, label, color, activeColor }}
	<button
		type="button"
		class="center relative me-3 inline-block select-none whitespace-nowrap rounded-lg px-3.5 py-2 font-sans text-xs font-bold
			uppercase leading-none text-white last-of-type:me-0 {color} {priority === level ? activeColor : ''}"
		onclick={() => selectPriority(level)}
	>
		<div class="mt-px">{label}</div>
	</button>
{/each}
