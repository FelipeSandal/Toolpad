"use client";

import { useEffect } from "react";

import { useTranslations } from "@/lib/i18n";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("exceptionClientMessages");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="my-28 flex justify-center">
      <div className="flex-col">
        <p>{t("tryAgainNowOrLater")}</p>
        <button onClick={() => window.location.reload()}>
          {t("tryAgain")}
        </button>
      </div>
    </div>
  );
}
