/*
 * @Author: John.Guan
 * @Date: 2018-06-02 21:26:52
 * @Last Modified by: John.Guan
 * @Last Modified time: 2018-06-02 22:13:15
 */
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  /*
 * 导入sidebar的svg资源
 */
  const svgsDir = 'assets/svgs';
  const sidebarDir = `${svgsDir}/sidebar`;
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
  /*
   * 导入days的svg资源
   */

  const daysDir = `${svgsDir}/days`;
  const daysArr: Array<any> = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ];

  daysArr.forEach(day => {
    day = 'day' + day + '';
    ir.addSvgIcon(day, ds.bypassSecurityTrustResourceUrl(`${daysDir}/${day}.svg`));
  })

}
