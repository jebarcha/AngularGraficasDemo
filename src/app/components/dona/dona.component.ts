import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
	selector: 'app-dona',
	templateUrl: './dona.component.html',
	styles: []
})
export class DonaComponent implements OnInit {
	// Doughnut
	public doughnutChartLabels: Label[] = [ 'Tamales', 'Gorditas', 'Tacos' ];
	public doughnutChartData: MultiDataSet = [ [ 350, 450, 100 ], [ 50, 150, 120 ], [ 250, 130, 70 ] ];
	public doughnutChartType: ChartType = 'doughnut';

	constructor() {}

	ngOnInit() {}

	numeros_random() {
		this.doughnutChartData = [
			[ Math.round(Math.random()) * 100, Math.round(Math.random()) * 100, Math.round(Math.random()) * 100 ],
			[ Math.round(Math.random()) * 100, Math.round(Math.random()) * 100, Math.round(Math.random()) * 100 ],
			[ Math.round(Math.random()) * 100, Math.round(Math.random()) * 100, Math.round(Math.random()) * 100 ]
		];
	}

	// events
	public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}
}
