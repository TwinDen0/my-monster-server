import { Injectable } from '@nestjs/common';
import { FileService } from 'src/file/file.service';
import { Context } from '../context.interface';

@Injectable()
export class TgFileService {
  constructor(private readonly fileService: FileService) {}

  async saveFilePath(ctx: Context) {
    await ctx.reply(`Введите путь загрузки файла: `);
    ctx.session.type = 'save_file';
  }

  async saveFileLoad(message: any, ctx: Context) {
    await ctx.reply('Получил документ..', message);

    const fileId = message.document.file_id;
    const fileLink = await ctx.telegram.getFileLink(fileId);

    const chatId = ctx.chat.id;
    const folder = ctx.session.text;

    const res = await this.fileService.saveFileFromTG(fileLink, folder);

    if (res) {
      await ctx.reply('Фото добавлено');
    } else {
      await ctx.reply('Ошибка загрузки файла');
    }
    ctx.session.type = '';
    ctx.session.text = '';
  }
}
