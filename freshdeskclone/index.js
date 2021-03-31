
window.addEventListener("load", data);



async function data() {


    let ticketdata = "";
    try {
        console.log("hi")
        await fetch("https://newaccount1616859934507.freshdesk.com/api/v2/tickets", {
            method: 'GET',
            headers: { 'Authorization': 'Basic ' + btoa('Vzy5CZ2eIxw9wUl5Gi' + ":" + 'X') }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)

                ticketdata = data

                return data
            }
            );


    }
    catch (err) {
        console.log(err);
    }
    showtickets(ticketdata)

}



showtickets = tickets => {
    const displaydiv = document.getElementById("dashboard");





    tickets.map((ticket) => {


        let prior = ""
        let status = ""

        switch (ticket.priority) {

            case 1:
                prior = "Low"
                break;
            case 2:
                prior = "Medium"
                break;
            case 3:
                prior = "High"
                break;
            case 4:
                prior = "Urgent"
                break;
            default:
                prior = "none"
                break;

        }

        switch (ticket.status) {


            case 2:
                status = "Open"
                break;
            case 3:
                status = "Pending"
                break;
            case 4:
                status = "Resolved"
                break;
            case 5:
                status = "Closed"
                break;
            default:
                status = "none"
                break;

        }


        creteele(ticket, prior, status);


        function creteele(tic, prior, status) {

            let ele = document.createElement('div')
            ele.className = "card"
            ele.classList.add('boxing')
            ele.id = `cardbox${tic.id}`

            let elehead = document.createElement('h3')
            elehead.className = 'card-header '
            elehead.id = `cardhead${tic.id}`
            elehead.innerHTML = `${tic.subject}`


            let elebody = document.createElement('div')

            let elepara = document.createElement('p')
            elepara.innerHTML = `${tic.created_at}`

            let elepara1 = document.createElement('h4')
            elepara1.innerHTML = `priority:${prior}`

            let elepara2 = document.createElement('h4')
            elepara2.innerHTML = `status:${status}`



                

                let label=document.createElement("label")
                label.setAttribute("name","status")
                label.className="stauslabel"
                label.innerHTML="SELECT STATUS"

                let selectstatus=document.createElement("select")
                selectstatus.setAttribute("name","status")
                selectstatus.id=`statusid${ticket.id}`


                let staopt1=document.createElement('option')
                staopt1.setAttribute("value",2)
                staopt1.id=`opt1${ticket.id}`
                staopt1.innerHTML="Open"

                

                let staopt2=document.createElement('option')
                staopt2.setAttribute("value",3)
                staopt2.innerHTML="Pending"
                staopt2.id=`opt2${ticket.id}`

                

                let staopt3=document.createElement('option')
                staopt3.setAttribute("value",4)
                staopt3.innerHTML="Resolved"
                staopt3.id=`opt3${ticket.id}`

                

                let staopt4=document.createElement('option')
                staopt4.setAttribute("value",5)
                staopt4.innerHTML="Closed"
                staopt4.id=`opt4${ticket.id}`

                

  

          

            let label1=document.createElement("label")
            label1.setAttribute("name","priority")
            label1.className="priorlabel"
            label1.innerHTML="SELECT PRIORITY"

            let selectprior=document.createElement("select")
            selectprior.setAttribute("name","priority")
            selectprior.id=`priorid${ticket.id}`


            let proiropt1=document.createElement('option')
            proiropt1.setAttribute("value",1)
            proiropt1.id=`popt1${ticket.id}`
            proiropt1.innerHTML="Low"

            

            let proiropt2=document.createElement('option')
            proiropt2.setAttribute("value",2)
            proiropt2.id=`popt2${ticket.id}`
            proiropt2.innerHTML="Medium"
            
            let proiropt3=document.createElement('option')
            proiropt3.setAttribute("value",3)
            proiropt3.id=`popt3${ticket.id}`
            proiropt3.innerHTML="High"

            
            let proiropt4=document.createElement('option')
            proiropt4.setAttribute("value",4)
            proiropt4.id=`popt4${ticket.id}`
            proiropt4.innerHTML= "Urgent"

            




        let btn3 = document.createElement('button')
        btn3.className = "btn"
        btn3.classList.add('btn-primary', "bton")
        btn3.id = `update${tic.id}`
        btn3.innerHTML = `Update`



            document.getElementById("dashboard").append(ele);

            ele.append(elehead, elebody);

            selectstatus.append(staopt1,staopt2,staopt3,staopt4)

            selectprior.append(proiropt1,proiropt2,proiropt3,proiropt4)

            elebody.append(elepara, elepara1, elepara2,label,selectstatus, label1,selectprior, btn3);



          
    
           
      

        
    

        }


        document.getElementById(`update${ticket.id}`).addEventListener("click", () => {
   
            let sel=document.getElementById(`statusid${ticket.id}`)
            console.log(sel.value)
            let priority=document.getElementById(`priorid${ticket.id}`)
            console.log(priority.value)

           let priorityval=+(priority.value)
           let selval=+(sel.value)

            let updatadata={

                "priority": priorityval,
                "status": selval
            }

            updateproirydata(updatadata,ticket.id);
        })





        async function updateproirydata(uploaddata,idno) {
            console.log(uploaddata,idno)
            let ids=+idno
            let ticketreq = "";
            try {



               

               



                console.log("hi5")
                await fetch(`https://newaccount1616859934507.freshdesk.com/api/v2/tickets/${ids}`, {
                    method: 'PUT',
                    headers: {
                        'Authorization': 'Basic ' + btoa('Vzy5CZ2eIxw9wUl5Gi' + ":" + 'X'),
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(uploaddata)
                })
                    .then(response => response.json())
                    .then(data => {
                

                        alert("status and priority is updated")



                        return data
                    }
                    );


            }
            catch (err) {
                console.log(err);
            }


        }



    })
}

