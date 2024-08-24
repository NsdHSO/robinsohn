import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
import { ButtonComponent } from '@rabinsohn/button';
import { ListDirective, TextComponent, TextDirective } from '@rabinsohn/text';
import { TuiButton, TuiLoader, tuiLoaderOptionsProvider } from '@taiga-ui/core';
import {
  OverWriteTigaSpliner
} from '../../../../../../libs/over-write-taiga-spiner/src/lib/over-write-taiga-spliner.directive';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule, MatIcon, ButtonComponent, TextDirective, TextComponent,
    ListDirective, TuiLoader, TuiButton, OverWriteTigaSpliner
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  providers: [
    AuthService, tuiLoaderOptionsProvider({
      size: 'l',
      inheritColor: false,
      overlay: true
    })
  ]

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
