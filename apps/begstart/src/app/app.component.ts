import { Component } from '@angular/core';
import { exampleProducts } from '@aramirezj/products';

@Component({
  selector: 'aramirezj-root',
  template: `<aramirezj-banner title="dawd"></aramirezj-banner>
   <ul>
      <li *ngFor="let product of products">
        <strong>{{ product.name }}</strong> Price: {{ product.price }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'begstart';
  products = exampleProducts;
}
