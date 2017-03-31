import { Component, ViewChild, AfterContentInit, forwardRef, Injector, OnInit } from '@angular/core';
import { OFormComponent, OntimizeService } from 'ontimize-web-ng2';
import { ChartSeries } from 'ontimize-web-ng2-charts/o-chart';

@Component({
  moduleId: module.id,
  selector: 'accounts-detail',
  styleUrls: ['accounts-detail.component.css'],
  templateUrl: 'accounts-detail.component.html'
})
export class AccountsDetailComponent implements AfterContentInit, OnInit{

  protected data: Array<Object>;
  protected lineData: Array<ChartSeries>;
  protected service: OntimizeService;

  protected yAxis: string = 'MOVEMENT';
  protected xAxis: string = 'MOVEMENTTYPES';

  @ViewChild(forwardRef(() => OFormComponent)) form: OFormComponent;

  constructor(protected injector : Injector) {
  }

  ngOnInit() {
    this.configureService();
  }

  ngAfterContentInit() {
    this.form.onFormDataLoaded.subscribe(data => {
      this.onChartData(data);
    }, error => {
      console.log(error);
    });
  }

  protected configureService() {
    this.service = this.injector.get(OntimizeService);
    let conf = this.service.getDefaultServiceConfiguration();
    conf['entity'] = 'EMovements';
    this.service.configureService(conf);
  }

  protected onChartData(data: Object) {
    console.log(data);
    if (data.hasOwnProperty('ACCOUNTID') && this.service !== null) {
      // console.log(data['ACCOUNTID']);
      let filter = {
        'ACCOUNTID': data['ACCOUNTID']
      };
      let columns = [this.yAxis, this.xAxis, 'DATE_'];
      this.service.query(filter, columns).subscribe((resp) => {
        if (resp.code === 0) {
          this.adaptResult(resp.data);
        } else {
          alert('Impossible to query data!');
        }
      });
    }
  }

  /**
   * Creates chart data grouping movements by category 'Movement type'
   *  */
  adaptResult(data: Array<any>) {
    if (data && data.length) {
      this.data = this.processValues(data);
      this.lineData = this.processLineData(data);
    }
  }

  processLineData(data: Array<Object>): Array<ChartSeries>{
    let balanceSerie: ChartSeries = {
      'key': 'BALANCE',
      'values': []
    };

    let movementSerie: ChartSeries = {
      'key': 'MOVEMENT',
      'values': []
    };

    let balance = 0;
    var self = this;
    data.forEach((item: any) => {
      balance += item['MOVEMENT'];
      let val = {
        'x': item['DATE_'],
        'y': balance
      };
      balanceSerie.values.push(val);
      let value = {
        'x': item['DATE_'],
        'y': item['MOVEMENT']
      }
      movementSerie.values.push(value);
    });
    let val = [];
    val.push(balanceSerie);
    val.push(movementSerie);
    return val;
  }

  processValues(data: Array<Object> ) : Array<Object> {
    let values = [];
    var self = this;
    data.forEach((item: any, index: number) => {
      let filtered = self.filterCategory(item[self.xAxis], values);
      if (filtered && filtered.length === 0) {
        let val = {
          'x': item[self.xAxis],
          'y': Math.abs(item[self.yAxis])
        };
        values.push(val);
      } else {
        filtered[0]['y'] += Math.abs(item[self.yAxis]);
      }
    });
    return values;
  }

  filterCategory(category: string, values: Array<Object>) {
    let filtered = [];
    if (values && values.length) {
      filtered = values.filter((val: Object) => {
        if (val['x'] === category) {
          return true;
        }
      });
    }
    return filtered;
  }

  onTableDataChange(args) {
    // console.log('onTableDataChange');
  }
}
