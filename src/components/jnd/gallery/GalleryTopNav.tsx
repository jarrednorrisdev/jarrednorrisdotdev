import { NavBarTop } from "~/components/jnd/NavBarTop";
import {
  BreadcrumbLink,
  DynamicBreadcrumb,
} from "~/components/jnd/DynamicBreadcrumb";

export async function GalleryTopNav({
  breadcrumbLinks,
  children,
}: {
  breadcrumbLinks: BreadcrumbLink[];
  children?: React.ReactNode;
}) {
  return (
    <NavBarTop className="z-25 flex justify-between py-2">
      <DynamicBreadcrumb breadcrumbLinks={breadcrumbLinks} />
			<div className="flex gap-2">{children}</div>
			
		</NavBarTop>
		
  );
}
