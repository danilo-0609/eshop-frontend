import { AfterViewInit, Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements AfterViewInit {

  constructor(private render : Renderer2,
    @Inject(DOCUMENT) private document : Document ) {}

  ngAfterViewInit(): void {
    this.render.setStyle(
      this.document.body,
      'background-image',
      `url('../../assets/images/clothing-image.png')`
    )
  }
}

