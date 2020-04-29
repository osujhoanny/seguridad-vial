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

    var table_propietarios = $('#dataTable_propietarios').DataTable({
        dom: "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
        buttons: [{
                text: 'Nuevo',
                action: function(e, dt, node, config) {
                    $('#modal_propietarios').modal('show');
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

    var table_proveedores = $('#dataTable_proveedores').DataTable({
        dom: "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
        buttons: [{
                text: 'Nuevo',
                action: function(e, dt, node, config) {
                    $('#modal_proveedores').modal('show');
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

    var table_costod = $('#dataTable_costod').DataTable({
        dom: "<'row'<'col-sm-12 col-md-6'B><'col-sm-12 col-md-6'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'p>>",
        buttons: [{
                text: 'Nuevo',
                action: function(e, dt, node, config) {
                    $('#modal_costod').modal('show');
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

    //Select row of datatable to action (edit or delete...)

    $('#dataTable_conductor tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table_conductor.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('#dataTable_propietarios tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table_propietarios.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

    $('#dataTable_proveedores tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table_proveedores.$('tr.selected').removeClass('selected');
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

    $('#dataTable_costod tbody').on('click', 'tr', function() {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table_costod.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });

});