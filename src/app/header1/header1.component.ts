import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  selectProductCategory(event: any): void {
    const categoryId = event.target.value;
    this.router.navigate(['/product-list'], { queryParams: { categoryId: categoryId } });
  }
}
