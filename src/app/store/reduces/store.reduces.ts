import { RecipeUnion, RecipeAction } from "../action/store.action";

export interface StateForStore {
  recipes: []
}

const initialState: StateForStore = {
  recipes: [],
}

export function recipeReduces (
  state: StateForStore = initialState,
  action: RecipeUnion
  ) {
    switch (action.type) {
      case RecipeAction.GetRecipes:
        return {
          ...state,
          // 
        }
        
    
      default:
        return state;
    }
}