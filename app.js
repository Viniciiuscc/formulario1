function addForm(){
    document.getElementById("resultado").innerHTML = ""
    var span = document.createElement("span")

    var inputName = document.getElementById('formName')
    var name = inputName.value

    var inputCity = document.getElementById('iformCity') 
    var city = inputCity.value

    var inputState = document.getElementById('formState')
    var state = inputState.value

    var inputBio = document.getElementById('formBio')
    var bio = inputBio.value

    var inputFile = document.getElementById("formFile")
    var foto = window.URL.createObjectURL(inputFile.files[0])
    
    console.log(name, city, state, bio)

    span.innerHTML = `<p>Foto: <img src="${foto}" /></p> <p>Nome: ${name}.</p> <p>Cidade: ${city + state}</p> <p>Biografia: ${bio}</p>` 

    document.getElementById("resultado").appendChild(span)
        
    
    inputName.value = inputCity.value = inputBio.value = inputState.value = ''
    
}
