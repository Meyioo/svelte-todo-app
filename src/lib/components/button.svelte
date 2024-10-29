<script lang="ts">
	import type { ButtonType } from '../../model/form.model';

	let {
		type,
		onclick,
		label
	}: { type: ButtonType; onclick: MouseEventHandler<HTMLButtonElement>; label: string } = $props();
</script>

<button
	{type}
	class="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
	{onclick}>{label}</button
>
