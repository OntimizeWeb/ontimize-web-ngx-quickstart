import { Injectable, Injector } from "@angular/core";
import { OntimizeEEPermissionsService, Codes, Util } from "ontimize-web-ngx";
import { Observable } from "rxjs";
import { share } from 'rxjs/operators';

@Injectable()
export class CustomPermissionsService extends OntimizeEEPermissionsService {

  constructor(protected injector: Injector) {
    super(injector);
  }

  loadPermissions(): Observable<any> {
      return this.loadPrivatePermissions();
  }



  loadPrivatePermissions(): Observable<any> {
    const url = './assets/dummy/private-permission.json';
    const self = this;
    const dataObservable: Observable<any> = new Observable(_innerObserver => {
      self.httpClient.get(url).subscribe((res: any) => {
        let permissions = {};
        if ((res.code === Codes.ONTIMIZE_SUCCESSFUL_CODE) && Util.isDefined(res.data)) {
          const response = res.data;
          try {
            permissions = response;
          } catch (e) {
            console.warn('[CustomPermissionsService: permissions parsing failed]');
          }
        }
        _innerObserver.next(permissions);

      }, error => {
        _innerObserver.error(error);
      }, () => _innerObserver.complete());
    });
    return dataObservable.pipe(share());
  }
}
