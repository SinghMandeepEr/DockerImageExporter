import { Injectable } from '@angular/core';
import { Image } from './image';
import { ElectronService } from '../core/services';

@Injectable({
  providedIn: 'root'
})
export class DockerImageService {

  constructor(private core: ElectronService) { }
  getAllImages(): Promise<Array<Image>> {
    return new Promise<Array<Image>>((resolve, reject) => {
      const toReturn = [];
      this.core.childProcess.exec('docker images --format {{.ID}},{{.Repository}},{{.Tag}}', (err, data) => {
        // console.log(data);
        const apparray = data.trim().split('\n');
        // console.log(apparray);
        apparray.forEach((element, index) => {
          // console.log(element);
          const singleImageValue = element.trim().split(',');
          // console.log(singleImageValue);
          toReturn.push(new Image((index + 1).toString() , singleImageValue[0], singleImageValue[1], singleImageValue[2]));
        });
        if (err) {
          reject(err);
        }
        resolve(toReturn);
      });
    });
  }
  removeImage(tag: string) {
    return new Promise<void>((resolve, reject) => {
      this.core.childProcess.exec('docker rmi ' + tag, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });

  }
}
