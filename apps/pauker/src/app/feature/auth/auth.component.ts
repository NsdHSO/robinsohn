import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { ButtonComponent } from '@rabinsohn/button';
import { TextComponent, TextDirective } from '@rabinsohn/text';
import {
  ListDirective
} from '../../../../../../libs/text/src/lib/text/list.directive';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule, MatIcon, ButtonComponent, TextDirective, TextComponent,
    ListDirective
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

  protected readonly Array = Array;
}
