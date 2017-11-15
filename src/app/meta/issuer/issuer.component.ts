import {Component, OnInit} from '@angular/core';
import {Web3Service} from '../../util/web3.service';
import { HttpClient } from '@angular/common/http';
import metacoin_artifacts from '../../../../build/contracts/MetaCoin.json';


@Component({
  selector: 'app-issuer',
  templateUrl: './issuer.component.html',
  styleUrls: ['./issuer.component.css']
})
export class IssuerComponent implements OnInit {
  accounts: string[];
  MetaCoin: any;

  model = {
    amount: 5,
    receiver: '',
    balance: 0,
    account: '',
    address: ''
  };

  amount;
  status = '';
  lat = '';
  lon = '';
  data = {};

  constructor(private web3Service: Web3Service, private http: HttpClient) {
    console.log('Constructor: ' + web3Service);
  }

  SubmitOrigin(event) {
    console.log("getLocationForAddress:" + this.model.address + ", amount: " + this.amount);
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.model.address + '&key=AIzaSyB_AqfNVguabv7oNGyXM42_qk4E9NxR60g').subscribe(data => {
      console.log(data);
      var address = data['results'][0].geometry.location;
      this.lat = address.lat;
      this.lon = address.lng;
    });
  }

  ngOnInit(): void {
    console.log('OnInit: ' + this.web3Service);
    console.log(this);
    this.watchAccount();
    this.web3Service.artifactsToContract(metacoin_artifacts)
        .then((MetaCoinAbstraction) => {
          this.MetaCoin = MetaCoinAbstraction;
        });
  }

  watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
      this.model.account = accounts[0];
      this.refreshBalance();
    });
  }

  setStatus(status) {
    this.status = status;
  }

  async sendCoin() {
    if (!this.MetaCoin) {
      this.setStatus('Metacoin is not loaded, unable to send transaction');
      return;
    }

    const amount = this.model.amount;
    const receiver = this.model.receiver;

    console.log('Sending coins' + amount + ' to ' + receiver);

    this.setStatus('Initiating transaction... (please wait)');
    try {
      const deployedMetaCoin = await this.MetaCoin.deployed();
      const transaction = await deployedMetaCoin.sendCoin.sendTransaction(receiver, amount, {from: this.model.account});

      if (!transaction) {
        this.setStatus('Transaction failed!');
      } else {
        this.setStatus('Transaction complete!');
      }
    } catch (e) {
      console.log(e);
      this.setStatus('Error sending coin; see log.');
    }
  }

  async refreshBalance() {
    console.log('Refreshing balance');

    try {
      const deployedMetaCoin = await this.MetaCoin.deployed();
      const metaCoinBalance = await deployedMetaCoin.getBalance.call(this.model.account);
      console.log('Found balance: ' + metaCoinBalance);
      this.model.balance = metaCoinBalance;
    } catch (e) {
      console.log(e);
      this.setStatus('Error getting balance; see log.');
    }
  }

  clickAddress(e) {
    this.model.account = e.target.value;
    this.refreshBalance();
  }

  setAmount(e) {
    console.log('Setting amount: ' + e.target.value);
    this.model.amount = e.target.value;
  }

  setReceiver(e) {
    console.log('Setting receiver: ' + e.target.value);
    this.model.receiver = e.target.value;
  }

}
