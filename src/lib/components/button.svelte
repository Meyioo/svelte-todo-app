<script lang="ts">
	import type { IButtonProps } from '../../model';

	let { type, onclick, label }: IButtonProps = $props();
</script>

<button
	{type}
	class="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
	{onclick}
	>{label}
</button>
