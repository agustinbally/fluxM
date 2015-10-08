Template.patientsList.helpers({

    settings: function () {
        return {
            collection: Patients.find(),
            rowsPerPage: 20,
            showFilter: true,
            showColumnToggles: true,
            //showNavigation: 'always',
            fields:[
                { key: 'firstName', label: 'Nombre' },
                { key: 'lastName', label: 'Apellido' },
                { key: 'birthDate', label: 'Fecha de Nacimiento' },
                { key: 'os', label: 'Obra Social' }
                /*,
                {
                    key: 'firstName',
                    label: 'Editar',
                    fn: function (value) {

                        return new Spacebars.SafeString('<a href="patientPage" class="discuss btn btn-default">View</a>');
                        //return '';
                        //return new Spacebars.SafeString('<a href="{{pathFor \'patientPage\'}}" class="discuss btn btn-default">View</a>');
                        //return new Spacebars.SafeString('<a href="+Routes.route[\'view\'].path({_id:value})+">Veeiew</a>');
                    }
                }*/
            ]
        };
    }
});

Template.patientsList.events({
    'click .reactive-table tbody tr': function (event) {
        Router.go('/patients/'+this._id);
    }
});
