import { Injectable } from '@angular/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public async addPhoto(): Promise<Photo | void> {
    try {
      return await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        correctOrientation: true,
        allowEditing: true,
        quality: 100,
        saveToGallery: true,
      });
    } catch (error) {}
  }

  public async readAsBase64(photo: Photo): Promise<{
    file: Blob;
    fileName: string;
  }> {
    const fileName = new Date().getTime() + '.jpeg';
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    const data = (await this.convertBlobToBase64(blob)) as string;

    const _response = await fetch(data!);
    const _blob = await _response.blob();

    return {
      file: _blob,
      fileName,
    };
  }

  public convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
}
