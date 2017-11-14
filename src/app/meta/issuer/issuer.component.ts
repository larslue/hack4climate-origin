import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import metacoin_artifacts from '../../../../build/contracts/MetaCoin.json';

@Component({
  selector: 'app-issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent implements OnInit {
  /*accounts: string[];
  MetaCoin: any;
*/
  model = {
    name: 'blabla'
  };

  status = '';

  constructor(private web3Service: Web3Service) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('Init');

  }


}
