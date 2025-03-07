import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    AsyncPipe
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  private activatedRoute = inject(ActivatedRoute);
  slug$ = this.activatedRoute.params.pipe(map((p:any) => p['id']));
}
