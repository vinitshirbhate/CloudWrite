"use client";
import Loader from "@/components/Loader";
import { getClerkUsers } from "@/lib/actions/users.actions";
import {
  LiveblocksProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LiveblocksProvider
      resolveUsers={async ({ userIds }) => {
        const users = await getClerkUsers({ userIds });
        return users;
      }}
      authEndpoint="/api/liveblocks-auth"
    >
      <ClientSideSuspense fallback={<Loader />}>{children}</ClientSideSuspense>
    </LiveblocksProvider>
  );
};

export default Provider;
