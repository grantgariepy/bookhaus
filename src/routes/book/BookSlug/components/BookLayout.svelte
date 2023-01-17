<script>
	import ActionBox from './ActionBox.svelte';
	import ActivityFromFriends from './ActivityFromFriends.svelte';
	import BookCover from './BookCover.svelte';
	import BookDetails from './BookDetails.svelte';
	import Ratings from './Ratings.svelte';
	import Tabs from './Tabs.svelte';
	import TitleAuthorYear from './TitleAuthorYear.svelte';
	import WhereToReadBox from './WhereToReadBox.svelte';
</script>

<div class="bg-zinc-800">
	<div class="max-w-screen-lg mx-auto">
		<div
			class="flex flex-col md:flex-row gap-12 px-12 md:h-screen"
		>
			<div class="md:w-1/4 self-start md:sticky md:top-3">
				<BookCover />
				<WhereToReadBox />
			</div>
			<div class="md:w-3/4 flex flex-col">
				<TitleAuthorYear />
				<div class="flex flex-col md:flex-row gap-20 pt-6">
					<div class="md:w-3/5 ">
						<BookDetails />
					</div>
					<div class="md:w-2/5 ">
						<ActionBox />
						<Ratings />
					</div>
				</div>
				<ActivityFromFriends />
			</div>
		</div>
	</div>
</div>

