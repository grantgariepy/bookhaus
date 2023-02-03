import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "../../$types";

export const load: PageServerLoad = async ({fetch, params}) =>{

    const bookRes = await fetch(`https://openlibrary.org/works/${params.bookSlug}.json`)
    const bookData = await bookRes.json();
    
    // console.log(bookData)

    const authorLink = bookData.authors[0].author.key

    const authorRes = await fetch(`https://openlibrary.org${authorLink}.json`)
    const authorData = await authorRes.json();

  // console.log(authorData.name)
  
    return {
      results: bookData ,
      author: authorData
    }
  }