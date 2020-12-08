function show() {
    let view = document.getElementById('view');
    let urls = 'http://localhost:8080/2018CWS3/webresources/mahasiswa.mahasiswa';
    $.ajax({
        url: urls,
        metodh: 'GET',
        success: function (xml) {
            let table = xml2html(xml);
            view.innerHTML = table;
        },
        fail: function (e) {
            alert('error');
        }
    })
    //view.innerHTML = "Show here";
}
function xml2html(xml) {
    let sdata = xml.getElementsByTagName('mahasiswa').length;
    let table = "<table border='1'>";
    table += "<tr> <th>ID</th> <th>Nama</th> <th>NIM</th> </tr>";
    for (row = 0; row < sdata; row++) {
        let id = xml.getElementsByTagName("id")[row].childNodes[0].nodeValue;
        let nama = xml.getElementsByTagName("nama")[row].childNodes[0].nodeValue;
        let nim = xml.getElementsByTagName("nim")[row].childNodes[0].nodeValue;
        table += '<tr> <td>' + id + '</td>  <td>' + nama + '</td>  <td>' + nim + '</td> </tr>'
    }
    table += "</table>";
    return table;
}

function find() {
    let view = document.getElementById('view');
    view.innerHTML = "Find here";
}
function edit() {
    let view = document.getElementById('view');
    view.innerHTML = "Edit here";
}
function del() {
    let view = document.getElementById('view');
    view.innerHTML = "Delete here";
}