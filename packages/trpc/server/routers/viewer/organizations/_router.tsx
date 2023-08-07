import { ZVerifyCodeInputSchema } from "@calcom/prisma/zod-utils";

import authedProcedure, {
  authedAdminProcedure,
  authedOrgAdminProcedure,
} from "../../../procedures/authedProcedure";
import { router } from "../../../trpc";
import { ZAdminVerifyInput } from "./adminVerify.schema";
import { ZCreateInputSchema } from "./create.schema";
import { ZCreateTeamsSchema } from "./createTeams.schema";
import { ZGetMembersInput } from "./getMembers.schema";
import { ZGetOtherTeamInputSchema } from "./getOtherTeam.handler";
import { ZListMembersSchema } from "./listMembers.schema";
import { ZListOtherTeamMembersSchema } from "./listOtherTeamMembers.handler";
import { ZSetPasswordSchema } from "./setPassword.schema";
import { ZUpdateInputSchema } from "./update.schema";

type OrganizationsRouterHandlerCache = {
  create?: typeof import("./create.handler").createHandler;
  listCurrent?: typeof import("./list.handler").listHandler;
  publish?: typeof import("./publish.handler").publishHandler;
  checkIfOrgNeedsUpgrade?: typeof import("./checkIfOrgNeedsUpgrade.handler").checkIfOrgNeedsUpgradeHandler;
  update?: typeof import("./update.handler").updateHandler;
  verifyCode?: typeof import("./verifyCode.handler").verifyCodeHandler;
  createTeams?: typeof import("./createTeams.handler").createTeamsHandler;
  setPassword?: typeof import("./setPassword.handler").setPasswordHandler;
  adminGetUnverified?: typeof import("./adminGetUnverified.handler").adminGetUnverifiedHandler;
  adminVerify?: typeof import("./adminVerify.handler").adminVerifyHandler;
  listMembers?: typeof import("./listMembers.handler").listMembersHandler;
  getBrand?: typeof import("./getBrand.handler").getBrandHandler;
  getMembers?: typeof import("./getMembers.handler").getMembersHandler;
  listOtherTeams?: typeof import("./listOtherTeams.handler").listOtherTeamHandler;
  getOtherTeam?: typeof import("./getOtherTeam.handler").getOtherTeamHandler;
  listOtherTeamMembers?: typeof import("./listOtherTeamMembers.handler").listOtherTeamMembers;
};

const UNSTABLE_HANDLER_CACHE: OrganizationsRouterHandlerCache = {};

