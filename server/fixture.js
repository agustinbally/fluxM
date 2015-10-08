/**
 * Created by Agus on 05/10/2015.
 */
if (Patients.find().count() === 0) {
    Patients.insert({
        firstName: 'Pepito',
        lastName: 'Gomez',
        birthDate: new Date(1984,4,5).toLocaleDateString(),
        os: 'Swiss Medical'
    });

    var patientAgustinId = Patients.insert({
        firstName: 'Agustin',
        lastName: 'Bally',
        birthDate: new Date(1981,7,12).toLocaleDateString(),
        os: 'Medicus'
    });

    Patients.insert({
        firstName: 'Nicolas',
        lastName: 'Dijkstra',
        birthDate: new Date(1978,0,24).toLocaleDateString(),
        os: 'Osde'
    });

    Os.insert({
        patientId: patientAgustinId,
        prestador: 'Osde',
        plan: '210',
        nroAfiliado: '2233',
        vencimiento: new Date(220,7,12).toLocaleDateString()
    });
}