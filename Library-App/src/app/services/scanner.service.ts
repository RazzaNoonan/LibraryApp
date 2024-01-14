import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Injectable({
  providedIn: 'root'
})
export class ScannerService {

  constructor() { }

  async startScan() {
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      console.log(result.content); // Process the scanned content
      return result.content;
    }
    return null;
  }
}
