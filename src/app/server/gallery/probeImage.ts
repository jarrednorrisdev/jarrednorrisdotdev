import "server-only";
import { type Image } from "~/app/server/db/schema";
import probe, { type ProbeResult } from "probe-image-size";
import { Console, Effect } from "effect";

export declare class ProbeError {
  readonly _tag = "ProbeError";
}

export async function probeImage(image: Image): Promise<ProbeResult | null> {
  return Effect.runPromise(
    Effect.match(
      Effect.tryPromise({
        try: async () => await probe(image.url),
        catch: () => new ProbeError(),
      }),
      {
        onSuccess: (user) => user,
        onFailure: (error) => {
          Effect.runSync(Console.error(error._tag));
          return null;
        },
      },
    ),
  );
}
