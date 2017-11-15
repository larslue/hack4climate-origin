import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';

@Component({
  selector: 'app-challenger',
  templateUrl: './challenger.component.html',
  styleUrls: ['./challenger.component.css']
})
export class ChallengerComponent implements OnInit {
  issues= [
    {name: "RWE", amount: "100", location: "Essen, Germany"},
    {name: "BP", amount: "300", location: "California, US"},
    {name: "e.on", amount: "50", location: "Dortmund, Germany"}
  ];


    name: 'blabla';

  constructor(private web3Service: Web3Service) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('Challenger OnInit: ' + this.web3Service);
    console.log(this);

  }


}
