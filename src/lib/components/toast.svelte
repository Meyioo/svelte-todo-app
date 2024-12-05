<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ToastStore } from '../../store/+toast.store';
</script>

{#if $ToastStore}
	<div
		transition:fade
		class="sticky bottom-16 mx-auto max-w-2xl rounded-md text-sm text-white shadow-lg {$ToastStore.color}"
		role="alert"
	>
		<div class="flex p-4">
			{$ToastStore.message}
		</div>
	</div>
{/if}