export const viewerOrganizationsRouter = router({
  create: authedProcedure.input(ZCreateInputSchema).mutation(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.create) {
      UNSTABLE_HANDLER_CACHE.create = await import("./create.handler").then((mod) => mod.createHandler);
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.create) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.create({
      ctx,
      input,
    });
  }),
  update: authedProcedure.input(ZUpdateInputSchema).mutation(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.update) {
      UNSTABLE_HANDLER_CACHE.update = await import("./update.handler").then((mod) => mod.updateHandler);
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.update) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.update({
      ctx,
      input,
    });
  }),
  verifyCode: authedProcedure.input(ZVerifyCodeInputSchema).mutation(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.verifyCode) {
      UNSTABLE_HANDLER_CACHE.verifyCode = await import("./verifyCode.handler").then(
        (mod) => mod.verifyCodeHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.verifyCode) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.verifyCode({
      ctx,
      input,
    });
  }),
  createTeams: authedProcedure.input(ZCreateTeamsSchema).mutation(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.createTeams) {
      UNSTABLE_HANDLER_CACHE.createTeams = await import("./createTeams.handler").then(
        (mod) => mod.createTeamsHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.createTeams) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.createTeams({
      ctx,
      input,
    });
  }),
  listCurrent: authedProcedure.query(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.listCurrent) {
      UNSTABLE_HANDLER_CACHE.listCurrent = await import("./list.handler").then((mod) => mod.listHandler);
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.listCurrent) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.listCurrent({
      ctx,
    });
  }),
  checkIfOrgNeedsUpgrade: authedProcedure.query(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.checkIfOrgNeedsUpgrade) {
      UNSTABLE_HANDLER_CACHE.checkIfOrgNeedsUpgrade = await import("./checkIfOrgNeedsUpgrade.handler").then(
        (mod) => mod.checkIfOrgNeedsUpgradeHandler
      );
    }

    if (!UNSTABLE_HANDLER_CACHE.checkIfOrgNeedsUpgrade) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.checkIfOrgNeedsUpgrade({ ctx });
  }),
  publish: authedProcedure.mutation(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.publish) {
      UNSTABLE_HANDLER_CACHE.publish = await import("./publish.handler").then((mod) => mod.publishHandler);
    }

    if (!UNSTABLE_HANDLER_CACHE.publish) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.publish({ ctx });
  }),
  setPassword: authedProcedure.input(ZSetPasswordSchema).mutation(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.setPassword) {
      UNSTABLE_HANDLER_CACHE.setPassword = await import("./setPassword.handler").then(
        (mod) => mod.setPasswordHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.setPassword) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.setPassword({
      ctx,
      input,
    });
  }),
  getMembers: authedProcedure.input(ZGetMembersInput).query(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.getMembers) {
      UNSTABLE_HANDLER_CACHE.getMembers = await import("./getMembers.handler").then(
        (mod) => mod.getMembersHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.getMembers) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.getMembers({
      ctx,
      input,
    });
  }),
  adminGetUnverified: authedAdminProcedure.query(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.adminGetUnverified) {
      UNSTABLE_HANDLER_CACHE.adminGetUnverified = await import("./adminGetUnverified.handler").then(
        (mod) => mod.adminGetUnverifiedHandler
      );
    }
    if (!UNSTABLE_HANDLER_CACHE.adminGetUnverified) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.adminGetUnverified({
      ctx,
    });
  }),
  adminVerify: authedAdminProcedure.input(ZAdminVerifyInput).mutation(async ({ input, ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.adminVerify) {
      UNSTABLE_HANDLER_CACHE.adminVerify = await import("./adminVerify.handler").then(
        (mod) => mod.adminVerifyHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.adminVerify) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.adminVerify({
      ctx,
      input,
    });
  }),
  listMembers: authedProcedure.input(ZListMembersSchema).query(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.listMembers) {
      UNSTABLE_HANDLER_CACHE.listMembers = await import("./listMembers.handler").then(
        (mod) => mod.listMembersHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.listMembers) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.listMembers({
      ctx,
      input,
    });
  }),
  getBrand: authedProcedure.query(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.getBrand) {
      UNSTABLE_HANDLER_CACHE.getBrand = await import("./getBrand.handler").then((mod) => mod.getBrandHandler);
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.getBrand) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.getBrand({
      ctx,
    });
  }),
  listOtherTeams: authedOrgAdminProcedure.query(async ({ ctx }) => {
    if (!UNSTABLE_HANDLER_CACHE.listOtherTeams) {
      UNSTABLE_HANDLER_CACHE.listOtherTeams = await import("./listOtherTeams.handler").then(
        (mod) => mod.listOtherTeamHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.listOtherTeams) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.listOtherTeams({
      ctx,
    });
  }),
  getOtherTeam: authedOrgAdminProcedure.input(ZGetOtherTeamInputSchema).query(async ({ ctx, input }) => {
    if (!UNSTABLE_HANDLER_CACHE.getOtherTeam) {
      UNSTABLE_HANDLER_CACHE.getOtherTeam = await import("./getOtherTeam.handler").then(
        (mod) => mod.getOtherTeamHandler
      );
    }

    // Unreachable code but required for type safety
    if (!UNSTABLE_HANDLER_CACHE.getOtherTeam) {
      throw new Error("Failed to load handler");
    }

    return UNSTABLE_HANDLER_CACHE.getOtherTeam({
      ctx,
      input,
    });
  }),
  listOtherTeamMembers: authedOrgAdminProcedure
    .input(ZListOtherTeamMembersSchema)
    .query(async ({ ctx, input }) => {
      if (!UNSTABLE_HANDLER_CACHE.listOtherTeamMembers) {
        UNSTABLE_HANDLER_CACHE.listOtherTeamMembers = await import("./listOtherTeamMembers.handler").then(
          (mod) => mod.listOtherTeamMembers
        );
      }

      // Unreachable code but required for type safety
      if (!UNSTABLE_HANDLER_CACHE.listOtherTeamMembers) {
        throw new Error("Failed to load handler");
      }

      return UNSTABLE_HANDLER_CACHE.listOtherTeamMembers({
        ctx,
        input,
      });
    }),
});
