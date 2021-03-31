
window.addEventListener("load", getcontacts);



async function getcontacts() {


    let contactdata = "";
    try {
        console.log("hi")
        await fetch("https://newaccount1616859934507.freshdesk.com/api/v2/contacts", {
            method: 'GET',
            headers: { 'Authorization': 'Basic ' + btoa('Vzy5CZ2eIxw9wUl5Gi' + ":" + 'X') }
        })
            .then(response => response.json())
            .then(data => {


                contactdata = data

                return data
            }
            );


    }
    catch (err) {
        console.log(err);
    }
    showcontacts(contactdata)


}

let contactjson = ""
let idcalled = ""

function showcontacts(contacts) {

    var displaycontact = document.getElementById("contactbody")
    contacts.map((contact, index) => {

        createcontactslist(contact)


        function createcontactslist(contact) {





            let tr = document.createElement("tr");
            tr.className = `tr${contact.id}`





            let td0 = document.createElement('td')
            td0.className = `td0${contact.id}`
            td0.innerHTML = contact.name

            let td1 = document.createElement('td')
            td1.className = `td1${contact.id}`
            td1.innerHTML = contact.job_title

            let td2 = document.createElement('td')
            td2.className = `td2${contact.id}`
            td2.innerHTML = contact.company_id

            let td3 = document.createElement('td')
            td3.className = `td3${contact.id}`
            td3.innerHTML = contact.email

            let td4 = document.createElement('td')
            td4.className = `td4${contact.id}`
            td4.innerHTML = contact.phone

            let td5 = document.createElement('td')
            td5.className = `td5${contact.id}`
            td5.innerHTML = contact.twitter_id

            let td6 = document.createElement('td')
            td6.className = `td6${contact.id}`
            td6.innerHTML = contact.facebook_id


            let td7 = document.createElement('td')
            td7.className = `td7${contact.id}`




            td7.innerHTML = `<button data-target="#mymodal"  data-toggle="modal" class="updatebtn btn btn-primary" id="btn${contact.id}" >Update</button>`



            tr.append(td0, td1, td2, td3, td4, td5, td6, td7);
            displaycontact.append(tr);





        }






        document.getElementById(`btn${contact.id}`).addEventListener('click', () => {


            idcalled = contact.id




        })




    })




}





function updateform(e) {

e.preventDefault();

    let name = document.getElementById("name").value


    let job_title = document.getElementById("title").value
    let email = document.getElementById("Email").value
    let phone = document.getElementById("phone").value

    let contactobj = {
        name,
        job_title,
        email,
        phone
    }


    document.getElementById("myform").reset();

    contactjson = contactobj

    callapi(contactobj, idcalled);

}

async function callapi(dataset, idval) {


    let ids = +idval

    try {



        console.log("contct")
        await fetch(`https://newaccount1616859934507.freshdesk.com/api/v2/contacts/${ids}`, {
            method: 'PUT',
            headers: {
                'Authorization': 'Basic ' + btoa('Vzy5CZ2eIxw9wUl5Gi' + ":" + 'X'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataset)
        })
            .then(response => response.json())
            .then(data => {
                alert("Contact is updated")


                return data
            }
            );


    }
    catch (err) {
        console.log(err);
    }


}





function adddetails(e) {

e.preventDefault()
    let name = document.getElementById("namecont").value
   let job_title = document.getElementById("titlecont").value
    let email = document.getElementById("Emailcont").value
    let phone = document.getElementById("phonecont").value


    let contactdetails = {
        name,
        job_title,
        email,
        phone

    }



    document.getElementById("contactform").reset();



    contactapi(contactdetails)

}

async function contactapi(datacont) {




    try {



        console.log("contct")
        await fetch(`https://newaccount1616859934507.freshdesk.com/api/v2/contacts`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa('Vzy5CZ2eIxw9wUl5Gi' + ":" + 'X'),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datacont)
        })
            .then(response => response.json())
            .then(data => {
                alert("contact is added ")



                return data
            }
            );


    }
    catch (err) {
        console.log(err);

    }


}



