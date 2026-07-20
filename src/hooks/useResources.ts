import { useQuery } from "@tanstack/react-query";
import fetchResources from "../utils/fetchResources";
import { useSearchParams } from "react-router-dom";

export function useResources() {
  // Refetching should happen upon query parameters change.
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const sort = searchParams.get("sort") ?? "newest";

  return useQuery({
    queryKey: ["resources", search, sort],
    queryFn: () => fetchResources(search, sort),
  });
}
