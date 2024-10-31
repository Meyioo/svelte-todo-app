<script lang="ts">
	import type { IButtonLinkProps } from '../../model';

	let { href, label }: IButtonLinkProps = $props();
</script>

<a
	{href}
	class="inline-block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
	>{label}
</a>
