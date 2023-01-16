<script>
	import { text } from 'svelte/internal';
	import BookCover from './BookCover.svelte';
	import Tabs from './Tabs.svelte';
</script>

<div class="bg-zinc-800 lg:pb-2">
	<div class="max-w-screen-lg mx-auto">
		<div
			class="grid md:grid-rows-6 md:grid-cols-12 md:grid-flow-col md:gap-x-12 md:pl-8 md:gap-y-4"
		>
			<div
				class=" md:row-span-6 md:col-span-3 flex flex-col"
			>
				<BookCover />
				<div class="flex justify-evenly text-zinc-200 pb-6">
					<p>watched</p>
					<p>saved</p>
					<p>review</p>
				</div>
				<!-- <div
					class="w-2/3 mx-auto rounded-sm border border-zinc-400"
				>
					<div
						class="bg-zinc-600 flex justify-between py-2 px-2 text-zinc-200"
					>
						<p
							class=" text-center  text-sm uppercase self-center"
						>
							Where to Read
						</p>
						<p>Sample</p>
					</div>
					<div
						class="grid grid-cols-1 divide-y text-zinc-300 divide-x-0 border-spacing-1"
					>
						<p>Amazon</p>
						<p>Amazon</p>
						<p>Amazon</p>
						<p>Amazon</p>
						<p>Amazon</p>
						<p>Amazon</p>
					</div> 
				</div>-->
			</div>
			<div class=" md:col-span-9 ">
				<p class="font-serif text-4xl text-zinc-200">
					Infinite Jest by David Foster Wallace
				</p>
				<p class="text-zinc-200 text-lg">
					1996 by David Foster Wallace
				</p>
			</div>
			<div
				class="md:row-span-2 md:col-span-5 text-zinc-300"
			>
				Infinite Jest is a 1996 novel by American writer
				David Foster Wallace. Categorized as an encyclopedic
				novel, Infinite Jest is featured in TIME magazine's
				list of the 100 best English-language novels
				published between 1923 and 2005. The novel has an
				unconventional narrative structure and includes...
			</div>
			<div class="md:row-span-3 md:col-span-5 ">
				<div class="text-zinc-300">
					<Tabs />
				</div>
			</div>
			<div class="md:row-span-3 md:col-span-3 bg-zinc-200">
				05
			</div>
			<div class="md:row-span-1 md:col-span-3 bg-zinc-200">
				06
			</div>
		</div>
	</div>
</div>
