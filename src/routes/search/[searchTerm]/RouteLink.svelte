<script lang="ts">
	import type { PageData } from '../../$types';
	export let data: PageData;
	// console.log(data);

	const results = data?.results?.data?.docs;
	// console.log(results[2].title);
</script>
