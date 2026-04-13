# Plan: Migración Angular 15 → 18 — ontimize-web-ngx-quickstart

## TL;DR
Migración de la aplicación demo quickstart de Angular 15 a Angular 18. Es una app consumidora de `ontimize-web-ngx` y todos los addons, por lo que depende de las versiones 18 de todos ellos. Se propone una estrategia de rama única `migration/18.x.x` desde `15.x.x` (igual que la playground), ya que las migraciones intermedias 16/17 no aportan valor en una app demo.

## Datos clave del codebase (reales)
- **22 NgModules** (app + feature modules + routing modules)
- **19 templates HTML** con directivas flex-layout (131 líneas con `fx*`)
- **31 archivos SCSS**, **6 con theming** (login, about, accounts-detail, account-home, employees, main-theme)
- **2 archivos con `@angular/material/theming` legacy**: `about.theme.scss` (usa `@use`), `accounts-home.component.scss` (usa `@import` legacy)
- **1 spec file** (app.component.spec.ts)
- **UntypedFormGroup/UntypedFormControl** en `login.component.ts`
- **Sin guards propios**
- Bootstrap: `platformBrowserDynamic().bootstrapModule(AppModule)` (NgModule tradicional)
- Builder: `@angular-devkit/build-angular:browser` (legacy)
- Addons consumidos: `ontimize-web-ngx-charts 15.2.1`, `ontimize-web-ngx-extra-components 15.0.0`, `ontimize-web-ngx-filemanager 15.1.1`, `ontimize-web-ngx-map 15.0.1`, `ontimize-web-ngx-report 15.1.0`
- **6 HTML files con `*ngIf`/`*ngFor`** (23 líneas totales)
- Sin protractor ni tslint (ya usa ESLint)

## Estrategia de Ramas

```
15.x.x (actual, intocable)
  └── migration/18.x.x (migración directa 15 → 18)
       └── (merge a 18.x.x cuando esté listo)
```

**Justificación rama única**: Al ser una app consumidora (no librería), las versiones intermedias 16/17 no se publican. Todos los addons ya estarán migrados a Angular 18. Saltar directamente a 18 reduce esfuerzo.

---

## PASO 1: Actualizar dependencias core a Angular 18

### 1.1 Dependencias Angular
```
@angular/core, @angular/cli, @angular/compiler-cli, etc. → ^18.2.0
@angular/cdk, @angular/material, @angular/material-moment-adapter → ^18.2.0
@angular/service-worker, @angular/platform-server, @angular/upgrade → ^18.2.0
```

### 1.2 TypeScript y herramientas
```
typescript: ~4.9.5 → ~5.5.0
zone.js: ~0.12.0 → ~0.14.10
```

### 1.3 Reemplazar `@angular/flex-layout` → eliminar
- `@angular/flex-layout ^15.0.0-beta.42` → eliminar completamente (se migra a CSS en PASO 4)
- El framework `ontimize-web-ngx@18` provee las clases `o-flex-*` como reemplazo

### 1.4 Actualizar ontimize-web-ngx y addons
```
ontimize-web-ngx: file:../ontimize-web-ngx/dist/ontimize-web-ngx-18.0.0-SNAPSHOT-0.tgz
ontimize-web-ngx-charts: file:../ontimize-web-ngx-charts/dist/ontimize-web-ngx-charts-18.0.0-SNAPSHOT-0.tgz
ontimize-web-ngx-extra-components: file:../ontimize-web-ngx-extra-components/dist/ontimize-web-ngx-extra-components-18.0.0-SNAPSHOT-0.tgz
ontimize-web-ngx-filemanager: file:../ontimize-web-ngx-filemanager/dist/ontimize-web-ngx-filemanager-18.0.0-SNAPSHOT-0.tgz
ontimize-web-ngx-map: file:../ontimize-web-ngx-map/dist/ontimize-web-ngx-map-18.0.0-SNAPSHOT-0.tgz
ontimize-web-ngx-report: file:../ontimize-web-ngx-report/dist/ontimize-web-ngx-report-18.0.0-SNAPSHOT-0.tgz
```
Todos los addons se instalan desde tgz locales una vez migrados.

### 1.5 Añadir dependencias nuevas requeridas
```
luxon ^3.4.0 + @types/luxon  (peer transitivo de ngx-material-timepicker del framework)
moment ^2.18.1 → mantener (compatible)
```

