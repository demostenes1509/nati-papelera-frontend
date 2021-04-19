import React, { useState } from 'react';
import FileToUpload from './FileToUpload';

const UploadMediaComponent: React.FC = () => {
  const [filesToUpload, setFilesToUpload] = useState([] as FileToUpload[]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (!files) return;

    const filesToUpload: FileToUpload[] = [];
    for (let i = 0; i < files.length; i++) {
      filesToUpload.push(new FileToUpload(files[i]));
    }

    setFilesToUpload(filesToUpload);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    for (let i = 0; i < filesToUpload.length; i++) {
      filesToUpload[i].uploadFile();
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">File Uploader</h2>
      <div className="upload-form">
        <form id="file_upload" onSubmit={onFormSubmit}>
          <div className="upload-file-select">
            <label htmlFor="file_1">Select files for upload</label>
            <input id="file_1" type="file" multiple onChange={onFileChange} />
          </div>

          <div className="upload-file-list">
            {filesToUpload.map((f, i) => (
              <div className="upload-file" key={i}>
                {f.file.name} - {f.file.size}bytes
              </div>
            ))}
          </div>

          <div className="upload-submit">
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

UploadMediaComponent.displayName = 'UploadMedia';
export default UploadMediaComponent;
