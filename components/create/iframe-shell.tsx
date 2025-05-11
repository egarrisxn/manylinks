import { JSX, Suspense } from "react";
import Loading from "@/app/loading";
import IFrameImplementation from "./iframe-implementation";

export default function IFrameShell(
  props: React.ComponentPropsWithRef<"iframe"> & { fallback?: JSX.Element }
) {
  const { fallback, ...rest } = props;

  return (
    <Suspense fallback={fallback || <Loading />}>
      <IFrameImplementation {...rest} />
    </Suspense>
  );
}
