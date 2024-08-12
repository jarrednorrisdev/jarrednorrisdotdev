import { NavBarTop } from "~/components/jnd/navigation";
import {
  type BreadcrumbLink,
  DynamicBreadcrumb,
} from "~/components/jnd/navigation";

export async function GalleryTopNav({
  breadcrumbLinks,
  children,
}: {
  breadcrumbLinks: BreadcrumbLink[];
  children?: React.ReactNode;
}) {
  return (
    <NavBarTop className="z-25 sticky flex justify-between py-2">
      <DynamicBreadcrumb breadcrumbLinks={breadcrumbLinks} />
      <div className="flex gap-2">{children}</div>
    </NavBarTop>
  );
}
