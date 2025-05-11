// origial code: https://gist.github.com/threepointone/e73a87f7bbbebc78cf71744469ec5a15

import { useLayoutEffect, useRef, useState } from "react";

export default function IFrameImplementation(
  props: React.ComponentPropsWithRef<"iframe">
) {
  const awaiter = useRef<null | {
    promise: null | Promise<void>;
    resolve: () => void;
    reject: () => void;
  }>(null);

  const [_, triggerLoad] = useState(false);

  if (awaiter.current?.promise) {
    throw awaiter.current.promise;
  }

  useLayoutEffect(() => {
    if (awaiter.current === null) {
      // @ts-expect-error: no need for null check
      awaiter.current = {};
      // @ts-expect-error: no need for null check
      awaiter.current.promise = new Promise<void>((resolve, reject) => {
        if (awaiter.current) {
          Object.assign(awaiter.current, { resolve, reject });
        }
      });
      triggerLoad(true);
    }
  }, []);
  const { title } = props;
  return (
    <iframe
      {...props}
      title={title}
      onLoad={(e) => {
        // @ts-expect-error: no need for null check
        awaiter.current.promise = null;
        awaiter.current?.resolve();
        props.onLoad?.(e);
      }}
      onError={(err) => {
        // @ts-expect-error: no need for null check
        awaiter.current.promise = null;
        awaiter.current?.reject();
        props.onError?.(err);
      }}
    />
  );
}
