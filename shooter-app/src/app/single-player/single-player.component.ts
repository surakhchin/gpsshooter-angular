import { Component, OnInit } from '@angular/core';
import { InstructionService } from "../services/instruction.service";
import { Instruction } from "../shared/instruction";

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.component.html',
  styleUrls: ['./single-player.component.scss']
})
export class SinglePlayerComponent implements OnInit {

  instructions: Instruction[];
  singlePlayer: Instruction;

  constructor(private instructionService: InstructionService) { }

  ngOnInit() {
    this.instructions = this.instructionService.getInstructions();
    this.singlePlayer = this.instructionService.getInstruction('single');
  }

}
