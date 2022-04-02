import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export function createPdf(html, canvasElement, pdfName = "sample") {
    html2canvas(html).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
      });
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(pdfName + ".pdf");
    });
  }