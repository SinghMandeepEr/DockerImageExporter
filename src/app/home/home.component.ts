import { Component, OnInit } from '@angular/core';
import { DockerImageService } from '../dockerimagebrowser/docker-image.service';
import { Image } from '../dockerimagebrowser/image';
import { MatTableDataSource, MatDialogRef, MatDialog } from '@angular/material';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { GlobalSpinnerService } from '../global-spinner.service';
import { ExportService } from '../export.service';
import { ImportService } from '../import.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dockerimages: Array<Image> = [];
  displayedColumns: string[] = ['Index', 'Tag', 'Repository', 'Version', 'Delete', 'Export'];
  dataSource: MatTableDataSource<Image>;
  constructor(private imageService: DockerImageService,
    private dialogRef: MatDialog,
    private spinnerService: GlobalSpinnerService,
    private exportService: ExportService,
    private importService: ImportService) {
  }

  async ngOnInit() {
    this.dockerimages = await this.imageService.getAllImages();
    this.dataSource = new MatTableDataSource(this.dockerimages);
  }
  async refresh() {
    this.spinnerService.showSpinnerDialog('Refreshing please wait....');
    this.dockerimages = await this.imageService.getAllImages();
    this.dataSource = new MatTableDataSource(this.dockerimages);
    this.spinnerService.removeSpinnerDialog();
  }
  async deleteImage(element: string) {
    const dialog = this.dialogRef.open<DeleteConfirmationDialogComponent>(DeleteConfirmationDialogComponent, {
      width: '400px',
      height: '250px',
      data: element
    });
    dialog.afterClosed().subscribe(async (data) => {
      if (data) {
        this.spinnerService.showSpinnerDialog('Deleting image please wait');
        await this.imageService.removeImage(element);
        this.spinnerService.removeSpinnerDialog();
        this.refresh();
      }

    });

  }
  async exportImage(image: Image) {
    console.log(image);
    this.exportService.export(`${image.repo}:${image.version}`);

  }
  async importImage() {
    await this.importService.import();
    this.refresh();

  }

}