<div class="bg-zinc-800 ">
	<div class="max-w-screen-lg mx-auto">
		<div
			class="grid md:grid-rows-5 md:grid-cols-12 md:grid-flow-col md:gap-x-12 md:pl-8 md:gap-y-4"
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
				<div class="  rounded border border-zinc-600">
					<div
						class="rounded-t bg-zinc-600 flex justify-between py-2 px-2 text-zinc-200"
					>
						<p
							class=" text-center tracking-widest text-xs uppercase self-center font-thin"
						>
							Where to Read
						</p>
						<a
							href="/"
							class=" text-center text-xs self-center font-thin"
						>
							Sample
						</a>
					</div>
					<div
						class="grid grid-cols-1 divide-y text-zinc-300 divide-x-0 divide-zinc-600 border-spacing-1 font-thin"
					>
						<a href="/" class="py-1 pl-2">Amazon US</a>
						<a href="/" class="py-1 pl-2">iTunes</a>
						<a href="/" class="py-1 pl-2">Google Play</a>
						<a
							href="/"
							class="py-2 pl-2 text-blue-400 text-sm"
						>
							All Services...
						</a>
					</div>
				</div>
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
				class="md:row-span-2 md:col-span-5 text-zinc-400"
			>
				Infinite Jest is a 1996 novel by American writer
				David Foster Wallace. Categorized as an encyclopedic
				novel, Infinite Jest is featured in TIME magazine's
				list of the 100 best English-language novels
				published between 1923 and 2005. The novel has an
				unconventional narrative structure and includes...
			</div>
			<div class="md:row-span-3 md:col-span-5 ">
				<div class="text-zinc-400">
					<Tabs />
				</div>
			</div>
			<!-- action block -->
			<div class="md:row-span-3 md:col-span-3">
				<div
					class="bg-zinc-500 rounded flex flex-col items-center  "
				>
					<div
						class="min-h-min flex flex-row min-w-full justify-evenly  py-3 border-b border-zinc-700"
					>
						<a href="/" class="flex flex-col group">
							<svg
								fill="currentColor"
								class="w-10 h-10 text-zinc-300 self-center group-hover:text-green-400 transition duration-150"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512.001 512.001"
							>
								<path
									d="M256,192.012c-35.313,0-64.002,28.688-64.002,64s28.689,63.969,64.002,63.969s64-28.656,64-63.969 S291.313,192.012,256,192.012z"
								/>
								<path
									d="M505.381,236.512c-56.082-72.938-125.065-140.438-249.225-140.5h-0.016h-0.016c0-0.031-0.094-0.031-0.125,0 c0,0-0.078,0-0.109,0c-0.016,0-0.016,0-0.016,0h-0.016c-0.016,0-0.016,0-0.016,0C131.684,96.075,62.7,163.575,6.62,236.512 c-8.826,11.5-8.826,27.5,0,39c56.08,72.938,125.065,140.438,249.225,140.5c0,0,0,0,0.016,0h0.016c0,0,0,0,0.016,0h0.016 c0.016,0,0.094,0,0.094,0c0.016,0,0.031,0,0.064,0h0.029h0.016h0.016h0.016h0.016c0.109,0,0.219,0,0.344,0 c0.141-0.031,0.281-0.031,0.422,0c123.66-0.336,192.486-67.719,248.459-140.5C514.207,264.012,514.207,248.012,505.381,236.512z M256.094,352.012h-0.018h-0.012h-0.018h-0.031H256c-0.031,0-0.065,0-0.065,0h-0.014c0,0,0,0-0.016,0 c-52.879-0.063-95.908-43.125-95.908-96s43.029-95.938,95.908-96c0.029,0,0.078,0,0.141,0h0.047 c52.877,0.063,95.906,43.125,95.906,96S308.971,351.95,256.094,352.012z"
								/>
							</svg>
							<p class="text-sm text-zinc-300">Watched</p>
						</a>
						<a href="/" class="flex flex-col group">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-8 h-10 text-zinc-300 self-center group-hover:text-orange-400 transition duration-150"
								viewBox="0 0 512 512"
								fill="currentColor"
							>
								<path
									class="st0"
									d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391 c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547 l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"
								/>
							</svg>
							<p class="text-sm text-zinc-300">Liked</p>
						</a>
						<a href="/" class="flex flex-col group">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-8 h-10 text-zinc-300 self-center group-hover:text-orange-400 transition duration-150"
								viewBox="0 0 512 512"
								fill="currentColor"
							>
								<path
									class="st0"
									d="M473.984,74.248c-50.688-50.703-132.875-50.703-183.563,0c-17.563,17.547-29.031,38.891-34.438,61.391 c-5.375-22.5-16.844-43.844-34.406-61.391c-50.688-50.703-132.875-50.703-183.563,0c-50.688,50.688-50.688,132.875,0,183.547 l217.969,217.984l218-217.984C524.672,207.123,524.672,124.936,473.984,74.248z"
								/>
							</svg>
							<p class="text-sm text-zinc-300">Watchlist</p>
						</a>
					</div>
					<div
						class="min-h-min flex flex-row min-w-full justify-evenly  py-3 border-b border-zinc-700"
					>
						<a href="/" class="flex flex-col group">
							<p class="text-sm text-zinc-300 text-center">
								Rated
							</p>
							<div class="flex flex-row">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-green-500"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-green-500"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-green-500"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-green-500"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-10 h-10 text-green-500"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							</div>
						</a>
					</div>

					<div
						class="min-h-min flex flex-row min-w-full justify-evenly  py-3 border-b border-zinc-700"
					>
						<p class="text-zinc-300">Review or log...</p>
					</div>
					<div
						class="min-h-min flex flex-row min-w-full justify-evenly  py-3 border-b border-zinc-700"
					>
						<p class="text-zinc-300">Add to lists...</p>
					</div>
					<div
						class="min-h-min flex flex-row min-w-full justify-evenly  py-3 border-b border-zinc-700"
					>
						<p class="text-zinc-300">Share</p>
					</div>
				</div>
			</div>
			<!-- action block end -->
			<!-- ratings -->
			<div class="md:row-span-1 md:col-span-3">
				<div
					class="flex flex-row justify-between items-center mb-2 border-b border-zinc-400"
				>
					<p
						class=" text-zinc-300 text-sm  text-center mb-0 uppercase tracking-widest"
					>
						Ratings
					</p>
					<p
						class=" text-zinc-400  text-xs font-thin text-center mb-0 uppercase tracking-widest"
					>
						1.2K Fans
					</p>
				</div>
				<div
					class="flex flex-row px-5 justify-self-start"
				/>
			</div>
			<!-- ratings end -->
		</div>
		<div>hello</div>
	</div>
</div>
