import { Component, Inject, forwardRef, Injector } from '@angular/core';
import { ITableCellRenderer, OTableColumnComponent, OTranslateService } from 'ontimize-web-ng2';
import * as $ from 'jquery';


@Component({
  selector: 'movement-types-cell-renderer',
  template: ''
})
export class MovementTypesCellRendererComponent implements ITableCellRenderer {
  translateService: OTranslateService;
  constructor(
    @Inject(forwardRef(() => OTableColumnComponent))
    tableColumn: OTableColumnComponent,
    protected injector: Injector
  ) {
    tableColumn.registerRenderer(this);
    this.translateService = this.injector.get(OTranslateService);
  }

  public init(parameters: any) {
    // nothing to initialize here
  }

  public render(cellData: any, rowData: any): string {
    const translatedCellData = this.translateService.get(cellData);
    const existingStyle = ($ as any)('.nvd3.nv-legend .nv-series text:contains("' + translatedCellData + '")').siblings('circle').css('fill');
    let spanCode = '<span class="movement-types-cell-renderer" style="color: ';
    spanCode += existingStyle;
    spanCode += ';">' + translatedCellData + '</span>';
    return spanCode;
  }

  public handleCreatedCell(cellElement: any, rowData: any) {
    // nothing to do here
  }

}