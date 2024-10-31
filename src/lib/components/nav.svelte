<script>
	import { closeSelectedTodos } from '../../store/+todo.store';
</script>

<div class="fixed bottom-0 w-full pt-5">
	<div class="mx-auto w-full">
		<div class=" bg-white px-7 shadow-lg">
			<div class="flex">
				<div class="group flex-1">
					<a
						href="/offen"
						class="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-400 active:border-indigo-500 active:text-indigo-500"
					>
						<span class="block px-1 pb-2 pt-1">
							<i class="far fa-tasks mb-1 block pt-1 text-2xl"></i>
							<span class="block pb-1 text-xs">Offen</span>
						</span>
					</a>
				</div>
				<div class="group flex-1">
					<a
						href="/abgeschlossen"
						class="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-400 group-hover:border-indigo-500 group-hover:text-indigo-500"
					>
						<span class="block px-1 pb-2 pt-1">
							<i class="far fa-check mb-1 block pt-1 text-2xl"></i>
							<span class="block pb-1 text-xs">Abgeschlossen</span>
						</span>
					</a>
				</div>

				<div class="group flex-1">
					<button
						class="mx-auto flex w-full items-end justify-center border-b-2 border-transparent px-4 pt-2 text-center text-gray-400 group-hover:border-indigo-500 group-hover:text-indigo-500"
						onclick={() => closeSelectedTodos()}
					>
						<span class="block px-1 pb-2 pt-1">
							<i class="far fa-archive mb-1 block pt-1 text-2xl"></i>
							<span class="block pb-1 text-xs">Ausgewählte schließen</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@import url(https://pro.fontawesome.com/releases/v5.10.0/css/all.css);
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');
</style>
