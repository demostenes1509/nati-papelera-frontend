import axios from 'axios';
import { getToken } from '../Authentication/SessionApi';

export default class FileToUpload {
  static chunkSize = 1000000;
  static uploadUrl = 'http://localhost:8080/api/v1/photo';
  readonly request: XMLHttpRequest;
  readonly file: File;
  currentChunkStartByte: number;
  currentChunkFinalByte: number;

  constructor(file: File) {
    this.request = new XMLHttpRequest();
    this.request.overrideMimeType('application/octet-stream');

    this.file = file;
    this.currentChunkStartByte = 0;
    this.currentChunkFinalByte = FileToUpload.chunkSize > this.file.size ? this.file.size : FileToUpload.chunkSize;
  }

  uploadFile() {
    this.request.open('POST', FileToUpload.uploadUrl, true);

    const chunk: Blob = this.file.slice(this.currentChunkStartByte, this.currentChunkFinalByte);
    this.request.setRequestHeader(
      'Content-Range',
      `bytes ${this.currentChunkStartByte}-${this.currentChunkFinalByte}/${this.file.size}`,
    );

    this.request.onload = () => {
      const remainingBytes = this.file.size - this.currentChunkFinalByte;

      if (this.currentChunkFinalByte === this.file.size) {
        alert('Yay, download completed! Chao!');
        return;
      } else if (remainingBytes < FileToUpload.chunkSize) {
        this.currentChunkStartByte = this.currentChunkFinalByte;
        this.currentChunkFinalByte = this.currentChunkStartByte + remainingBytes;
      } else {
        this.currentChunkStartByte = this.currentChunkFinalByte;
        this.currentChunkFinalByte = this.currentChunkStartByte + FileToUpload.chunkSize;
      }

      this.uploadFile();
    };

    const formData = new FormData();
    const token = getToken();
    formData.append('file', chunk, this.file.name);
    axios.post('http://localhost:3001/nati-backend/providers/upload-new-file?provider=manapel', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // this.request.send(formData);
  }
}
