import { error } from "@sveltejs/kit";
import type { PageServerLoad} from "./$types";

export const load: PageServerLoad = async ({fetch, params}) =>{
  console.log()

  const fetchSearchResults = async (searchTerm:string) => {
    const res = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}`)
    const data = await res.json();
    if(data){
      return {data};
    }

    throw error(404, 'Not Found, failure')
  }
  return {
    results: fetchSearchResults(params.searchTerm)
  }
}