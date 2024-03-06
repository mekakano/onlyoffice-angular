import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IConfig } from "@onlyoffice/document-editor-angular";
import { DocumentEditorModule } from "@onlyoffice/document-editor-angular";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DocumentEditorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlyoffice-angular-demo';
  config: IConfig = {
    document: {
      "fileType": "docx",
      "key": "j8092zJSeQAiZ1LXAhGRMzMa0kcu1L",
      "title": "Example Document Title.docx",
      "url": "https://file-examples.com/storage/fe7b7e0dc465e22bc9e6da8/2017/02/file-sample_100kB.doc"
    },
    documentType: "word",
    editorConfig: {
      "callbackUrl": "https://example.com/url-to-callback.ashx"
    },
  }

  onDocumentReady = () => {
    console.log("Document is loaded");
  };

}
