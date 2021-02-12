import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-generer-qr',
  templateUrl: './generer-qr.component.html',
  styleUrls: ['./generer-qr.component.css']
})
export class GenererQrComponent implements OnInit {

  id: number;
  user: any;
  qruser: string;

  constructor(private router: Router,
    private route: ActivatedRoute, private authservice: AuthServiceService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.user = data.user;
      }
    );
    this.qruser = JSON.stringify(this.user);
    console.log(this.qruser);

  }

}
