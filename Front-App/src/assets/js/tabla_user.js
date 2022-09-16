$(function () {
    
    var parametros =  {
      "responsive": true,
      "lengthChange": false,
      "autoWidth": false,
      "buttons": [

    {
            extend: 'copy',
            exportOptions: {
          columns: ":not(.not-export-column)"
        }
        },
    {
            extend: 'csv',
            exportOptions: {
          columns: ":not(.not-export-column)"
        }
        },
    {
            extend: 'pdf',
            exportOptions: {
          columns: ":not(.not-export-column)"
        }
        },
        {
            extend: 'print',
            exportOptions: {
          columns: ":not(.not-export-column)"
        }
        },
        {
            extend: 'excel',
            exportOptions: {
          columns: ":not(.not-export-column)"
        }
        },
        "colvis"
      ]

    };
if ($("#example1").length) {
  $("#example1").DataTable(
    parametros
    ).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
}

if ($("#example2").length) {
  $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
}
    

    
  });