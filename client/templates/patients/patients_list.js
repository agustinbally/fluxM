Template.patientsList.helpers({

    settings: function () {
        return {
            collection: Patients.find(),
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
