// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, ListComponent, AddCharacterComponent],
  exports: [MainPageComponent],
})
export class DbzModule {}
