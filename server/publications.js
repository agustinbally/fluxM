/**
 * Created by Agus on 05/10/2015.
 */
Meteor.publish('allPatients', function() {
    return Patients.find();

    /*return Patients.find({}, {fields: {
        os: false
    }});
    */
});
//
//Meteor.publish('os', function(patientId) {
//    check(patientId, String);
//    return Os.find({patientId: patientId});
//});


Meteor.publish('os', function() {
    return Os.find();
});