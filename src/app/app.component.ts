import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./core/layout/header/header.component";
import {BodyComponent} from "./core/layout/body/body.component";
import {SidebarComponent} from "./core/layout/sidebar/sidebar.component";
import {FooterComponent} from "./core/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BodyComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project14';
}
