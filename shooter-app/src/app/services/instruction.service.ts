import { Injectable } from '@angular/core';
import {Instruction} from "../shared/instruction";
import {INSTRUCTIONS} from "../shared/instructions";


@Injectable({
  providedIn: 'root'
})
export class InstructionService {

  constructor() { }

  getInstructions(): Instruction[] {
    return INSTRUCTIONS;
  }

  getInstruction(mode: string): Instruction {
    return INSTRUCTIONS.filter((instruction) => (instruction.mode))[0]
  }

}
