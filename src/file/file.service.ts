import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { ensureDir, existsSync, remove, writeFile } from 'fs-extra';
import { FileResponse } from './file.interface';

@Injectable()
export class FileService {
  async saveFiles(files: Express.Multer.File[], folder: string = '') {
    const uploadedFolder = `${path}/uploads/${folder}`;

    await ensureDir(uploadedFolder);

    const response: FileResponse[] = await Promise.all(
      files.map(async (file) => {
        const originalName = `${Date.now()}-${file.originalname}`;

        await writeFile(`${uploadedFolder}/${originalName}`, file.buffer);

        return {
          url: `/uploads/${folder}/${originalName}`,
          name: originalName,
        };
      }),
    );
    return response;
  }

  async saveFileFromTG(fileLink: URL, folder: string = '') {
    const uploadedFolder = `${path}/uploads/${folder}`;

    console.log(fileLink);

    try {
      const response = await fetch(fileLink);

      if (!response.ok) {
        console.log(`Ошибка при загрузке файла: ${response.statusText}`);
        return false;
      }

      // Получаем данные файла как ArrayBuffer
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer); // Преобразуем в Buffer

      await writeFile(uploadedFolder, buffer);

      return true;
    } catch (error) {
      console.log(`Ошибка при загрузке файла: ${error}`);
      return false;
    }
  }

  async deleteFiles(url: string) {
    const pathDeleteFile = `${path}\\uploads\\${url}`;
    const newPathDeleteFile = pathDeleteFile.replace(/\\/g, '/');

    if (!existsSync(newPathDeleteFile)) {
      return false;
    }

    await remove(newPathDeleteFile);
    return true;
  }
}
