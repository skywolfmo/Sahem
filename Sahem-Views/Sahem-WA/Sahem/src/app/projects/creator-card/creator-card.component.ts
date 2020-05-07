import { Component, OnInit, Input } from '@angular/core';
import { CreatorService } from '../creator.service'
import { Creator } from 'src/app/Models/User/Creator';
import * as mime from 'mime-types';

@Component({
  selector: 'app-creator-card',
  templateUrl: './creator-card.component.html',
  styleUrls: ['./creator-card.component.css']
})
export class CreatorCardComponent implements OnInit {
  @Input() id: string;
  creator: Creator;
  avatarExt: any;
  constructor(private creatorsService: CreatorService) { }

  ngOnInit(): void {
    this.getcreatorsById(this.id);
  }
  getcreatorsById(id) {
    const p = new Promise((res, rej) => {
      this.creatorsService.getCreator(id).subscribe(creators => {
        this.creator = creators;
        this.avatarExt = mime.extension(this.creator.avatar[0].mimetype);
        // this.avatarExt = mime.;
        console.log(this.creator.avatar[0].mimetype);

        console.log(this.creator);
      });
      res('resolved');
    });
    return p;
  }


}
