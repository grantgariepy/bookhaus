<script lang="ts">
	import ActionBox from './ActionBoxLoggedIn.svelte';
	import ActivityFromFriends from './ActivityFromFriends.svelte';
	import BookCover from './BookCover.svelte';
	import BookDetails from './BookDetails.svelte';
	import Ratings from './Ratings.svelte';
	import TitleAuthorYear from './TitleAuthorYear.svelte';
	import WhereToReadBox from './WhereToReadBox.svelte';
	import PopularReviews from './PopularReviews.svelte';
	import RecentReviews from './RecentReviews.svelte';
	import RelatedBooks from './RelatedBooks.svelte';
	import SimilarBooks from './SimilarBooks.svelte';
	import ActionBoxLoggedOut from './ActionBoxLoggedOut.svelte';
	import ActionBoxLoggedIn from './ActionBoxLoggedIn.svelte';
	import PopularLists from './PopularLists.svelte';
	import type { PageData } from '../$types';
	export let data: PageData;
</script>

<div class="bg-zinc-800 -mt-8">
	<div class="max-w-screen-lg mx-auto">
		<div
			class="flex flex-col md:flex-row gap-6 md:gap-12 px-6 md:px-12 "
		>
			<div class="md:w-1/4 self-start md:sticky md:top-3">
				<BookCover />
				<WhereToReadBox />
			</div>
			<div class="md:w-3/4 flex flex-col z-30">
				<!-- {data.results.data.title} -->
				<TitleAuthorYear {data} />
				<div
					class="flex flex-col md:flex-row gap-10 md:gap-12 pt-6"
				>
					<div class="md:w-3/5 ">
						<BookDetails />
					</div>
					<div class="md:w-2/5 ">
						<!-- {#if $page.data.session}
							<ActionBoxLoggedIn />
						{:else}
							<ActionBoxLoggedOut />
						{/if} -->
						<Ratings />
					</div>
				</div>
				<!-- {#if $page.data.session}
					<ActivityFromFriends />
				{/if} -->
				<PopularReviews />
				<RecentReviews />
				<RelatedBooks />
				<SimilarBooks />
				<PopularLists />
			</div>
		</div>
	</div>
</div>
