import { LoadingSpinner } from "~/components/LoadingSpinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-grow items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
