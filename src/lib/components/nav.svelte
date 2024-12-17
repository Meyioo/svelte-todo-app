<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	const activeUrl = $state(page);
</script>

<div class="sticky bottom-0 w-full border">
	<div class="mx-auto w-full">
		<div class=" bg-white px-7 shadow-lg">
			<div class="flex">
				<div class="group flex-1">
					<a
						href="{base}/"
						class="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-500"
					>
						<span class="block px-1 pb-2 pt-1">
							<svg
								class="mx-auto h-6 w-6 {$activeUrl.url.pathname === '/'
									? 'fill-blue-800'
									: 'fill-gray-800'}"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512"
								><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
									d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
								/></svg
							>
							<span class="block pb-1 text-xs">Offen</span>
						</span>
					</a>
				</div>

				<div class="group flex-1">
					<a
						href="{base}/abgeschlossen"
						class="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-500"
					>
						<span
							class="block px-1 pb-2 pt-1 {$activeUrl.url.pathname === '/abgeschlossen'
								? 'fill-blue-800'
								: 'fill-gray-800'}"
						>
							<svg class="mx-auto h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
								><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
									d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM305 273L177 401c-9.4 9.4-24.6 9.4-33.9 0L79 337c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L271 239c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
								/></svg
							>
							<span class="block pb-1 text-xs">Abgeschlossen</span>
						</span>
					</a>
				</div>

				<div class="group flex-1">
					<a
						href="{base}/anlegen"
						class="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-500"
					>
						<span class="block px-1 pb-2 pt-1">
							<svg
								class="mx-auto h-6 w-6 {$activeUrl.url.pathname === '/anlegen'
									? 'fill-blue-800'
									: 'fill-gray-800'}"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
									d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
								/></svg
							>
							<span class="block pb-1 text-xs">Anlegen</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
