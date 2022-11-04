import { AppModule } from './app.module';
import { Injector } from '@angular/core';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfig, AppConfigFactory, APP_CONFIG, OntimizeWebModule, ONTIMIZE_PROVIDERS, OPermissionsModule } from 'ontimize-web-ngx';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        OntimizeWebModule,
        OPermissionsModule,
        NoopAnimationsModule,
        AppModule
      ],
      providers: [
        {
          provide: APP_CONFIG, useValue: {
            uuid: 'com.ontimize.web.test',
            title: 'Ontimize Web Testing',
            locale: 'en'
          }
        },
        { provide: AppConfig, useFactory: AppConfigFactory, deps: [Injector] },
        ...ONTIMIZE_PROVIDERS
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
