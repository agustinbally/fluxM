/**
 * Created by Agus on 06/10/2015.
 */
Template.patientPage.helpers({
    birth: function() {
        return new Date(this.birthDate).toLocaleDateString();
    },
    age: function() {
        var ageNumber = ~~((Date.now() -  Date.parse(this.birthDate) ) / (31557600000));
        return '(edad: ' + ageNumber + ')';
    },
    oss: function() {
        return Os.find({patientId: this._id});
    }
});