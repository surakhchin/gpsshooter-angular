import { Component, OnInit } from '@angular/core';
import {InstructionService} from "../services/instruction.service";
import {Instruction} from "../shared/instruction";

@Component({
  selector: 'app-multi-player',
  templateUrl: './multi-player.component.html',
  styleUrls: ['./multi-player.component.scss']
})
export class MultiPlayerComponent implements OnInit {


  instructions: Instruction[];
  multiPlayer: Instruction;

  constructor(private instructionService: InstructionService) { }

  ngOnInit() {
    this.instructions = this.instructionService.getInstructions();
    this.multiPlayer = this.instructions[1];
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);


    const text = document.getElementById("text");
    text.innerHTML = 'link copied!!';
    const text2 = document.getElementById("text2");
    text2.innerHTML = 'link copied!!';
    setTimeout(function(){

      text.innerHTML = 'click to copy link';
      text2.innerHTML = 'click to copy link';

      }, 3000);




  }



}
