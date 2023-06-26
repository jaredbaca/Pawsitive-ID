import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.css']
})
export class PhotoUploadComponent {
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && file.type === 'image/jpeg') {
      // Perform further actions with the file
      console.log('Selected file:', file);
    } else {
      console.error('Invalid file format. Please select a JPEG image.');
    }
  }
}
