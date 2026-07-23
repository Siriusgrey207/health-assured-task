import { useQuery } from "@tanstack/react-query";
import fetchResources from "../utils/fetchResources";
import { useSearchParams } from "react-router-dom";

export function useResources() {
  // Refetching should happen upon query parameters change.
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const sort = searchParams.get("sort") ?? "newest";

  // Can be used to trigger the error screen.
  const triggerError = searchParams.get("error") === "true";

  return useQuery({
    queryKey: ["resources", search, sort, triggerError],
    queryFn: () => fetchResources(triggerError),
  });
}
