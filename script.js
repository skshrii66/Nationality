let url = "https://api.nationalize.io/?name=";

let wrapper = document.getElementById("wrapper");
let data =[]
let name=''


function getProbability(){
    this.name = document.getElementById("name").value;
   
    let finalUrl = url + this.name;
    console.log(this.name);
    console.log(finalUrl);
    wrapper.innerHTML = "";

   
    if (this.name == "")  
    {  
        alert("Please Enter a name");  
       
        return false;  
    } else if(this.name.split(" ").length > 1){
    alert('space is not allowed')
    return
    }

//  console.log(this.name.length > 0 && /^[A-Za-z]+$/.test(this.name));
    if(this.name.length > 0 && /^[A-Za-z]+$/.test(this.name)){ 
     
        fetch(finalUrl)
        .then((resp) => resp.json())
        .then((data) => {
            data=data;
            console.log(data);

            for (let i = 0; i < data?.country.length; i++) {
            for(let j=1;j<=i;j++){

                    // console.log(data.country[i].probability > data.country[j].probability )

                     if(data.country[i].probability > data.country[j].probability){
                     data.country[i].probability = data.country[j].probability
                     console.log(data.country[i].probability > data.country[j].probability )
                }
                }
               
           }

           console.log("data",data.country)

            let div = document.createElement("div");
            div.setAttribute("id", "info");
            div.innerHTML = `<h4 id="country"> Top: Top1 </h4>

                            <h2 id="country-id"> Top Country:1_id: ${data?.country[0]?.country_id}</h2>
                                <h2 id="result-name">${data.name}</h2>
                                    <h4 id="prob"> Probability= ${data?.country[0]?.probability}%</h4>`;
                                    
         wrapper.append(div);

         let div1 = document.createElement("div");
         div1.setAttribute("id", "info");
         div1.innerHTML = `<h4 id="country"> Top: Top2</h4>
                             <h2 id="country-id"> Top Country:2_id: ${data?.country[1]?.country_id}</h2>
                                <h2 id="result-name">${data.name}</h2>
                                    <h4 id="prob"> Probability= ${data?.country[1]?.probability}%</h4>`;
      wrapper.append(div1);

      
        });
    } else{
        console.log(this.name.length > 0 && /^[A-Za-z]+$/.test(this.name));
        alert('pleace enterd a valid name')
    }  


    fetch(finalUrl,{
        method:"GET",
            Headers:{
           "content-Type":"application/json",

        }
    }).then((res)=>{
        
        console.log(res)
    })
}


// var pattern = /\s/g;
// var alert1 = document.getElementById('alert-caps');
// function white(data){
//     console.log(data);
//     var isSpace = pattern.test(data);  
//     if(isSpace){
//         alert( "Space is not allow");
//     }else{
        
//     }
// }