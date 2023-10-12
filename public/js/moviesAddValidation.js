window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    

   const inputTitle = document.querySelector('input#title');
   const inputRating = document.querySelector('input#rating');
   const inputAwards = document.querySelector('input#awards');
   const inputReleaseDate = document.querySelector('input#release_date');
   const inputLength = document.querySelector('input#length');
   const inputGenre = document.querySelector('select#genre_id');



//    inputTitle.focus();

//    inputTitle.addEventListener('input', () =>{
//       console.log(inputTitle.value);
//    })




//   const validateEmptyField = (e) =>{
//     const field = e.target;

//     if(field.value.trim() === ''){
//       field.classList.add('is-invalid');

//     }else{
//      field.classList.remove('is-invalid');
//      field.classList.add('is-valid');

//     }
//   }


// inputTitle.addEventListener('blur', validateEmptyField);
// inputRating.addEventListener('blur', validateEmptyField);
// inputAwards.addEventListener('blur', validateEmptyField);
// inputReleaseDate.addEventListener('blur', validateEmptyField);
// inputLength.addEventListener('blur', validateEmptyField);
// inputGenre.addEventListener('blur', validateEmptyField);














/*******  Formulario ********/
// const createMovie = document.querySelector('form.form');


// createMovie.addEventListener('submit', (e) => {
//     const formFields = [...createMovie.elements];
//     formFields.pop()

//     let areErrors = false;
    
//     for(let field of formFields){
//       if(field.value.trim() === ''){
//         field.classList.add('is-invalid');

//         areErrors = true;
  
//       }else{
//        field.classList.remove('is-invalid');
//        field.classList.add('is-valid');
  
//       }
   
//     }

//     if(areErrors){
//       e.preventDefault();

//     }
      
//   });
  

}