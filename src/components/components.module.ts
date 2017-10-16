import { NgModule } from '@angular/core';
import { Component, Input } from '@angular/core';
import { BackBarComponent } from './back-bar/back-bar';
import { TopBarComponent } from './top-bar/top-bar';
import { BottomBarComponent } from './bottom-bar/bottom-bar';
import { ChoicesComponent } from './choices/choices';

//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
        BackBarComponent,
        TopBarComponent,
        BottomBarComponent,
        ChoicesComponent
    ],
	imports: [
        //BrowserModule,
        CommonModule
    ],
	exports: [
        BackBarComponent,
        TopBarComponent,
        BottomBarComponent,
        ChoicesComponent
    ]
})

export class ComponentsModule {}
