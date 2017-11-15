import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

@Component({
  selector: 'app-challenger',
  templateUrl: './challenger.component.html',
  styleUrls: ['./challenger.component.css']
})
export class ChallengerComponent implements OnInit {

  model = {
    name: 'blabla'
  };

  constructor(private web3Service: Web3Service) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('Challenger OnInit: ' + this.web3Service);
    console.log(this);

  }


}
