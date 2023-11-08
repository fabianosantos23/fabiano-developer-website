import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import {
  SetIsLoadingAction
} from './store.meta.actions'
import { StoreMetaStateModel } from './store.meta.model'

const INITIAL_STATE: StoreMetaStateModel = {
  isLoading: false
}

@State<StoreMetaStateModel>({
  name: 'storeMeta',
  defaults: { ...INITIAL_STATE },
})
@Injectable()
export class StoreMetaState {
  @Selector()
  public static getStoreState(state: StoreMetaStateModel): StoreMetaStateModel {
    return state
  }

  @Selector()
  public static getIsLoading(state: StoreMetaStateModel): boolean {
    return state.isLoading
  }

  @Action(SetIsLoadingAction)
  setIsLoadingAction(
    ctx: StateContext<StoreMetaStateModel>,
    action: SetIsLoadingAction
  ): void {
    const state = ctx.getState()
    ctx.setState({
      ...state,
      isLoading: action.payload,
    })
  }
}
