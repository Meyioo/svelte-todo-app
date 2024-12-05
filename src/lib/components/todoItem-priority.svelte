<script lang="ts">
	import { Priorities, type PriorityLevel } from '$lib/constants/priority.constants';

	const { priority }: { priority: PriorityLevel } = $props();

	const { label, color } = Priorities[priority];
</script>

<button
	type="button"
	class="center relative me-3 inline-block select-none whitespace-nowrap rounded-lg px-2 py-1 font-sans text-xs font-bold
			 leading-none text-white last-of-type:me-0 {color}"
>
	<div class="mt-px">{label}</div>
</button>
