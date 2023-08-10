import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  brandsData: { brand: string; count: number }[] = [];
  constructor(private _productService: ProductsService) {
  }
  ngOnInit() {
    this._productService.getAllProduct().subscribe((products) => {
      this.brandsData = this.calculateBrandCounts(products);
      const labelBardata = this.brandsData.map((brandData) => brandData.brand);
      const realBardata = this.brandsData.map((brandData) => brandData.count);
      this.createChart(labelBardata, realBardata,'bar','brandGraphBar');
      this.createChart(labelBardata, realBardata,'pie','brandGraphPie');
      this.createChart(labelBardata, realBardata,'doughnut','brandGraphDoughnut');


    });
  }

  calculateBrandCounts(products: Product[]): { brand: string; count: number }[] {
    const brandCounts: { [brand: string]: number } = {};
    products.forEach((product) => {
      if (brandCounts[product.brand]) {
        brandCounts[product.brand]++;
      } else {
        brandCounts[product.brand] = 1;
      }
    });
    return Object.keys(brandCounts).map((brand) => ({
      brand,
      count: brandCounts[brand],
    }));
  }
  createChart(labelBardata: any, realBardata: any,type :any,idCanva :any) {
    const chartElement = document.getElementById(idCanva) as HTMLCanvasElement;
    const existingChart = Chart.getChart(chartElement);
    if (existingChart) {
      existingChart.destroy();
    }
    new Chart(idCanva, {
      type: type,
      data: {
        labels: labelBardata,
        datasets: [{
          label: 'Number of products',
          data: realBardata,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          },
          title: {
            text: 'Number of products by brand',
            position: 'top',
            display: true
          }
        }
      }
    });

  }

}


