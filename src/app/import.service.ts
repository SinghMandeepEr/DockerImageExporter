import { Injectable } from '@angular/core';
import { ElectronService } from './core/services';
import { GlobalSpinnerService } from './global-spinner.service';
import { OpenDialogSyncOptions } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  constructor(private core: ElectronService, private spinnerservice: GlobalSpinnerService) { }
  async import() {
    const options: OpenDialogSyncOptions = {
      title: 'Import Docker Image',

      // See place holder 4 in above image
      filters: [
        { name: 'tgz', extensions: ['tgz'] }
      ]
    };
    try {
      const selectedImage: any = this.core.remote.dialog.showOpenDialogSync(this.core.remote.getCurrentWindow(), options);
      if (selectedImage) {
        this.spinnerservice.showSpinnerDialog(`Importing image ${selectedImage}`);
        console.log(selectedImage);
        await this.importImage(selectedImage[0]);
        this.spinnerservice.removeSpinnerDialog();
      }
    } catch (err) {
      console.log(err);
    }
  }
  private importImage(imagename: string) {
    return new Promise<void>((resolve, reject) => {
      this.core.childProcess.exec(`docker image load -i ${imagename}`, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });

  }
}
