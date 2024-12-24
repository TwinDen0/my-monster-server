import { EnumTypeElement } from 'prisma/generated/client';

export class TypeMonsterDto {
  name: string;
  img: string;
  element: EnumTypeElement;
  description: string;
}
