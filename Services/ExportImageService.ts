import { dialog, app } from 'electron';

export class ExportImage {
  constructor() {

  }
  exportImage(string: string) {
    const options = {
      defaultPath: app.getPath('documents') + '/electron-tutorial-app.pdf',
    };
    dialog.showSaveDialog(null, options);
  }

}
