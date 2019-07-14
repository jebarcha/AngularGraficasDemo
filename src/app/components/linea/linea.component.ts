import { Component, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label, ThemeService } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
	selector: 'app-linea',
	templateUrl: './linea.component.html',
	styles: []
})
export class LineaComponent {
	public lineChartData: ChartDataSets[] = [
		{ data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Tamales' },
		{ data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Loches' },
		{ data: [ 180, 480, 770, 90, 1000, 270, 400 ], label: 'Gorditas', yAxisID: 'y-axis-1' }
	];

	public lineChartLabels: Label[] = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July' ];

	public lineChartOptions: ChartOptions & { annotation: any } = {
		responsive: true,
		scales: {
			// We use this empty structure as a placeholder for dynamic theming.
			xAxes: [ {} ],
			yAxes: [
				{
					id: 'y-axis-0',
					position: 'left'
				},
				{
					id: 'y-axis-1',
					position: 'right',
					gridLines: {
						color: 'rgba(255,0,0,0.3)'
					},
					ticks: {
						fontColor: 'red'
					}
				}
			]
		},
		annotation: {
			annotations: [
				{
					type: 'line',
					mode: 'vertical',
					scaleID: 'x-axis-0',
					value: 'March',
					borderColor: 'orange',
					borderWidth: 2,
					label: {
						enabled: true,
						fontColor: 'orange',
						content: 'LineAnno'
					}
				}
			]
		}
	};

	public lineChartColors: Color[] = [
		{
			// grey
			backgroundColor: 'rgba(148,159,177,0.2)',
			borderColor: 'rgba(148,159,177,1)',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		},
		{
			// dark grey
			backgroundColor: 'rgba(77,83,96,0.2)',
			borderColor: 'rgba(77,83,96,1)',
			pointBackgroundColor: 'rgba(77,83,96,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(77,83,96,1)'
		},
		{
			// red
			backgroundColor: 'rgba(255,0,0,0.3)',
			borderColor: 'red',
			pointBackgroundColor: 'rgba(148,159,177,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(148,159,177,0.8)'
		}
	];

	public lineChartLegend = true;
	public lineChartType = 'line';
	// public lineChartPlugins = [ pluginAnnotations ];

	@ViewChild(BaseChartDirective, { read: true })
	chart: BaseChartDirective;

  // Theme = 'light-theme' | 'dark-theme';

	private _selectedTheme: any = 'light-theme';
	public get selectedTheme() {
		return this._selectedTheme;
	}
	public set selectedTheme(value) {
		this._selectedTheme = value;
		let overrides: ChartOptions;
		if (this.selectedTheme === 'dark-theme') {
			overrides = {
				legend: {
					labels: { fontColor: 'white' }
				},
				scales: {
					xAxes: [
						{
							ticks: { fontColor: 'white' },
							gridLines: { color: 'rgba(255,255,255,0.1)' }
						}
					],
					yAxes: [
						{
							ticks: { fontColor: 'white' },
							gridLines: { color: 'rgba(255,255,255,0.1)' }
						}
					]
				}
			};
		} else {
			overrides = {};
		}
		this.themeService.setColorschemesOptions(overrides);
	}

constructor(private themeService: ThemeService) {}

setCurrentTheme(theme: any) {
		this.selectedTheme = theme;
	}

	public randomize(): void {
		for (let i = 0; i < this.lineChartData.length; i++) {
			for (let j = 0; j < this.lineChartData[i].data.length; j++) {
				this.lineChartData[i].data[j] = this.generateNumber(i);
			}
		}
this.chart.update();
	}

	private generateNumber(i: number) {
		return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
	}

	// events
	public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
		console.log(event, active);
	}

	public hideOne() {
		const isHidden = this.chart.isDatasetHidden(1);
		this.chart.hideDataset(1, !isHidden);
	}

	public pushOne() {
		this.lineChartData.forEach((x, i) => {
			const num = this.generateNumber(i);
			const data: number[] = x.data as number[];
			data.push(num);
		});
		this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
	}

	public changeColor() {
		this.lineChartColors[2].borderColor = 'green';
		this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
	}

	public changeLabel() {
		this.lineChartLabels[2] = [ '1st Line', '2nd Line' ];
		// this.chart.update();
	}
}
