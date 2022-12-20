import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderserviceService } from '../services/leaderservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishService: DishService, private leaderService:LeaderserviceService,private promotionService: PromotionService) { }

  ngOnInit() {
    this.dish=this.dishService.getFeaturedDish();
    this.promotion=this.promotionService.getFeaturedPromotion();
    this.leader=this.leaderService.getFeaturedleader();
  }

}