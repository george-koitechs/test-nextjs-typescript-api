import { useRouter } from "next/router";

export const useParam = function <T = string>(name: string): { param: T | undefined; isReady: boolean } {
  const router = useRouter();

  let param = router.query?.[name];

  if (Array.isArray(param)) {
    param = param[0];
  }

  return { param: param as T | undefined, isReady: router?.isReady };
};
