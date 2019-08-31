import { Injectable } from '@angular/core';
import { ElectronService } from './core/services';
import { GlobalSpinnerService } from './global-spinner.service';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor(private core: ElectronService, private spinnerservice: GlobalSpinnerService) { }
  async export(name: string) {
    const options = {
      // See place holder 1 in above image
      title: 'Save Docker Image',

      // See place holder 4 in above image
      filters: [
        { name: 'tgz', extensions: ['tgz'] }
      ]
    };
    try {
      const data = this.core.remote.dialog.showSaveDialogSync(this.core.remote.getCurrentWindow(), options);

      if (data) {
        this.spinnerservice.showSpinnerDialog(`Exporting image ${name}`);
        await this.exportimage(name, data);
        this.spinnerservice.removeSpinnerDialog();
      }
    } catch (err) {
      console.log(err);
    }
  }
  private exportimage(imagename: string, tag: string) {
    return new Promise<void>((resolve, reject) => {
      this.core.childProcess.exec(`docker image save ${imagename} -o ${tag}`, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    });

  }
}
