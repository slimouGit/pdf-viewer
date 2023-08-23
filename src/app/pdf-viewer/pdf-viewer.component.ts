import { Component } from '@angular/core';
import { InkEditorAnnotation, NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent {
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; 
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; 
  }

  saveAnnotation(): void{
    const annotations = this.pdfService.getSerializedAnnotations();
    if(annotations){
      annotations.forEach(a => a.color = [255,0,0]);
    }   
    
    this.pdfService.removeEditorAnnotations();
    console.log("Save Annotation ", annotations);
    if(annotations){
      annotations.forEach(a => {
        // this.scroll(a.pageIndex+1,0)
      this.pdfService.addEditorAnnotation(a);
      });
  }
  }
  scroll(pageIndex: number, top: number):void {
    this.pdfService.scrollPageIntoView(pageIndex, {top})
  }

}
