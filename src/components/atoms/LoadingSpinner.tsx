import type { CSSProperties } from "react";
import { FadeLoader } from "react-spinners";

const cssOverride: CSSProperties = {
  display: "block",
  margin: "auto",
  borderColor: "#3ca86a",
  width: "60px",
  height: "60px",
};

export function LoadingSpinner() {
  return (
    <FadeLoader
      cssOverride={cssOverride}
      color="#3ca86a"
      aria-label="Loading Spinner"
    />
  );
}
