import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { TypewriterComponent } from './typewriter/typewriter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TypewriterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular-project';

  ngOnInit(): void {
    initFlowbite();
  }
}
