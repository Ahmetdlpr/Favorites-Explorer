let Searchbutton=document.querySelector(".Searchbutton");
let Searchinput=document.querySelector(".Search");
let inputform=document.querySelector(".inputform");
let List=document.querySelector(".List");
let searchcontainer=document.querySelector(".searchcontainer");
let Appcontainer=document.querySelector(".Appcontainer");
let searchpw=document.querySelector(".searchpw");
let Searchtitle=document.querySelector(".Searchtitle");
let Pageetitle=document.querySelector(".Pageetitle")
searchcontainer.remove();



const searchdata=[
    {
        searchtitle:"Kick",
        link1:'https://kick.com/purplebixi',
        link2:'https://kick.com/kaanflix',
        link3:'https://kick.com/buraksakinol',
        link4:'https://kick.com/cavs',

    },
    {
        searchtitle:"Reddit",
        link1:'https://www.reddit.com/r/ZargoryanGalaksisi/',
        link2:'https://www.reddit.com/r/Turkey/',

    },
    {
        searchtitle:"Youtube",
        link1:'https://www.youtube.com/@NoluyoYaa',
        link2:'https://www.youtube.com/@IShowSpeed',
        link3:'https://www.youtube.com/c/%C3%A7okg%C3%BCzelhareketler',
        link4:'https://www.youtube.com/@HTalksYoutube',
        link5:'https://www.youtube.com/@trthaber',


    }
]


