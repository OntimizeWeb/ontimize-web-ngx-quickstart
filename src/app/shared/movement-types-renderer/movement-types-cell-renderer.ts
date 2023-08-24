import { Component, Injector, TemplateRef, ViewChild } from '@angular/core';
import { OBaseTableCellRenderer, OTranslateService } from 'ontimize-web-ngx';

@Component({
  selector: 'movement-types-cell-renderer',
  templateUrl: './movement-types-cell-renderer.html'
})

export class MovementTypesCellRendererComponent extends OBaseTableCellRenderer {
  protected translateService: OTranslateService;
  protected _color: string = 'inherit';

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
    // mover al constructor del OBaseTableCellRenderer ?
    this.translateService = this.injector.get(OTranslateService);
  }

  getCellData(value: any) {
    const translatedCellData = this.translateService.get(value);
    const typesList = document.querySelectorAll('.nvd3.nv-legend .nv-series text');
    for (let i = 0, len = typesList.length; i < len; i++) {
      if (typesList[i].innerHTML === translatedCellData) {
        const circle: any = typesList[i].parentElement.children[0];
        if (circle) {
          this.color = circle.style.fill;
        }
      }
    }
    return this.translateService.get(value);
  }

  get color(): string {
    return this._color;
  }

  set color(arg: string) {
    this._color = arg;
  }

  // const translatedCellData = this.translateService.get(cellData);
  // const existingStyle = ($ as any)('.nvd3.nv-legend .nv-series text:contains("' + translatedCellData + '")').siblings('circle').css('fill');
  // let spanCode = '<span class="movement-types-cell-renderer" style="color: ';
  // spanCode += existingStyle;
  // spanCode += ';">' + translatedCellData + '</span>';
  // return spanCode;

}
