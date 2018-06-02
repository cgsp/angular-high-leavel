import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  // 导入冲浪svg
  ir.addSvgIcon(
    'chonglang',
    ds.bypassSecurityTrustResourceUrl('assets/svgs/chonglang.svg')
  )
}