### 1.6 Actualizar devDependencies
```
@angular-devkit/build-angular → ^18.2.0
@angular/compiler-cli → ^18.2.0
@angular/language-service → ^18.2.0
@angular/service-worker → ^18.2.0
@types/jasmine → ~5.1.0
@types/node → ^20.0.0
jasmine-core → ~5.1.0
karma-jasmine → ~5.1.0
karma-jasmine-html-reporter → ~2.1.0
ts-node → ~10.9.0
```

### 1.7 Verificación
- `npm install --legacy-peer-deps`
- `npx ng build` compila sin errores
- `npx ng serve` — la app carga

---

## PASO 2: Actualizar configuración del proyecto

### 2.1 tsconfig.json
```diff
- "module": "es2020" (o es2015)
+ "module": "es2022",
- "lib": ["es2018", "dom"]
+ "lib": ["es2022", "dom"]
```

### 2.2 angular.json — Builder (mantener browser)
- Mantener `@angular-devkit/build-angular:browser` — sigue soportado en Angular 18
- No migrar a `application` builder para minimizar riesgo

### 2.3 ngsw-config (PWA)
- Revisar que `ngsw-config.json` sigue siendo compatible con Angular 18 service worker

---

## PASO 3: Actualizar SCSS theming (M2 legacy → M2 modern syntax)

### 3.1 Archivos con `@import '@angular/material/theming'` (legacy)
- **`src/app/main/about/about.theme.scss`**: ya usa `@use` — revisar que los mixins son correctos con M2
- **`src/app/accounts/home/accounts-home.component.scss`**: usa `@import` legacy → reemplazar por `@use '@angular/material' as mat`

### 3.2 Acción
- Reemplazar en `accounts-home.component.scss`:
  ```scss
  @import 'node_modules/@angular/material/theming' → @use '@angular/material' as mat
  ```
- Adaptar mixins/variables si usan API legacy

### 3.3 Nota sobre M3
- La migración a M3 se hará cuando el framework `ontimize-web-ngx` migre su theming
- Los temas siguen funcionando con M2 en Angular 18

---

## PASO 4: Migración flex-layout → CSS nativo

### 4.1 Alcance
- **19 templates HTML** con 131 líneas de directivas `fx*`
- Usar las clases utilitarias `o-flex-*` definidas en `ontimize-web-ngx` (flex-layout.scss)

### 4.2 Templates afectados
- `login/login.component.html`
- `about/about.component.html`
- `accounts/detail/accounts-detail.component.html`
- `accounts/detail/transaction/account-transaction.component.html`
- `accounts/edit/accounts-edit.component.html`
- `accounts/home/accounts-home.component.html`
- `accounts/new/accounts-new.component.html`
- `branches/detail/branches-detail.component.html`
- `branches/edit/branches-edit.component.html`
- `branches/home/branches-home.component.html`
- `customers/detail/customers-detail.component.html`
- `customers/home/customers-home.component.html`
- `customers/new/customers-new.component.html`
- `employees/employees-detail/employees-detail.component.html`
- `employees/employees-home/employees-home.component.html`
- `settings/settings.component.html`
- `shared/accounts-card/accounts-card.component.html`
- `shared/branches-card/branches-card.component.html`
- `shared/employees-card/employees-card.component.html`

### 4.3 Mapping de reemplazos
| Directiva flex-layout | Equivalente |
|---|---|
| `fxLayout="row"` | `class="o-flex-row"` |
| `fxLayout="column"` | `class="o-flex-column"` |
| `fxLayoutAlign="center center"` | `class="o-layout-align-center-center"` |
| `fxLayoutAlign="space-between center"` | `class="o-layout-align-sb-center"` |
| `fxLayoutGap="8px"` | `class="o-gap-8"` |
| `fxFlex` | `class="o-flex"` |
| `fxFlex="50%"` | `class="o-flex-50"` |
| `fxFlexFill` / `fxFill` | `class="o-flex-fill"` |

### 4.4 Verificación
- Build sin errores
- **Verificación visual** de todas las pantallas (login, home, accounts, branches, customers, employees, settings)

---

## PASO 5: Control flow migration (`*ngIf` → `@if`, `*ngFor` → `@for`)

### 5.1 Migración automática
```bash
export PATH="$HOME/AppData/Local/nvs/node/20.18.3/x64:$PATH"
npx ng generate @angular/core:control-flow
```
- **Alcance**: 6 archivos HTML con ~23 líneas de `*ngIf`/`*ngFor`
- Volumen bajo — revisar diff tras el schematic

