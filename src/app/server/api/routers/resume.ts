import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/app/server/api/trpc";

export const resumeRouter = createTRPCRouter({
  parse: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        advice: ` `,
      };
    }),
});
