import { Context } from './context.interface';

export function createTable(dataArr: any[], titleArr: string[]) {
  let table: string = '';

  table += titleArr.join('\t|\t') + '\n';
  table += '---------------------------------------------------\n';

  const dataTable: string[] = [];
  dataArr.forEach((item) => {
    const filteredValues = Object.keys(item)
      .filter((key) => key !== 'createdAt' && key !== 'updateAt')
      .map((key) => item[key]);

    dataTable.push(filteredValues.join('\t|\t'));
  });

  dataTable.forEach((item) => {
    table += item + '\n\n';
  });

  return table;
}

export async function clearSession(ctx: Context) {
  ctx.session.type = '';
  ctx.session.text = '';
  ctx.reply(`Контекст отчищен`);
}
