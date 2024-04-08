import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPreviewCardComponent } from './blog-preview-card/blog-preview-card.component';
import routes from './newbie.routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BlogPreviewCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NewbieModule {}
