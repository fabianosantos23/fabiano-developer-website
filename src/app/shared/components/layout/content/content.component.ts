import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { StoreMetaStateModel } from 'src/store/store.meta.model';
import { StoreMetaState } from 'src/store/store.meta.state';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  @Select(StoreMetaState.getStoreState)
  store$!: Observable<StoreMetaStateModel>;

  constructor() {
    this.store$.subscribe((store) => console.log(store))
  }

}