### 5.2 No aplica en el quickstart
- **Migración `inject()`**: la app no tiene servicios/componentes con `Injector.get()` propios
- **Guards funcionales**: sin guards propios en la app demo

### 5.3 Verificación
- Build sin errores
- Revisión visual de las pantallas con estructuras de control

---

## PASO 6: Typed Forms (bajo prioridad)

### 6.1 Alcance
- `login/login.component.ts`: `loginForm: UntypedFormGroup`, `userCtrl: UntypedFormControl`, `pwdCtrl: UntypedFormControl`

### 6.2 Acción
- Migrar `UntypedFormGroup` → `FormGroup<{user: FormControl<string>, pwd: FormControl<string>}>`
- Migrar `UntypedFormControl` → `FormControl<string>`

---

## PASO 7: Standalone migration ⏳ PENDIENTE

### 7.1 Estado
- 22 NgModules en la app
- `OntimizeWebModule.forRoot(CONFIG)` es el punto central de configuración
- ✅ **`provideOntimizeWeb()` disponible** en `ontimize-web-ngx@18` (commit `754ef7d9`) — el bloqueo se ha levantado

### 7.2 Pasos a realizar
1. Migrar `main.ts` a `bootstrapApplication()` con `provideOntimizeWeb(CONFIG)`
2. Convertir feature modules a standalone components con lazy loading vía `loadComponent`
3. Eliminar `AppModule` y feature modules
4. Migrar builder a `application` en `angular.json`

---

## PASO 8: Verificación final

### 8.1 Pantallas a verificar visualmente
| Sección | Componentes probados |
|---|---|
| **Login** | Formulario de login, validaciones |
| **Home** | Dashboard con cards |
| **Accounts** | Lista, detalle, edición, nuevo, transacciones |
| **Branches** | Lista, detalle, edición |
| **Customers** | Lista, detalle, nuevo |
| **Employees** | Lista, detalle |
| **Settings** | Configuración |
| **About** | Página about |
| **Charts** | ontimize-web-ngx-charts (si hay pantalla demo) |
| **Filemanager** | ontimize-web-ngx-filemanager (si hay pantalla demo) |
| **Map** | ontimize-web-ngx-map (si hay pantalla demo) |
| **Report** | ontimize-web-ngx-report (si hay pantalla demo) |

### 8.2 Checklist de regresión
- [ ] Build production sin errores
- [ ] Navegación entre todas las rutas
- [ ] Login funciona
- [ ] Lazy loading funciona (feature modules)
- [ ] Formularios con validaciones (login, new/edit)
- [ ] Listas con datos
- [ ] PWA service worker registra correctamente
- [ ] Dark theme (si aplica)

---

## Workflow de build/install

```bash
export PATH="$HOME/AppData/Local/nvs/node/20.18.3/x64:$PATH"

# Rebuild todos los addons necesarios antes de instalar
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx && npm run build && cd dist && npm pack
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx-charts && npm run build && npm pack dist/ && mv *.tgz dist/
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx-extra-components && npm run build && npm pack dist/ && mv *.tgz dist/
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx-filemanager && npm run build && npm pack dist/ && mv *.tgz dist/
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx-map && npm run build && npm pack dist/ && mv *.tgz dist/
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx-report && npm run build && npm pack dist/ && mv *.tgz dist/

# Instalar en quickstart
cd C:/work/ontimize-web-ngx/18.x.x/ontimize-web-ngx-quickstart
npm install --legacy-peer-deps
```

---

## Decisiones

- **Rama única**: Migración directa 15 → 18 sin ramas intermedias (app consumidora, no librería)
- **flex-layout**: Eliminar directamente en el PASO 1; migrar templates a clases `o-flex-*` en PASO 4
- **ontimize-web-ngx y addons**: Todos desde tgz locales de sus ramas `migration/18.x.x`
- **Builder**: Mantener `browser` builder — no migrar a `application` para minimizar riesgo
- **Typed Forms**: Bajo prioridad — solo `login.component.ts` afectado
- **Standalone bootstrap**: ✅ Desbloqueado — `provideOntimizeWeb()` disponible en `ontimize-web-ngx@18`; pendiente de ejecutar (PASO 7)
- **M3 theming**: Postergado — solo M2 por ahora; se actualiza cuando el framework publique nueva API de theming M3
- **Control flow**: Migrar con el schematic automático (Fase 5) — volumen bajo (23 líneas en 6 archivos)
- **PWA**: Verificar ngsw-config tras la migración
