import type { Resource, Sort } from "../types/Resource";
import { filterResources } from "./filterResources";
import { groupResourcesByCategory } from "./groupResourcesByCategory";
import { sortResources } from "./sortResources";

type TParams = {
  filter?: string;
  sort?: Sort;
};

/* 
Function responsible for the filtering, sorting and grouping of resources based on provided filters. 
resources   - List of resources to filter, sort and group.
params      - Query parameters used for the filtering and sorting.
*/
export function prepareResources(
  resources: Resource[],
  params: TParams
): Record<string, Resource[]> {
  let preparedResources = resources;

  // Filter the resources first.
  if (params.filter) {
    preparedResources = filterResources(preparedResources, params.filter);
  }

  // Then sort the resources.
  preparedResources = sortResources(preparedResources, params.sort);

  // Finally group and return.
  return groupResourcesByCategory(preparedResources);
}
