/**
 * Created by Agus on 05/10/2015.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return [Meteor.subscribe('allPatients'), Meteor.subscribe('os')]}
});

Router.route('/', {name: 'patientsList'});
Router.route('/patients/:_id', {
    name: 'patientPage',
    data: function() { return Patients.findOne(this.params._id); }
});

Router.onBeforeAction('dataNotFound', {only: 'patientPage'});