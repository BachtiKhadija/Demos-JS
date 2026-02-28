let id = 1 ;
let added = document.getElementById('added') ;
let emp = document.querySelector('.emp_table');
let form = document.querySelector('form');
document.querySelector('#ajouter').addEventListener('click',function(){
    if (!form.checkValidity()) {      
        form.reportValidity();         
        return;                    
    }
    let nom = document.querySelector('#nom').value ;
    let email = document.querySelector('#email').value ;
    let departement = document.querySelector('#departement').value ;
    let genre = document.querySelector('input[name="genre"]:checked').value ;
    let comps = document.querySelectorAll('input[name="competences"]:checked');
    let competences = [...comps].map(comp => comp.value); // convert NodeList to array and get values
    emp.innerHTML +=`<tr>
                    <td><i class="bi bi-person-badge text-success"></i> ${id++}</td>
                    <td>${nom}</td>
                    <td>${email}</td>
                    <td class="badge bg-success text-white mt-2 py-1 rounded-3">${departement}</td>
                    <td>${genre}</td>
                    <td>${competences.join(', ')}</td>
                </tr>`
    added.innerHTML = `${nom} ajouté !`;
    added.style.animation='none'; 
    void added.offsetWidth;
    console.log(added.offsetWidth); 
    added.style.animation='valid 4s ease-in-out ';
    form.reset();

})