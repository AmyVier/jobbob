'use client';
import { FilePond, registerPlugin } from 'react-filepond';
import { create } from 'filepond';
import { FilePondOptions } from 'filepond';
import 'filepond/dist/filepond.min.css';
import { useState } from 'react';
import FilePondPluginPdfPreview from 'filepond-plugin-pdf-preview';
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";


registerPlugin(FilePondPluginPdfPreview);

export default function FileUpload() {

  const [files, setFiles] = useState([]);


  return (
    <FilePond
      files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                server="/api/upload"
                name="files"

    />
  );
}