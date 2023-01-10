import { SvelteKitAuth } from "@auth/sveltekit"
import Discord from "@auth/core/providers/discord"
import { DISCORD_ID, DISCORD_SECRET } from "$env/static/private"
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

async function authorization({ event, resolve }) {
  // Protect any routes under /authenticated
  if (event.url.pathname.startsWith('/authenticated')) {
 const session = await event.locals.getSession();
      if (!session) {
          throw redirect(303, '/auth');
      }
  }

  // If the request is still here, just proceed as normally
  const result = await resolve(event, {
      transformPageChunk: ({ html }) => html
  });
  return result;
}

export const handle: Handle = sequence(
  SvelteKitAuth({
      providers: [Discord({ clientId: DISCORD_ID, clientSecret: DISCORD_SECRET })]
  }),
  authorization
);