import { Component } from "@angular/core";

const challenges = [
  {
    title: "Challenge 1",
    description: "This is the first challenge",
    link: "/app/challenges/blog-preview-card/index.html",
  },
  {
    title: "Challenge 2",
    description: "This is the second challenge",
    link: "https://www.example.com",
  },
  {
    title: "Challenge 3",
    description: "This is the third challenge",
    link: "https://www.example.com",
  },
];

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  challenges = challenges;
}
