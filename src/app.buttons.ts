import { Markup } from 'telegraf';

export function adminButtons() {
  return Markup.keyboard(
    [
      Markup.button.callback(
        '💬 Отправить сообщение пользователям',
        'send_message',
      ),
      Markup.button.callback('🦖 Добавить монстра', 'create_monster'),
      Markup.button.callback('➕ Добавить пак', 'create_pack'),
      Markup.button.callback('⬇️ Загрузить файл', 'save_file'),
      Markup.button.callback('🥣 Добавить блюдо', 'save_file'),
    ],
    {
      columns: 2,
    },
  );
}

export function yesOrNoButtons() {
  return Markup.inlineKeyboard(
    [
      Markup.button.callback('✅ Да', 'handle_yes'),
      Markup.button.callback('❌ Нет', 'handle_no'),
    ],
    {
      columns: 2,
    },
  );
}

export function createTypeMonsterButton() {
  return Markup.inlineKeyboard([
    Markup.button.callback('+ Создать новый', 'create_type_monster'),
  ]);
}
