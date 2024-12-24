import { Context as ContextTelegraf } from 'telegraf';

export interface Context extends ContextTelegraf {
  session: {
    text: string;
    type?:
      | 'save_file'
      | ''
      | 'send_message'
      | 'create_pack'
      | 'create_monster'
      | 'create_monster_2'
      | 'create_type_monster';
  };
}
