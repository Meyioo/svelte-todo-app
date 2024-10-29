<script lang="ts">
	let props = $props();
</script>

<a
	href={props.href}
	class="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
	onclick={props.onclick}>{props.label}</a
>
