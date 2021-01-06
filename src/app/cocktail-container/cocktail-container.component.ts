import { Component, OnInit } from "@angular/core";
import { Cocktail } from "../shared/interfaces/cocktail.interface";
import { CocktailService } from "../shared/services/cocktail.service";

@Component({
  selector: "app-cocktail-container",
  templateUrl: "./cocktail-container.component.html",
  styleUrls: ["./cocktail-container.component.scss"]
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[];

  constructor(private cocktailService: CocktailService) {}

  ngOnInit() {
    this.subscription.add(
      this.cocktailService.cocktails$.subscribe((cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      })
    );
  }
}
