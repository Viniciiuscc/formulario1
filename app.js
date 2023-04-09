function addForm(){
    document.getElementById("resultado").innerHTML = ""
    var spam = document.createElement("spam")

    var inputName = document.getElementById('formName')
    var name = inputName.value

    var inputCity = document.getElementById('iformCity') 
    var city = inputCity.value

    var inputState = document.getElementById('formState')
    var state = inputState.value

    var inputBio = document.getElementById('formBio')
    var bio = inputBio.value
    
    console.log(name, city, state, bio)

    spam.innerHTML = `<p>Nome: ${name}.</p> <p>Cidade: ${city + state}</p> <p>Biografia: ${bio}</p>` 

    document.getElementById("resultado").appendChild(spam)
        
    
    inputName.value = inputCity.value = inputBio.value = inputState.value = ''
    
}
