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


const inputFile = document.querySelector('#formFoto')
const pictureImage = document.querySelectorTxt = (".formFoto")
const pictureImageTxt = "foto de perfil"
pictureImage.innerHTML = pictureImageTxt

inputFile.addEventListener("change" , function(e) {
    const inputTarget = e.target
    const file = inputTarget.files[0]

    if(file){
        const reader = new FileReader()

        reader.addEventListener("load", function(e) {
            const readerTarget = e.target

            const img = document.createElement('img')
            img.src = readerTarget.result
            img.classList.add("formFoto")

            pictureImage.innerHTML = ''
            pictureImage.appendChild(img)
        })

        reader.readAsDataURL(file);
    }   else {
        pictureImage.innerHTML = pictureImageTxt
    }
})
