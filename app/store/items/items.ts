import {makeAutoObservable, reaction, runInAction} from 'mobx';
import {Item, ItemsActions, ItemsState} from './items.types';
import {fetchItems} from '../../asyncActions/itemsZustand';
import {AxiosError} from 'axios';
import {getErrorMessage} from '../../utils/errorMessage';

export class ItemsSlice implements ItemsState, ItemsActions {
  items: Item[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  nonReactiveHelper: string = 'This is a helper';

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  get itemsCount() {
    return this.items.length;
  }

  async getItems() {
    this.isLoading = true;
    try {
      const items = await fetchItems();
      runInAction(() => {
        this.items = items;
        this.isLoading = false;
      });
    } catch (error) {
      //   this.error = (error as AxiosError).message;
      runInAction(() => {
        this.error = getErrorMessage(error, AxiosError);
        this.isLoading = false;
      });
    }
  }
}
