import { Component, OnInit } from '@angular/core';
import { AgWordCloudData } from 'angular4-word-cloud';
import { WordCloudService } from '../../services/word-cloud/word-cloud.service'

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit {

  constructor(public wordcloudservice: WordCloudService) { }
  word: AgWordCloudData

  ngOnInit() {
  //  this.wordcloudservice.flag=false
  
  }
  flag=true;


  response = [{ "size": 150, "text": "Reinsurance" }, { "size": 150, "text": "Loss" }, { "size": 150, "text": "LossReinsurance" }, {
    "size":
      150, "text": "ReinsuranceAgreement"
  }, { "size": 150, "text": "ReinsuranceContract" }, { "size": 150, "text": "Excess" },
  { "size": 150, "text": "Premium" }, { "size": 150, "text": "LossContract" }, { "size": 150, "text": "InsuranceCompany" },
  { "size": 150, "text": "LossContracts" }, { "size": 150, "text": "ReinsurancePremium" }, { "size": 150, "text": "Losses" },
  { "size": 150, "text": "PrimaryCompany" }, { "size": 150, "text": "Ibnr" }, { "size": 150, "text": "Surplus" }, {
    "size": 140,
    "text": "Reinsurance"
  }, { "size": 140, "text": "Loss" }, { "size": 140, "text": "Premium" }, {
    "size": 140, "text":
      "Company"
  }, { "size": 140, "text": "Insurance" }, { "size": 140, "text": "Insurer" }, { "size": 140, "text": "Amount" },
  { "size": 140, "text": "Risk" }, { "size": 140, "text": "Period" }, { "size": 140, "text": "Excess" }, {
    "size": 140, "text":
      "Policy"
  }, { "size": 140, "text": "Contract" }, { "size": 140, "text": "Term" }, { "size": 140, "text": "Treaty" }, {
    "size":
      140, "text": "Liability"
  }, { "size": 140, "text": "Retention" }, { "size": 140, "text": "Limit" }, {
    "size": 140, "text":
      "Business"
  }, { "size": 140, "text": "Commission" }, { "size": 140, "text": "Year" }, { "size": 140, "text": "Claim" },
  { "size": 140, "text": "Agreement" }, { "size": 140, "text": "Expense" }, { "size": 140, "text": "Clause" }, {
    "size": 140,
    "text": "Experience"
  }, { "size": 140, "text": "Share" }, { "size": 140, "text": "Payment" }, {
    "size": 140, "text":
      "Surplus"
  }, { "size": 140, "text": "Form" }, { "size": 140, "text": "Line" }]


  options = {
    settings: {
      minFontSize: 10,
      maxFontSize: 50,
    },
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    labels: false

  };


}

