// const fileName = document.querySelector('#filename')
const form = document.querySelector('form')
const savebtn = document.querySelector('button')

const getFormDatas = function (formData) {
    var values = {};
    for (var pair of formData.entries()) {
        var key = pair[0];
        var value = pair[1];
        if (values[key]) {
            if (!(values[key] instanceof Array)) {
                values[key] = new Array(values[key]);
            }
            values[key].push(value);
        } else {
            values[key] = value;
        }
    }
    return values;
}


savebtn.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('asdasd')
    const formdata = new FormData(document.forms[0])

    fetch('http://localhost:3000/save', {
        method: 'POST',
        body: JSON.stringify(getFormDatas(formdata)),
    }).then(res => res.json())
        .then(data => {
            console.log(data)
        }
        )
    console.log(getFormDatas(formdata))
});