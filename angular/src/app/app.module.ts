import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { DxListModule } from "devextreme-angular/ui/list";
import { DxToolbarModule } from "devextreme-angular/ui/toolbar";
import { DxDrawerModule } from "devextreme-angular/ui/drawer";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DxDrawerModule,
        DxToolbarModule,
        DxListModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
