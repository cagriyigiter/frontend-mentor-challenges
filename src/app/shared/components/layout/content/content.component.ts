import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-content",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./content.component.html",
  styleUrl: "./content.component.scss",
})
export class ContentComponent implements OnInit {
  theme = localStorage.getItem("theme") || "dark";
  ngOnInit(): void {
    if (this.theme) {
      document.querySelector("html")?.setAttribute("data-bs-theme", this.theme);
    }
  }

  toggleTheme() {
    var htmlElement = document.querySelector("html");

    // data-bs-theme özelliğini kontrol edin
    var currentTheme = htmlElement?.getAttribute("data-bs-theme");

    // data-bs-theme özelliğini toggle edin
    if (currentTheme === "dark") {
      htmlElement?.setAttribute("data-bs-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      htmlElement?.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  }
}
