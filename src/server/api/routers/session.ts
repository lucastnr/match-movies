import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const sessionRouter = createTRPCRouter({
  create: publicProcedure.query(({ ctx }) => {
    if (!ctx.user) {
      return new TRPCError({ code: "UNAUTHORIZED" });
    }
  }),
});
