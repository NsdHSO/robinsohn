import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { ButtonComponent } from '@rabinsohn/button';
import { TextComponent, TextDirective } from '@rabinsohn/text';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule, MatIcon, ButtonComponent, TextDirective, TextComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss', providers: [AuthService]
})
export class AuthComponent implements OnInit {
  /**
   * Title Service
   */
  readonly titleService = inject(Title);

  /**
   * Auth service
   */
  readonly authService = inject(AuthService);

  ngOnInit() {
    this.titleService.setTitle('Auth Pauker Application');
  }
}
