<script>
	import { page } from '$app/stores';
</script>

<!-- break text -->
<div
	class="bg-gradient-to-b from-zinc-700 to-zinc-800 z-0 pt-8 "
>
	<div>
		<div class="max-w-screen-lg px-4 md:px-8 mx-auto">
			<div
				class="flex flex-col lg:flex-row lg:justify-center items-center mb-0 font-thin"
			>
				<h2
					class="text-zinc-400 text-2xl lg:text-3xl  text-center mb-2"
				>
					Welcome back, <a
						href="/"
						class=" text-zinc-200 underline underline-offset-8 decoration-1 decoration-zinc-400 hover:decoration-zinc-200 transition duration-200"
						>{$page.data.session?.user?.name}.</a
					> Here's what we've been watching…
				</h2>
			</div>
			<!-- <div
				class="flex flex-col lg:flex-row lg:justify-center items-center mb-0 font-thin"
			>
				<h2
					class="text-gray-400 text-lg lg:text-md  text-center mb-0"
				>
					This homepage will become customized as you <a
						href="/"
						class=" text-zinc-200 hover:text-blue-400"
						>follow active members</a
					> on Letterboxd.
				</h2>
			</div> -->
		</div>
	</div>
</div>
