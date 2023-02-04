<script lang="ts">
	import type { PageData } from '../$types';
	export let data: PageData;
	const book = data.results;
</script>

<p class="text-zinc-300 pb-4 uppercase">
	{book.first_sentence.value}
</p>
<p class="text-zinc-300 pb-4">
	{book.description.value}
</p>
<div class="flex flex-row mb-2 border-b border-zinc-400">
	<p
		class="z-10 text-zinc-200 underline-offset-4 underline decoration-3 text-sm  text-center mb-0 uppercase tracking-widest"
	>
		Genres
	</p>
</div>
<div class="grid grid-cols-4 gap-2 text-zinc-400">
	<a
		href="/"
		class="bg-zinc-600 pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
	<a
		href="/"
		class="bg-zinc-600 pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
	<a
		href="/"
		class="bg-zinc-600  pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
	<a
		href="/"
		class="bg-zinc-600 pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
	<a
		href="/"
		class="bg-zinc-600 pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
	<a
		href="/"
		class="bg-zinc-600 pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
	<a
		href="/"
		class="bg-zinc-600 pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
	<a
		href="/"
		class="bg-zinc-600 pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
	<a
		href="/"
		class="bg-zinc-600 pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
	<a
		href="/"
		class="bg-zinc-600 pl-2 rounded hover:text-zinc-100"
	>
		Fiction
	</a>
</div>
