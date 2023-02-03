import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../../$types";

export const load: PageServerLoad = async ({fetch, params, title}) =>{

  console.log(params)
  const fetchBook = async (bookSlug:string) => {
    const res = await fetch(`https://openlibrary.org/works/${bookSlug}.json`)
    const data = await res.json();
    if(data){
      return {data};
    }

    throw error(404, 'Not Found, failure')
  }
  return {
    results: fetchBook(params.bookSlug),
  }
}