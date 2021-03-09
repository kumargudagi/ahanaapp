import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-stepperComponent
import { stepperComponent } from '../components/stepperComponent/stepper.component';
//CORE_REFERENCE_IMPORT-expansion2Component
import { expansion2Component } from '../components/expansion2Component/expansion2.component';
//CORE_REFERENCE_IMPORT-expansionComponent
import { expansionComponent } from '../components/expansionComponent/expansion.component';
//CORE_REFERENCE_IMPORT-ahanapageComponent
import { ahanapageComponent } from '../components/ahanapageComponent/ahanapage.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stepperComponent
stepperComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-expansion2Component
expansion2Component,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-expansionComponent
expansionComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ahanapageComponent
ahanapageComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'ahanapage', component: ahanapageComponent},{path: 'expansion', component: expansion2Component},{path: 'stepper', component: stepperComponent},{path: '', redirectTo: 'ahanapage', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
