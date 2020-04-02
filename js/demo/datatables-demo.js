// Call the dataTables jQuery plugin
$(document).ready(function() {
    var table_conductor = $('#dataTable_conductor').DataTable({
        dom: "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
        buttons: [{
                text: 'Nuevo',
                action: function(e, dt, node, config) {
                    $('#modal_conductor').modal('show');
                }
            }, {
                text: 'Editar',
                action: function(e, dt, node, config) {
                    alert('Editar Fila');
                }
            },
            {
                text: 'Eliminar',
                action: function(e, dt, node, config) {
                    alert('Eliminar fila');
                }
            },
            {
                text: 'Pruebas y Formación',
                action: function(e, dt, node, config) {
                    $('#modal_formacion').modal('show');
                }
            },
            'csv', 'excel', 'pdf'
        ]
    });

    var table_vehiculo = $('#dataTable_vehiculo').DataTable({
        dom: "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
        buttons: [{
                text: 'Nuevo',
                action: function(e, dt, node, config) {
                    $('#modal_conductor').modal('show');
                }
            }, {
                text: 'Editar',
                action: function(e, dt, node, config) {
                    alert('Editar Fila');
                }
            },
            {
                text: 'Eliminar',
                action: function(e, dt, node, config) {
                    alert('Eliminar fila');
                }
            },
            {
                text: 'Documentos',
                action: function(e, dt, node, config) {
                    $('#modal_documentos').modal('show');
                }
            },
            'csv', 'excel', 'pdf'
        ]
    });

    var table_reporte = $('#dataTable_reporte').DataTable({
        dom: "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
        buttons: [{
                text: 'Nuevo',
                action: function(e, dt, node, config) {
                    $('#modal_reporte').modal('show');
                }
            }, {
                text: 'Editar',
                action: function(e, dt, node, config) {
                    alert('Editar Fila');
                }
            },
            {
                text: 'Eliminar',
                action: function(e, dt, node, config) {
                    alert('Eliminar fila');
                }
            },
            'csv', 'excel', 'pdf'
        ]
    });

    $('#dataTable_conductor tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table_conductor.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('#dataTable_vehiculo tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table_vehiculo.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('#dataTable_reporte tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table_reporte.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

});