const price = 200;
let tickets = null;
let total = null;
let category = null;

const categories = {
  1:{ percent:80 },
  2:{ percent:50 },
  3:{ percent:15 }
}

document.getElementById('totalTag').innerHTML = `Total a pagar $: `

// ------------ EVENTO TICKET PARA COMPLETAR CAMPOS --------------
const setTicket = (e) => {
  let { value } = e.target;
  if(value == 0){
    return;
  }
  
  const discountPercent = categories[value].percent;

  showTotal(discountPercent);
  
  }

  function showTotal(discountPercent){
    const tickets = document.getElementById('tickets').valueAsNumber;
    if( tickets < 0 || isNaN(tickets) || tickets ===  0||  tickets === null ){ 
      document.getElementById('tickets').value = 0;  //ok
      alert('La cantidad no debe ser cero ni negativa');
      return;
    }
    
    const discountAmount = (tickets * price) * (discountPercent / 100);
    total = (tickets * price) - discountAmount;  //ok
    const totalTag = document.getElementById('totalTag');
     totalTag.innerHTML = `Total a pagar $: ${total}`;

  }
//----------------------- CHECK DE DATOS INGRESADOS -------------------------

const submit = (e) => {
  e.preventDefault();

  const firstname = e.target.firstname.value;
  const lastname = e.target.lastname.value;
  const email = e.target.email.value;
  const tickets = e.target.tickets.valueAsNumber;
  const category = e.target.category.value;

  const verified = {
    firstname: firstname !== '',
    lastname: lastname !== '',
    email: email !== '',
    tickets: tickets !== null && tickets !== 0 && tickets > 0, //retorna false
    category: category !== 'none'
  };
 
  if (Object.values(verified).every(value => value)) {
    showResults();  
    resetForm();      
    alert('Formulario enviado correctamente.');
  } else {
    alert('Debes completar todos los campos.');
  }
 
}

function showResults() {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const tickets = document.getElementById('tickets').valueAsNumber;
  const category = document.getElementById('category').value;

  console.log('Nombre:', firstname);
  console.log('Apellido:', lastname);
  console.log('Correo:', email);
  console.log('Total de tickets:', tickets);
  console.log('Category:', category);
  console.log('Importe:', total);
  }

function resetForm(){
   document.getElementById('firstname').value = '';
   document.getElementById('lastname').value = '';
   document.getElementById('email').value = '';
   document.getElementById('tickets').value= 0;
    document.getElementById('category').value = 0;
    document.getElementById('totalTag').innerHTML = `Total a pagar $: `;
} 

// ---------------CONTROL DE EVENTOS -----------------
const selectCategory = document.getElementById('category');
selectCategory.addEventListener('change', setTicket);

formulario = document.getElementById('formulario');
formulario.addEventListener('submit', submit);

document.getElementById('div1').addEventListener('click', ()=>{
  percent = categories[document.getElementById('category').value].percent;
  showTotal(percent);
});

document.getElementById('div2').addEventListener('click', ()=>{
  percent = categories[document.getElementById('category').value].percent;
  showTotal(percent);
});

document.getElementById('div3').addEventListener('click', ()=>{
  percent = categories[document.getElementById('category').value].percent;
  showTotal(percent);
});



