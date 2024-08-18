import { Effect, Option } from "effect";
import { GalleryImagesList } from "~/components/jnd/gallery/GalleryImagesList";
import { GalleryTopNav } from "~/components/jnd/gallery/GalleryTopNav";
import { StyledPage } from "~/components/jnd/StyledPage";
import { ScrollArea } from "~/components/ui/scroll-area";
import { UserNotFoundError } from "~/app/server/auth/errors";
import { UserService, UserServiceLive } from "~/app/server/auth/userService";
import { GalleryService, GalleryServiceLive } from "~/app/server/gallery";

export default async function GalleryUserPage({
  params: { id: userId },
}: {
  params: { id: string };
}) {
  const getUser = Effect.gen(function* () {
    const userService = yield* UserService;
    const user = yield* userService.getUserById(userId);
    return user;
  });

  const user = Option.getOrThrowWith(
    await Effect.runPromise(Effect.provide(getUser, UserServiceLive)),
    () => new UserNotFoundError(`User with id ${userId} not found`),
  );

  const getAccount = Effect.gen(function* () {
    const userService = yield* UserService;
    const account = yield* userService.getAccountByUsername(user.id);
    return account;
  });

  const account = Option.getOrThrowWith(
    await Effect.runPromise(Effect.provide(getAccount, UserServiceLive)),
    () => new UserNotFoundError(`Account with id ${user.id} not found`),
  );

  const username = account.username ?? "id:" + user.id;

  const getImages = Effect.gen(function* () {
    const galleryService = yield* GalleryService;
    const images = yield* galleryService.getImagesByUserId(user.id);
    return images;
  });

  const images = await Effect.runPromise(
    Effect.provide(getImages, GalleryServiceLive),
  );

  const breadcrumbLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "User" },
    { label: username },
  ];

  return (
    <>
      <GalleryTopNav breadcrumbLinks={breadcrumbLinks} />
      <ScrollArea type="always">
        <StyledPage>
          <div className="p-4">
            {Option.match(images, {
              onNone: () => <div>There are no Images to display</div>,
              onSome: (images) => <GalleryImagesList images={images} />,
            })}
          </div>
        </StyledPage>
      </ScrollArea>
    </>
  );
}
