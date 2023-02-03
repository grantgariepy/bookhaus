<script lang="ts">
	import type { PageData } from '../$types';
	export let data: PageData;
	const book = data?.results?.data;
</script>

<div class="flex flex-row gap-3">
	<div>
		<p
			class="font-serif text-4xl text-zinc-200 font-bold tracking-wide"
		>
			{book.title}
		</p>
	</div>
	<div class="flex items-center">
		<span class="text-xl font-thin content-baseline">
			<a
				href="/"
				class="items-end underline decoration-1 underline-offset-2 decoration-zinc-500 text-zinc-200 hover:text-blue-400"
				>1996</a
			>
			<span class="text-zinc-400">by</span>
			<a
				href="/"
				class="underline decoration-1  underline-offset-2 decoration-zinc-500 text-zinc-200 hover:text-blue-400"
				>David Foster Wallace</a
			>
		</span>
	</div>
</div>
