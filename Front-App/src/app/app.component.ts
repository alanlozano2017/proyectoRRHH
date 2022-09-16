import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front-App';

  ngOnInit() {

    // <!-- jQuery -->
    this.loadScript('./assets/plugins/jquery/jquery.min.js');
// <!-- Bootstrap 4 -->
    this.loadScript('./assets/plugins/bootstrap/js/bootstrap.bundle.min.js');
    // <!-- AdminLTE App -->
    this.loadScript('./assets/dist/js/adminlte.min.js');

    this.loadScript('./assets/plugins/datatables/jquery.dataTables.min.js');
    this.loadScript('./assets/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js');
    this.loadScript('./assets/plugins/datatables-responsive/js/dataTables.responsive.min.js');
    this.loadScript('./assets/plugins/datatables-responsive/js/responsive.bootstrap4.min.js');
    this.loadScript('./assets/plugins/datatables-buttons/js/dataTables.buttons.min.js');
    this.loadScript('./assets/plugins/datatables-buttons/js/buttons.bootstrap4.min.js');
    this.loadScript('./assets/plugins/jszip/jszip.min.js');
    this.loadScript('./assets/plugins/pdfmake/pdfmake.min.js');
    this.loadScript('./assets/plugins/pdfmake/vfs_fonts.js');
    this.loadScript('./assets/plugins/datatables-buttons/js/buttons.html5.min.js');
    this.loadScript('./assets/plugins/datatables-buttons/js/buttons.print.min.js');
    this.loadScript('./assets/plugins/datatables-buttons/js/buttons.colVis.min.js');
    

  }
 

 public loadScript(url: string) {
   const body = <HTMLDivElement> document.body;
   const script = document.createElement('script');
   script.innerHTML = '';
   script.src = url;
   script.async = false;
   script.defer = true;
   body.appendChild(script);
 }
}