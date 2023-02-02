import type { PageServerLoad} from "./$types";

export const load: PageServerLoad = async ({fetch, params}) =>{

  const fetchSearchResults = async (term:string) => {
    const res = await fetch(`https://openlibrary.org/search.json?q=${term}`)
    const data = await res.json();
    return {data};
  }
  return {
    results: fetchSearchResults(params.searchTerm)
  }
}