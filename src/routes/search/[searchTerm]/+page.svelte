<script lang="ts">
	export let data;
	const results = data.results.data.docs;
	console.log(data.results.data.docs);
	const imgURL1 = 'https://covers.openlibrary.org/b/id/';
	const imgURL2 = '-L.jpg';
</script>

{#each results as result}
	<h1>{result.title}</h1>
	<img src={imgURL1 + result.cover_i + imgURL2} alt="" />
{/each}
