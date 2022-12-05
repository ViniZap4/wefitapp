import { Repository } from "./repository";

export declare global {
  namespace ReactNavigation{
    interface RootParamsList{
      Details: Repository;
      Repository: indefined;
      Favorites: indefined;
    }
  }
}