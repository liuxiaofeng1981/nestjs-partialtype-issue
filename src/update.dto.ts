import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateDto } from './create.dto';

// Doesn't work
export class UpdateDto extends PartialType(CreateDto) {}
