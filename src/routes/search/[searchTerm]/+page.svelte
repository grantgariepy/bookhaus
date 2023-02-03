<script lang="ts">
	import RouteLink from './RouteLink.svelte';
	import BooksHeader from '../../components/BooksHeader.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const results = data.results.data.docs;
	const imgURLStart =
		'https://covers.openlibrary.org/b/id/';
	const imgURLEnd = '-L.jpg';
	// console.log(data.results.data.docs);
</script>

<BooksHeader />
<div class="bg-zinc-800 py-6 sm:py-8 lg:py-12">
	<div class="max-w-screen-lg px-4 md:px-8 mx-auto">
		{#each results as result}
			<a href="../book/{result.key.split('/')[2]}">
				<h1 class="capitalize text-3xl text-white">
					{result.title}
					<span class="text-2xl font-extralight lowercase"
						>by</span
					>
					{result.author_name}
				</h1>
				<h3 class="capitalize text-xl text-white">
					{result.first_publish_year}
				</h3>
				<img
					src={imgURLStart + result.cover_i + imgURLEnd}
					alt={result.title}
				/>
			</a>
		{/each}
	</div>
</div>