const Search=()=>{


    if(Searchinput.value=="Kick")
        {
            
            Searchinput.value="";
          
            inputform.remove();
        
            Appcontainer.appendChild(searchcontainer);
        
          for(let i=0; i<searchdata.length; i++)
          {
                 if(searchdata[i].searchtitle=="Kick")
                 {
                    Pageetitle.textContent="FavoritesExplorer/"+searchdata[i].searchtitle; 
                    Searchtitle.textContent=searchdata[i].searchtitle;
                     

                       /* Kick link1  */
                         let li1=document.createElement("li");
                         let a1=document.createElement("a");
                         a1.classList.add("Searchlistitem");
                         a1.textContent="Purplebixi";
                         a1.href=searchdata[i].link1;
                         a1.style.textDecoration="none";
                         a1.style.color="white";
        
        
                       /* Kick link2 */
                    
                         let li2=document.createElement("li");
                         let a2=document.createElement("a");
                         a2.classList.add("Searchlistitem");
                         a2.textContent="Kaanflix";
                         a2.href=searchdata[i].link2;
                         a2.style.textDecoration="none";
                         a2.style.color="white";
        

                          /* Kick link3 */
                          let li3=document.createElement("li");
                          let a3=document.createElement("a");
                          a3.classList.add("Searchlistitem");
                          a3.textContent="Buraksakinol";
                          a3.href=searchdata[i].link3;
                          a3.style.textDecoration="none";
                          a3.style.color="white";


                         /* Kick link3 */
                         let li4=document.createElement("li");
                         let a4=document.createElement("a");
                         a4.classList.add("Searchlistitem");
                         a4.textContent="Cavs Karahanlı";
                         a4.href=searchdata[i].link4;
                         a4.style.textDecoration="none";
                         a4.style.color="white";


                         /* Kick link1 add */ 
                         li1.appendChild(a1);
                         List.appendChild(li1);
                        /*  Kick link2 add */ 
                         li2.appendChild(a2);
                         List.appendChild(li2);
                        /* Kick link3  add */ 
                         li3.appendChild(a3);
                         List.appendChild(li3);
                        /* Kick link4  add  */
                         li4.appendChild(a4);
                         List.appendChild(li4);

                        }
                 
          }
        }
        







        if(Searchinput.value=="Reddit")
            {
                Searchinput.value="";
              
                inputform.remove();
            
                Appcontainer.appendChild(searchcontainer);
            
              for(let i=0; i<searchdata.length; i++)
              {
                     if(searchdata[i].searchtitle=="Reddit")
                     {



                        Pageetitle.textContent="FavoritesExplorer/"+searchdata[i].searchtitle; 
                        Searchtitle.textContent=searchdata[i].searchtitle;
                         

                            /* Reddit Link1 */

                             let li1=document.createElement("li");
                             let a1=document.createElement("a");
                             a1.classList.add("Searchlistitem");
                             a1.textContent="Zargoryan Galaksisi";
                             a1.href=searchdata[i].link1;
                             a1.style.textDecoration="none";
                             a1.style.color="white";
            


                            /* Reddit Link2 */
                             let li2=document.createElement("li");
                             let a2=document.createElement("a");
                             a2.classList.add("Searchlistitem");
                             a2.textContent="Reddit/Turkey";
                             a2.href=searchdata[i].link2;
                             a2.style.textDecoration="none";
                             a2.style.color="white";
            



                             li1.appendChild(a1);
                             List.appendChild(li1);
                             li2.appendChild(a2);
                             List.appendChild(li2);
                            }
                     
              }
            }

        
            if(Searchinput.value=="Youtube")
                {
                    
                    Searchinput.value="";
                  
                    inputform.remove();
                
                    Appcontainer.appendChild(searchcontainer);
                
                  for(let i=0; i<searchdata.length; i++)
                  {
                         if(searchdata[i].searchtitle=="Youtube")
                         {
                            Pageetitle.textContent="FavoritesExplorer/"+searchdata[i].searchtitle; 
                            Searchtitle.textContent=searchdata[i].searchtitle;
                             
        
                               /* Youtube link1  */
                                 let li1=document.createElement("li");
                                 let a1=document.createElement("a");
                                 a1.classList.add("Searchlistitem");
                                 a1.textContent="Noluyo ya";
                                 a1.href=searchdata[i].link1;
                                 a1.style.textDecoration="none";
                                 a1.style.color="white";
                
                
                               /* Youtube link2 */
                            
                                 let li2=document.createElement("li");
                                 let a2=document.createElement("a");
                                 a2.classList.add("Searchlistitem");
                                 a2.textContent="IShowSpeed";
                                 a2.href=searchdata[i].link2;
                                 a2.style.textDecoration="none";
                                 a2.style.color="white";
                
        
                                  /* Youtube link3 */
                                  let li3=document.createElement("li");
                                  let a3=document.createElement("a");
                                  a3.classList.add("Searchlistitem");
                                  a3.textContent="Çok güzel hareketler bunlar";
                                  a3.href=searchdata[i].link3;
                                  a3.style.textDecoration="none";
                                  a3.style.color="white";
        
        
                                 /* Youtube link4 */
                                 let li4=document.createElement("li");
                                 let a4=document.createElement("a");
                                 a4.classList.add("Searchlistitem");
                                 a4.textContent="Htalks";
                                 a4.href=searchdata[i].link4;
                                 a4.style.textDecoration="none";
                                 a4.style.color="white";
        

                                 
                                 /* Youtube link5 */
                                 let li5=document.createElement("li");
                                 let a5=document.createElement("a");
                                 a5.classList.add("Searchlistitem");
                                 a5.textContent="Trt haber";
                                 a5.href=searchdata[i].link5;
                                 a5.style.textDecoration="none";
                                 a5.style.color="white";


        
                                 /* Youtube link1 add */ 
                                 li1.appendChild(a1);
                                 List.appendChild(li1);
                                /*  Youtube link2 add */ 
                                 li2.appendChild(a2);
                                 List.appendChild(li2);
                                /* Youtube link3  add */ 
                                 li3.appendChild(a3);
                                 List.appendChild(li3);
                                /* Youtube link4  add  */
                                 li4.appendChild(a4);
                                 List.appendChild(li4);

                                 /* Youtube link5 */ 
                                 li5.appendChild(a5);
                                 List.appendChild(li5);
        
                                }
                         
                  }
                }
                
        
        
        

                
        const Psearch=()=>{
            searchcontainer.remove();
            Appcontainer.appendChild(inputform);
            List.textContent="";
        }


        searchpw.addEventListener("click",Psearch);
}


Searchbutton.addEventListener("click",Search);