import { NgModule } from "@angular/core";
import { ContentComponent } from "./components/layout/content/content.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgbModule],
  exports: [ContentComponent],
})
export class SharedModule {}
