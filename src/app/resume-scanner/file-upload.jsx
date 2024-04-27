'use client';
import { FilePond, registerPlugin } from 'react-filepond';
import { create } from 'filepond';
import { FilePondOptions } from 'filepond';
import 'filepond/dist/filepond.min.css';
import { useState } from 'react';
import FilePondPluginPdfPreview from 'filepond-plugin-pdf-preview';
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";

export default function FileUpload() {

    registerPlugin(FilePondPluginPdfPreview);
    const pond = create();
    pond.setOptions({
      server: {
        process: '/api/upload',
        fetch: null,
        revert: null,
      },
      allowPdfPreview: true, 
      pdfPreviewHeight: 1280,
      pdfComponentExtraParams: 'toolbar=0&view=fit&page=1'            
    });

  return (
    <FilePond/>
  );
}