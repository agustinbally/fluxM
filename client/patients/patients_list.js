Template.patientsList.helpers({

    settings: function () {
        return {
            collection: patientData,
            rowsPerPage: 20,
            showFilter: true,
            fields:[
                { key: 'firstName', label: 'Nombre' },
                { key: 'lastName', label: 'Apellido' },
                { key: 'birthDate', label: 'Fecha de Nacimiento' },
                { key: 'os', label: 'Obra Social' }
            ]
        };
    }
});

var patientData = [
    {
        firstName: 'Agustin',
        lastName: 'Bally',
        birthDate: new Date(1981,7,12).toLocaleDateString()
    },
    {
        firstName: 'Nicolas',
        lastName: 'Dijkstra',
        birthDate: new Date(1978,0,24).toLocaleDateString()
    }
];