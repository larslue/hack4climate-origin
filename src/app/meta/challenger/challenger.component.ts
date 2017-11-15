import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import factory_artifacts from '../../../../build/contracts/OriginFactory.json';
import origin_artifacts from '../../../../build/contracts/Origin.json';

@Component({
  selector: 'app-challenger',
  templateUrl: './challenger.component.html',
  styleUrls: ['./challenger.component.css']
})
export class ChallengerComponent implements OnInit {
  factoryAbstraction: any;
  originAbstraction: any;

  activeOrigins = [];
  activeOriginContracts = [];


  model = {
    name: 'blabla'
  };

  constructor(private web3Service: Web3Service) {
    console.log('Constructor: ' + web3Service);
  }

  ngOnInit(): void {
    console.log('Challenger OnInit: ' + this.web3Service);
    console.log(this);
    this.web3Service.artifactsToContract(factory_artifacts)
      .then((factoryAbstraction) => {
        this.factoryAbstraction = factoryAbstraction;
        this.refreshBullshits();
      });
    this.web3Service.artifactsToContract(origin_artifacts)
      .then((originAbstraction) => {
        this.originAbstraction = originAbstraction;
      });

  }

  async refreshBullshits() {
    console.log('Refreshing bullshits');

    try {
      const deployedFactory = await this.factoryAbstraction.deployed();
      console.log(deployedFactory, "deployedFactory");
      // FIXME: this does many things but working is not one of them.
      const maxElements = 10;
      for (let i = 0; i < maxElements; i++) {
        const activeOrigin = await deployedFactory.getActiveOrigins.call({index: i});
        console.log("this origin", activeOrigin);
        if (activeOrigin) {
          this.activeOrigins.push(activeOrigin);
        }
      }
      console.log('Found origins: ' + this.activeOrigins);
    } catch (e) {
      console.log(e);
      console.log('Error getting balance; see log.');
    }
  }


}
