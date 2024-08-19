"use client";

import { useServerAction } from "zsa-react";
import { LoaderButton } from "~/components/LoaderButton";
import { Button } from "~/components/ui/button";
import { signOutAction } from "~/server/auth/actions/signOutAction";

export function SignOutForm() {
  const { isPending, execute, error, reset } = useServerAction(signOutAction);

  return (
    <form action={execute}>
      <LoaderButton isLoading={isPending} className="w-full" type="submit">
        Sign Out
      </LoaderButton>
    </form>
  );
}
