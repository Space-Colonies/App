var sec=0,page=1,fname = 'Bossman',msg='message',movieUrl="",moviePage="", TaskToHandle=1,TaskId="";

var  startValue = 16, initData,id2='537920146';

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  var endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 1000,
    progressColor = "grey";
  const progress = setInterval(() => {
    startValue+=0.001;
    progressValue.textContent =Number.parseFloat(startValue).toFixed(3); 
    progressValue.style.color = progressColor;

    innerCircle.style.backgroundColor = "#2e2e2e";
    progressBar.style.background = 'conic-gradient('+progressColor +','+startValue * (360/endValue)+'deg,#3e3e3e 0)';
    
    /*progressBar.style.background = 'conic-gradient(${progressColor} ${
      startValue * (360/endValue)
    }deg,darkgrey 0deg)';
    */
  }, speed);
});
 
//const tmer =setInterval(txt, 1000);

async function initfunc()
{
    try{   
    fname='Spacecoins';
      document.getElementById('ic').innerHTML =fname[0];
      document.getElementById('nm').innerHTML ="Hi, "+fname;
     
Telegram.WebApp.ready(); 
      await lditemsdebug();   
      window.Telegram.WebApp.themeParams.text_color= '#9e9e9e';
      window.Telegram.WebApp.setHeaderColor('#1e1e1e');
      //Telegram.WebApp.setBottomBarColor('#2e2e2e');
      //Telegram.WebApp.setBackgroundColor('#2e2e2e');
          
     Telegram.WebApp.disableVerticalSwipes(); 
     //initData= Telegram.WebApp.initData;    
     id2 =  window.Telegram.WebApp.initDataUnsafe.user.id;
      fname= window.Telegram.WebApp.initDataUnsafe.user.first_name;
              
                                                         
      //setTimeout(getdt, 8000);
         
      document.getElementById('ic').innerHTML =fname[0];
      document.getElementById('nm').innerHTML ="Hi, "+fname;
     
      setInterval(txt,10000);                                               
       
    }catch(er){showAlert(er);}              
}
    
  
async function txt(){   
         
        sec =startValue; 
      
       if(sec>=86) {startValue=0;   uu.autofarm +=86;}
      
         document.getElementById('auto').innerHTML ='Bot $Spacecoins : '+uu.autofarm;
             document.getElementById('tc').innerHTML ="Task $Spacecoins : "+uu.TaskCoins;
                          
         // document.getElementById('ic').innerHTML =fname[0];
     document.getElementById('nm').innerHTML ="Hi, "+fname;
  
}
 


function closePopUp()
{
   ppp.style.display= "none";
}
function scrl2(el){
  //el.scrollIntoView(
 /*{ behavior: "smooth",
  block: "start", 
  inline: "nearest"}*/
//);
  header.scrollIntoView();
}
function pageld(e){
    // alert("ffffff");
 if(e.id=="p1b") 
     {
     ppp.style.display= "none";
     p1.style.display= "block";
     p2.style.display= "none";
     p3.style.display= "none";
    // ppp.style.display= "none";
       header.textContent="HOME";
    scrl2(p1);   
       

     }
     else if(e.id=="p4b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "block";
     p3.style.display= "none";
       header.textContent="TASKS";
       scrl2(p2);
      settsk(); 
    // ppp.style.display= "none";
     }
  else if(e.id=="p5b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "block";
     p3.style.display= "none";
       header.textContent="FREQUENTLY ASKED QUESTIONS";
       scrl2(p2);
      setpg(); 
    //ppp.style.display= "none";
     }
     else if(e.id=="p3b") 
     {
     ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "none";
     p3.style.display= "flex";
       header.textContent="ABOUT";
       document.getElementById("txt9").innerHTML=aa;
       scrl2(p3);
    
       
     }
    else if(e.id=="p2b") 
     {
       
       showAlert("Sorry, this page isn't available yet." );
      
     }
}
 function showpops(ms,b1,b2,height,task)
{
     msg=ms;
          document.getElementById('bt1').innerHTML =b1;
          document.getElementById('bt2').innerHTML =b2;
          document.getElementById('pop').innerHTML =msg;
          ppp.style.height= height;
          ppp.style.display= "flex";            
}

   





function showinvite(e)
{
          TaskToHandle= 5;TaskId="";
          msg='Get unlimited $Spacecoins inviting as many frens as you can. Each invite earns you 10 $Spacecoins per new user. You can copy your referral link below.';
    document.getElementById('bt1').innerHTML ='Copy referal link to clipboard';
    document.getElementById('bt2').innerHTML ='Share referral link';          
    document.getElementById('pop').innerHTML =msg;
          ppp.style.height= '80%';
          ppp.style.display= "flex";            
}

function ShowAd(e)
{
     TaskToHandle= 2;TaskId="";
    msg="Claim 1000 $Spacecoins per ad viewed. If you don't have Colonies app installed already, you will have to download and install it first which will give you access to  10,000 $Spacecoins for first time installation of my Android game after you watch your first ad.";
  document.getElementById('bt1').innerHTML ='Claim $Spacecoins for ads watched';
    document.getElementById('bt2').innerHTML ='Download Colonies app';
  document.getElementById('pop').innerHTML =msg;
  ppp.style.height= '90%';     
  ppp.style.display= "flex";       
          
}

function Showapp(e)
{
     TaskToHandle= 3;TaskId=e.id;
    msg="Download Colonies Android app to earn 1000 $Spacecoins each time you watch an ad.";
          document.getElementById('bt1').innerHTML ='Download app now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
     ppp.style.height= '80%';     
    ppp.style.display= "flex";       
          
}

function Showtg(e)
{
     TaskToHandle= 4;TaskId=e.id;
    msg="Join Telegram group to earn 1000 $Spacecoins. ";
          document.getElementById('bt1').innerHTML ='Join Telegram group now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
    ppp.style.height= '90%';     
    ppp.style.display= "flex";       
          
}
function Showtc(e)
{
     TaskToHandle= 6;TaskId=e.id;
    msg="Subscribe to Telegram channel to earn 1000 $Spacecoins.";
    document.getElementById('bt1').innerHTML ='Subscribe to channel now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
    ppp.style.height= '70%';     
    ppp.style.display= "flex";       
  
}
function Showyt(e)
{
     TaskToHandle= 7;TaskId=e.id;
    msg="Watch a Youtube video to earn 100 $Spacecoins.";
    document.getElementById('bt1').innerHTML ='Watch video now';
    document.getElementById('bt2').innerHTML ='May be later';          
    document.getElementById('pop').innerHTML =msg;          
    ppp.style.height= '70%';     
    ppp.style.display= "flex";       
  
}
 
var link2open,closeapp=false;
function openApp(browser)
{  
  let br=[  'default','chrome','firefox','safari','opera' ];
 /* if(link2open.includes('maniadl') )
  {
     if(uu.TaskCoins >=300000)
            {
             uu.TaskCoins-=200000; 
           // Telegram.WebApp.openLink(v  ,{try_browser:'chrome'});
              savedebug();
            }else{ showAlert("Not enough Task $Spacecoins. Watch ad or carryout some other tasks and try again." ); return;}
     
  }
  
  if(browser==0){ Telegram.WebApp.openLink(link2open,{try_instant_view:false});}
  else if(link2open.includes('mc2025.mc') ){link2open= link2open.replace('http://mc2025.mc/','https://movizbot.github.io/a');  Telegram.WebApp.openLink(link2open,{try_browser:br[browser]});}
  else{ Telegram.WebApp.openLink(link2open,{try_browser:br[browser]});  }
  */
  Telegram.WebApp.openLink(link2open,{try_browser:br[1]});  
  if(closeapp) setTimeout(close,30000);
  
}


function closeOptions(){ appotions.style.display='none';}
 async function HandleTask(e)
{ 
          if(e==bt1){
    if(TaskToHandle==1)
          { 
           link2open=movieUrl;
            //ldvid(movieUrl);
          }   
   else if(TaskToHandle==2)
          { 
                    
       // u[0].rwd= 'Sani'; let str=  JSON.stringify(u[0]);
           uu.rwd= fname;uu.ask1= new Date().getTime().toString(); 
            let str= uu.autofarm +'-'+ uu.TaskCoins +'-'+ uu.refId +'-'+ uu.Ref +'-'+ uu.ask1 +'-'+ uu.rwd +'-'+ uu.yts +'-'+ new Date(uu.signUpdt).toLocaleDateString()+'-'+ new Date(uu.activedt).toLocaleDateString() +'-'+ new Date(uu.lastLogindt).toLocaleDateString();

            //let str= JSON.stringify(uu);
         savedebug();
            let st="https://space-colonies.github.io/d/?action="+ "mbadsd_"+ str;// +"#Intent;scheme=mc;package=com.mcgames.mcapp;end";
            //let st="<a href='intent://mc2025.mc/ytvid#Intent;scheme=mc;package=com.mcgames.mcapp;end'> Watch ad now</a>";
      link2open=st;closeapp=true;
          }   
  else if(TaskToHandle==3)
          { 
                    //Telegram.WebApp.openLink('https://sundayib.github.io/P/',{try_instant_view:false});
            //link2open='https://mcoin2025.github.io/Apps/Downloads/';
            Telegram.WebApp.openTelegramLink('https://t.me/spacecoloniesc');
              return;
          }   
  else if(TaskToHandle==4)
          { if(!uu.others.includes('grp')){uu.others=uu.others+ 'grp'; uu.TaskCoins +=1000;savedebug();}
            
         Telegram.WebApp.openTelegramLink('https://t.me/spacecolonies');
              
            
                return;
          }
  else if(TaskToHandle==5)
          { 
            let code= await getrefcode();
                    navigator.clipboard.writeText(code);
                    showAlert('Referral link has been copied to clipboard.');
            uu.refId= code;
            savedebug();return;
          }
    else if(TaskToHandle==6)
            { 
              if(!uu.others.includes('chch')){ uu.others=uu.others+ 'chch'; uu.TaskCoins +=100000;savedebug();}
             Telegram.WebApp.openTelegramLink('https://t.me/spacecoloniesc');
            
               
              return;
            }
            else if(TaskToHandle==7)
          { 
                    
           uu.rwd= fname;uu.ask1= new Date().getTime().toString(); 
            let str= uu.autofarm +'-'+ uu.TaskCoins +'-'+ uu.refId +'-'+ uu.Ref +'-'+ uu.ask1 +'-'+ uu.rwd +'-'+ uu.yts +'-'+ new Date(uu.signUpdt).toLocaleDateString()+'-'+ new Date(uu.activedt).toLocaleDateString() +'-'+ new Date(uu.lastLogindt).toLocaleDateString();

            //let str= JSON.stringify(uu);
         savedebug();
            let st="https://space-colonies.github.io/d/?action=ytvidd_"+ str;// +"#Intent;scheme=mc;package=com.mcgames.mcapp;end";
           link2open=st; closeapp=true;
          }   
          else
          { 
                    showAlert('Task is empty '+TaskToHandle);
            return;
          }   
          }
          else
          {
             if(TaskToHandle==1)
          { 
            link2open=moviePage;
            
          }   
   else if(TaskToHandle==2)
          { 
                    
            
            Telegram.WebApp.openTelegramLink('https://t.me/spacecoloniesc');
              return;
          }  
        else if(TaskToHandle==5)
          { 
            
            Telegram.WebApp.openTelegramLink('https://t.me/share/url?url='+uu.refId+'&text=You are invited to join Colonies today to start earning some Spacecoins.');
            return;
          }      
  else 
          { 
            ppp.style.display= "none";return;
          }   
            
          }
 // appotions.style.display='flex';
  openApp(1);
  ppp.style.display= "none";
}


//HOME ENDS

 async function getdt()
{
          
var weekdt = new Date("5/August/2025 20:30:00");
var now = new Date();
          
 if(weekdt.getTime()>now.getTime() || now.getTime()- weekdt.getTime()> 2580000000){ showAlert("Your phone date is not correct. Set it and try again. The app will close automatically."); close(); return;}
  if(now.getTime() - (new Date(uu.lastLogindt).getTime()) > 2752000000 ) { uu.autofarm=0; uu.activedt=now.toISOString(); showAlert("It has been more than 30 days since your last login and because of this your bot coin has reset to zero. To avoid similar situation, try to login at least once every 30 days." )} 
 uu.lastLogindt=now.toString();
       
  /*save("uu.lastLogindt",now.toString()); */
           
    if(new Date( uu.signUpdt).getTime() > now.getTime) uu.signUpdt=now.toString();
         
          let d = new Date();
let h = d.getHours() * 3600;
let m = d.getMinutes() * 60;
 //sec = d.getSeconds() + h  + m; 
      startValue =  d.getSeconds() + h  + m;   
          var diff = now.getTime() - uu.activedt.getTime();
    uu.autofarm= (Math.floor((diff )/ (1000)) - startValue)/1000;
  if(uu.autofarm<0)uu.autofarm=0;
 startValue=startValue/1000;
}       
    

const nameOf = async(v) =>(v).toString().replace(/[ |\(\)=>]/g,'').substring(5);
  var u=[];// [u1,u2,u3,u4,u5,u6];
  function user(autofarm,TaskCoins ,refId,Ref,ask1,rwd,yts,signUpdt,activedt,lastLogindt,install,vidshare,others)
  { 
    this.autofarm=autofarm;
    this.TaskCoins=TaskCoins;
    this.refId=refId;
    this.Ref=Ref;
    this.ask1=ask1;
    this.rwd=rwd;
    this.yts=yts;
    this.signUpdt=signUpdt;
    this.activedt=activedt;
    this.lastLogindt= lastLogindt;  
    this.install = install;  
    this.vidshare = vidshare;  
    this.others = others;                                                   
                               
  }
  async function  savedebug(key,value)
{
          try{
         
            let saver ="";
            try{saver=JSON.stringify(uu); }catch(x){/*showAlert(x);*/}           
Telegram.WebApp.CloudStorage.setItem('data2', saver, function(err, saved) {
                if (err) 
                   {
                     showAlert('Error: ' + err);
                   } 
           else {
                    if (saved)
                   {
                       //showAlert('saved');
                    }
                    
                }
            });
          } catch(err){ showAlert("Error saving : "+err);}
    }
  
  function nu()
  {
    u[0]=new user(60,0 ,'y','q','6ask',60,60,new Date().toString(),new Date().toString(),new Date().toString(),0, new Date(2025-03-10).toString(),'6k');
  }
  var uu;
  async function cloud(x){uu=u[0];savedebug();}
   //async function cloud(){ alert(await nameOf(()=>u[0].signUpdt) +'  '+  u1.signUpdt); }
  async function  lditemsdebug() {
            let res='';
                    Telegram.WebApp.CloudStorage.getItem("data2", await async function(err, value) {
                      let save=false;
                            if (err) {
                                showAlert('Error reading from cloud: ' + err);
                                      //for (let i=0;i<keys.length;i++)save(keys[i],"z");
                            } else {
                        
                       if(value.length<20){save=true; value= JSON.stringify(u[0]); let NoRef= await getQuery(true);if(NoRef)return; showAlert("Welcome! Try to install Colonies android app and any of my other app  or both to get your welcome bonus of  10,000 $Spacecoins after watching your first ad." ); }   
    uu=JSON.parse(value);
    uu.signUpdt =new Date(uu.signUpdt);
    uu.activedt =new Date(uu.activedt);
    uu.lastLogindt =new Date(uu.lastLogindt);
                              
                         for(let prop in uu)
                              { 
                      if(uu[prop].toString().length >0){ }     
                      else if(prop.toString()=="TaskCoins"){ uu[prop]=0;}
                      else if(prop.toString()=="refId"){ /*uu[prop]=getrefcode();*/}
                      else if(prop.toString()=="ref"){/*uu[prop]="noref";*/}
                      else if(prop.toString()=="ask1"){ /*uu[prop]="nil";*/}
                      else if(prop.toString()=="rwd"){ uu[prop]=0;}
                      else if(prop.toString()=="yts"){uu[prop]=0; }
                      else if(prop.toString()=="signUpdt"){ uu[prop]=new Date();}
                      else if(prop.toString()=="activedt"){ uu[prop]=new Date();}
                      else if(prop.toString()=="lastLogindt"){ uu[prop]=new Date();}
                                
                         //  res=res+' <obj>' +prop +' = '+uu[prop]+'</obj>' ;       
                         }
                              //document.getElementById('ff').innerHTML=res;
                              //if(save){setTimeout( savedebug,5000);   alert(save.toString());
                            }
                       getQuery();
                            //}
                           
                        });
    
                  
        }
  function tttoo(p4,p5){
      movIndex =p4; 
     let i=Number(p5); let urll= lis[i].HLink.replace("dlmania","maniadl" );
      showAlert(urll);    ldvid(urll);ShowMovieList(); scrl2(lis[i].Hid);
      
    }
async function getQuery(isref=false)
{
 //Params = new URLSearchParams(window.location.search);
   try{
  let Params = /*"RSsFYFYAM2RSsdZduSRSsFdw4ERan1LVPsiVzndy673e2ed";//*/Telegram.WebApp.initDataUnsafe.start_param;
  if(Params.includes('dy673e2ed')){Params=Params.replace('dy673e2ed','');  Params=dec(Params);   }
    // alert(Params);
     if(Params.includes('ask181890'))
          {
          //  alert('ask181890');
           let [p1,p2,p3]= Params.split("-") ; 
           //alert(p3);
            if(uu.ask1 == p3)  
           {
             //alert('awarded');
              Award(p2*100) ;
             if(p1.includes(  "ytvid"))showAlert("You've earned "+(p2*100)+ "$Spacecoins for watching a video. " );else showAlert("You've earned "+(p2*100)+ "$Spacecoins for watching ads." );
              if(uu.yts<10 ){Award( 2000);
                  uu.yts=2000; showAlert("Congratulations! You have been awarded 2,000 $Spacecoins for installing my app.");}            
             
           } else  showAlert("To get rewarded for a task, you need to start it from the task section. ");                             
          }
     /*else if(Params.includes('yts'))
  {
    let [p1,p2]= Params.split("-");
    
    //if(vidCodes.includes(p2))Award( 200000);
  }*/
        else if(Params.includes('reference' ))
  {
    
     
  
    if(uu.Ref === 'q')
    {
     
      let refcode=Params.substring(Params.lastIndexOf('_')+1);   //.split('_')[1];
      
      if(refcode.includes('-')) refcode=refcode.slice(0,refcode.indexOf('-'));
      
    let code= await getrefcode(false); //uu.refId= code;
      
    //if(! code.includes(refcode))
      {uu.Ref= refcode;
      await sendMsg(code+'===='+refcode );
        //alert('sent ref  ');
      }
  }
                               
  }  else{if (isref){ showAlert("Sorry, you need a referral link to join Colonies.");return true; uu.Ref='noref' ;}}
     if(uu.Ref.length < 4 && Params.length<3)uu.Ref='noref';
    }catch(x){ /*alert(x);*/
  }
  
     if(uu.refId.length<3)uu.refId= await getrefcode();
  //uu.lastLogindt=new Date();    
     getdt(); savedebug();   
}


  var en='KeWoVaQn5x';
async function getrefcode(url=true)
{   let n='',id2= window.Telegram.WebApp.initDataUnsafe.user.id.toString();
        //showAlert(id2);
  for(let i=0;i<id2.length;i++)
    {
   n=n+ en[id2[i]];
    }
  let res= '';
  if(url)res='http://t.me/Space_Colonies_bot/Colonies?startapp=reference_' + n;
  else res=n;
  return res;
}

  
  function deldebug(){
    
  Telegram.WebApp.CloudStorage.removeItem('data2', function(err, deleted) {
                if (err) {
                  showAlert('Error: ' + err);
                } else {
                    if (deleted) {showAlert('deleted');return; }
                  
                }
  });
  
}
  
  nu();
 //lditemsdebug();
   

function Award(am)
{
  uu.TaskCoins+=am;
  
}

function showAlert(message) {
         //alert(message);
          //  Telegram.WebApp.showAlert( 'message);
  
  Telegram.WebApp.showPopup({
                title  : 'Colonies',
                message: message,
                buttons: [
                    
    {id: 'faq', type: 'default', text: 'Ok'},
                    {type: 'cancel'},
                ]
            }, function (buttonId) { }
  );
  
  
  
  
}

 function tsk(ic,title,desc,click,id=0)
{
  this.ic=ic;
  this.title=title;
  this.desc=desc;
  this.click=click;
  this.id=id;
  
  let txt='Go',col= ' grey';
  if(click.length <2) {txt='done';col=' grey';}
 let temp=  '<div class="ncontainerT">'
  +'<div class="dv1" >'
            +'<div class="dv2">'+ic +'</div>'
         +'</div>'
        +'<div class="dv3" >'
          +'<div style=" font-size: 24px; ">'+ title + '</div>'
              +'<div>'+desc+'</div>'
           +'</div>'
          +'<button id="'+id+'" class="bt" style="color:'+ col +'"  onclick="'+click+'(this );">'+txt+'</button>'
     +'</div>';
   let b=document.getElementById("p2").innerHTML +temp;
    document.getElementById("p2").innerHTML=b;
        
  
}

 function settsk()
{
  document.getElementById("p2").innerHTML="";
  
  tsk('F','Frens Invite','Invite frens to earn unlimited $Spacecoins','showinvite');
  tsk('A','Android App',' Download app from channel','Showapp');
  tsk('G','TG Group ','Join TG group to earn 100 $Spacecoins','Showtg');
  tsk('C','TG Channel','Subscribe to Telegram channel to earn 100 $Spacecoins','Showtc');
  tsk('R','Reward claiming','Claim your mobile ads reward ','ShowAd');
  tsk('Y','YouTube Vids','Earn 100 $Spacecoins per YT video watched','Showyt');
  tsk('X','Follow on X','Earn 100 $Spacecoins for  following me on X','vsharein4');
  //tsk('X','Follow on X','Earn 500,000 $Spacecoins for video share','vsharein4');
  
}


var titles=[ 'one', 'two', 'three', 'four', 'five', 'six', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ','thirteen ', 'fourteen ', 'fifteen ', 'sixteen ','seventeen ', 'eighteen ', 'nineteen ','twenty', 'twenty one','twenty two ', 'twenty three ', 'twenty four ', 'twenty five ','twenty six ', 'twenty seven ', 'twenty eight ', 'twenty nine ','thirty ', 'thirty one', 'thirty two', 'thirty three ','thirty four ', 'thirty five ', 'thirty six ', 'thirty seven ','thirty eight ', 'thirty nine ', 'forty ', 'forty one ','forty two ','forty three ','forty four ','forty five ','forty six '] ;

 

 function setpg()
{
  document.getElementById("p2").innerHTML= 
  '<f>What is the value of Spacecoin?  </br>Spacecoin is a stable token that will always remain a little value above USD.</f>'
+ '<f>Why are you giving away so much tokens and can you afford to pay users when you succeeded? </br>I am giving away so much as a way of advertising the platform because I do not have many users and I can not afford advertising at the moment. It also makes sense to give away this much at this point where I do not even have an illustrative video to present my idea to users. Users are blindly taking high risk of trusting me by carrying out tasks at the moment and I feel that higher risk taking deserves higher compensation. A time will come when I will drastically reduce the rewards for example after an illustrative video has been released or after getting the first investor. You should also know that only a tiny fraction of your Spacecoins will be withdrawable to cash at launch and may even be based on periodic (especially monthly) withdrawals. The remaining fraction will be converted to Spacepoints.</f>'
+ '<f>What is Spacepoints?  </br>Spacepoint is a token that holds the same value as Spacecoin but it can not be withdrawn as cash. Instead, you can use it for national, international and interplanetary travels as well as spending on the e-commerce platform that will be integrated in the future. </f> '
+ '<f>When is the launching date?  </br>Launching date depends on the number of active users on the platform and the amount I am able to raise.  </br>My first target is to raise $2,000 for patent filing fee and this could be raised in less than a month if I had 100,000 users who would each watch about ten ads from my android app. </br>After making a video illustration, the chances of getting investors would be high but I will assume that there will be no investors. At this stage, I will need around $2,000,000 to build a prototype of the spacetrain. If I had ten million users who would each watch 30 ads a month, I would be able to raise $2,000,000 between two to five months. Assembling the first prototype of the spacetrain could be done in less than six months.</br>So if I had up to ten million users, launching may be between ten to twelve months if I had no investors before a prototype is built.</f>'
 +'<f> Am I required to make any deposit or pay for gas fee before airdrop? </br>No, you only need to participate in carrying out tasks. </br> </f> '
   +'<f>Am I required to login daily, weekly or monthly? </br> You are required to carry out at least one task every 30 days to keep your space bot active failure to which your bot $Spacecoins will be cleared but your task $Spacecoins will remain unaffected. </br> </f>' 
  +'<f> For how long do I have to participate before getting qualified for airdrop? </br>There is no time frame but the earlier you participate,the better the chance of bigger airdrop.</br></f>'
   +'<f>What is the easiest way to earn Spacecoins?</br> The easiest way is through referral which gives you 10 $Spacecoins for every new user that uses your referral link. </br></f>';  
  
}

function pld(e)
{
  
  
}
//PAGE 3
var lis = ﻿[];
const getJSON = async url => {
  const response = await fetch(url);
  if(!response.ok)  showAlert("Error : "+response.statusText);
  const data = response.json();
  return data;
  }

  var fl=1, url2="https://sundayib.github.io/Mtest/D/";
 async function glis(url)
{
  
  getJSON(url).then(data => {
 //alert(data);
    lis=data;movIndex=0;
    ShowMovieList(); 
}).catch(error => {
  showAlert(error);
});
 }





function get(url){
    showAlert(url.id);
}
 var movIndex=0;
 
 function ini( tit, des,img,len,hre='tttt',lre, hsi,lsi,Lid ,Hid)
{
    this.tit=tit;
    this.des=des;
    this.img=img;
    this.len=len;
    this.hre=hre;
    this.lre=lre;
    this.hsi=hsi;
    this.lsi=lsi;
    this.Lid=Lid;
    this.Hid=Hid;
    
    
    
    
    var temp = '<div id='+ Hid+' class="frame">'
        +'<div id="tit" style="font-size:5vh; margin: 20px"> '+tit+'</div>'
 //+'<img src='+img+ ' style="height: 50vh; width:38vh;"/>'
 +'<div id="len"style="font-size:4vh"> Duration : '+len+ '</div>'
      +'<div id="des"style="font-size: 3vh; margin-left: 20px; margin-right: 20px"> DESCRIPTION :'+ des +' </div>'
     +'<button class="bt3" style="color:  grey;background: #101010;border:1px solid  grey;" onclick="shareMovie(this);" id="share" name= '+Hid+'>Share Video </button>'
  
  +'<button class="bt3" style="color:  grey;background: #101010;border:1px solid  grey;" onclick="showmovie(this);" id='+hre+' name= '+Hid+'>Watch or download ('+hsi+')</button>'
  +'<button class="bt3" style="color: #101010;background:  grey;border:1px solid  grey;" onclick="showmovie(this);" id='+lre+' name= '+Lid+'>Watch or download ('+lsi+')</button>'
  
  +'</div>';
        let b=document.getElementById("p3content").innerHTML +temp;
    document.getElementById("p3content").innerHTML=b;
  
}

 function ShowMovieList()
{
    ppp.style.display= "none";
     p1.style.display= "none";
     p2.style.display= "none";
     p3.style.display= "block";
       scrl2(p3);
    let x = 0;
    if(movIndex +10 <lis.length)x = movIndex +10;
    else x=lis.length;
     if(x>0)
    {
  document.getElementById("p3content").innerHTML= "  ";      
    for(let i= movIndex;i< x;i++)  
    {
              //"VidImgs\\"+lis[i].Lid+".jpg"
   ini(lis[i].Tit,lis[i].Des, gtim(lis[i].Lid),lis[i].Length,lis[i].HLink,lis[i].LLink,lis[i].HSize,lis[i].LSize,lis[i].Lid , lis[i].Hid);
    }
    }
     
    
}

 function gtim(str)
{
  let p=  " ";  //"http://daib.github.io/P/img/"+str+".jpg";
  return p;
}
 
 async function nex()
{
  
     // if(movIndex==lis.length-9) { if(fl<45){fl=fl+1; await glis(url2+ "List"+fl+".json");movIndex= 0;ShowMovieList(); return;} showAlert("End of page reached"); }
     
  if(movIndex +10 <lis.length) movIndex+=10; else {movIndex=lis.length-9; showAlert("End of page reached. Go to pages section to load more movies."); }
    ShowMovieList();   
}
 async function prev()
{
   if(movIndex>=10)
    {
       movIndex= movIndex-10;
     ShowMovieList();   
      
    }
    else //{ if(fl>0){fl=fl-1; await glis(url2+ "List"+fl+".json"); movIndex= lis.length-9;ShowMovieList();  return;} }
      showAlert("You are already on the first page.");
}

var g17 = "ttt2", a17 = "OdRXDTEL79gzAwmiyVK3j0Zs4PN5l6GCxoSIkBe28bfpunqaMYWUrQ1cvhHt-JF_", c17 = "_H3jUo1hTAOqpPe-CtDZGM5SfwkI6vNcmzQXsBrLYng4ulJR7yE8axFKWiV2b09d",yybb="iMM2r7++.2LaM9g9vA.WaSAv+_SMuxYFwwVVVx7QQcWPWSz6/Vki.AKl84fsOjoqQnrnWTfMFv+r95lb9rr.v9";
        function enco( en) { let f = ""; for (let i = 0; i < en.length; i++) { f = f + (c17[a17.indexOf(en[i])]); } return f + ObsString(); }
        function dec( de) { let f = ""; for (let i = 0; i < de.length; i++) { f = f + (a17[c17.indexOf(de[i])]); } return f.slice(0,f.lastIndexOf('-')); }
        function rnd(min, max) { return Math.floor(Math.random() * (max - min) ) + min;}     
       
        function ObsString()
        {
            let ez = "",e=[];
            for (let i = 0; i < 15; i++) { e[i]=rnd(0, a17.length ); }
            for (let i = 0; i < e.length; i++) ez = ez + a17[e[i]];
            ez= ez.replace(/b/g,"w");ez=ez.replace(/B/g,"x");
            return c17[a17.indexOf('-')] + ez;
        }
  

 async function sendMsg(rf)
{
 //alert("started");
const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'User-Agent': 'Telegram',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    text: rf,
    chat_id: '-1002278007970',
    
    disable_web_page_preview: true,
    disable_notification: true
    
  })
};
//det();
 await fetch( (t81+t83), options)
  .then(res => res.json())
  .then(res =>{/* let t=''; for(prop in res) t=t+'<c style="display:block">'+prop+' : ' +res[prop]+'</c>';  document.getElementById('ff').innerHTML=t*/})
  .catch(err => alert(err +  '   '+ t81+t83));
  
}
let t81='https://api.telegram.org/bo',t83='t7804298505:AAETQ_UsQGUlmxdzqcp_H9lE015NAurOvAQ/sendMessage',t84='9lE015NAurOvAQ/sendMessage',t85='',t86='',t87='';
const aa = "<p>I am Sunday Ibrahim, just a regular person like most struggling Nigerians who work hard day after day to cater for their needs. </p>"
          +"</br><p>EDUCATION </br> I did not get the privilege of acquiring a college degree or relevant educational qualification like most people and I know this will raise lots of questions about the integrity of the technology I want to talk about later but it is up to you to trust me or not. </p>"
        +"<p>PHYSICAL QUALITIES </br>I am one weird kind of a person who is currently in extreme poverty. In fact I couldn't afford a decent second hand PC to build my apps so I used my old scrappy Huawe Honor phone to write all the codes of my Android apps as well as for this mini app. "
      +"</p>  <p>You can call me one-man-one-dress kind of person. So if you are that type who is usually attracted to only glittery things and love to judge a book by the cover, then you are probably in the wrong place because I have nothing in my resume to prove that I have invented the most powerful and fastest moving object ever created by man.</p> "
   +"<p>Most times I eat just once a day and go to bed with empty stomach. I do not socialize or even know how to build a friendly relationship with people but I am very happy with that because that is one of the things that made me different from millions of other people. </p><p>I don't really know how to communicate effectively to convince people of my ideas and showing off / competition or struggle for power isn't my lifestyle. I always wanted to just have a peaceful quiet life away from all the noise in the world but I finally realized that I can't outsmart my destiny."
 +"</p><p>I realized that keeping my ideas to myself is not only responsible for my current state of poverty but also for millions of people around the world and even the generation that is still to come because I don't really know whether, in a century or two, there could be someone like me willing to give up their quiet life for the world to be a better place.  "
 +"</p><p>   I don't really think I am the only person with the best ideas of solving world economic problems but the problem of my kinds is that we are not easily motivated by material things or what pleases others like fame and power. Rather, we treasure our privacy above all other things. Sometimes I used to think that if God in his infinite mercies and generosity would deliberately refuse to solve some of the problems of humanity, why should a mere human being like myself even care to do so and that it would be better to take my ideas to the grave with me than share them with humanity.  "
  +"</p><p>Due to my personal experience, I do believe that there have been many before me with probably better ideas but chose to keep it to themselves. It is very hard for normal people, who would do anything to be famous, to believe there could people who are not willing to share their talents but this is the world and weird things happen. </p><p>THE PROJECT </br>Colonies is a platform I intend to use to raise fund for building the first prototype of Spacetrain - a newly invented spacecraft that had been laying idle for fourteen years. Of course I never made mention of it or attempt to directly raise funds for it until 2023.  "
 +"</p> <p>The Spacetrain uses a new kind of propulsion technology which outperforms any existing propulsion technique. It is at least ten thousand times more powerful and efficient than spacecrafts powered by ion thrusters. It uses spring thrusters. Electric motor(s) compress the springs and when the pressure is lifted the thrusters decompress and provide thrust for the vehicle. This is the foundation on which the spring propulsion technology is built. </p><p>Since space is a vacuum with nothing to hold on to or push against traditional rockets eject mass to propel themselves whereas  spring spacecrafts use spring compression and decompression to provide thrust.  Sliding technique may also be employed but may not be a necessity. </p>" 
 +"<p>Despite the views of many rocket engineers and physicists who due to limited knowledge believed that spaceships with capability of escaping Earth's gravity can never be 100% electric, without ejecting some mass, the Spacetrain is going to be 100% electric ( propellantless ) and the first spaceship that is closest to modern spaceships seen in sci-fis.</p><p>    BOTTOM LINE </br>Aircrafts and rockets will become obsolete after the Spacetrain is built and Spacetrain is not a traditional rocket that would take forever in development.</p> "
 +"<p> Spacetrain development and time to market can be less than two years since any spacecraft that can make 50 round trips to Mars should be able to gain reputation and be proven safe for commercialization but governments have the final say in that.</p><p></p>A Spacetrain can make 50 round trips to Mars in less than four months ( service and maintenance time inclusive ) while a traditional rocket will take one hundred years to complete such a task, assuming its life cycle can survive such a mission. </p><p>MARS COLONIZATION </br>"
 +"I already have my Martian architectural plan in my head and the only thing I am waiting for is resources to begin implementation. That starts with a prototype of the Spacetrain. If Colonies succeeded, I'm confident that at the very least, there will be a hundred million people living comfortably on Mars besides other mini or temporary extraterrestrial bases in the Solar system by the the year 2050 as a result of the invention of the Spacetrain. Even if no other business had the gut to colonize Mars, I shall do it all by myself. This is a promise I don't intend to take lightly. </p>"
+"<p>IS COLONIES A SCAM? </br>I am not only confident of my technology but I also know it will work and will bet my life on it without hesitation if the need arise. And this is the personal guarantee I am giving the users of Colonies and prospective investors which should be used against me in the court of law : IF I AM UNABLE TO BUILD A NEW PROPULSION SYSTEM THAT IS AT LEAST TEN THOUSAND TIMES MORE POWERFUL AND EFFICIENT THAN ION THRUSTERS WITHIN EIGHTEEN MONTHS AFTER RAISING AN ACCESSIBLE SUM OF $2,000,000 VIA COLONIES OR SOME OTHER INVESTMENTS, THEN I SHOULD BE SENTENCED TO LIFE IMPRISONMENT OR WORSE FOR FRAUD IN ADDITION TO ANY DECISION OF THE COURT.  </p> "
 +"<p>If this was a scam,  then I would be the worst fool to ever walk the surface of the Earth for pulling such a scam and still provide my identity when I have the option of publishing my app anonymously like every scammer would do.</br>Doubting Thomases will always have one reason or the other not to believe for example - " 
 +" 'We believe he is sincere and honest but he is just delusional to think that he has invented something'."
  +"The Spacetrain may seems like an impossible golden trophy to this backward generation  but as far as I am concerned, it is just one scrappy technology out of my arsenal. </p><p>NOTE :Apart from Mr Musk that I intend to contact via X,  I will never contact anyone via any means asking for support or investment,  so beware of imposters. </br>I also tried to file for a patent for Spacetrain in 2024 which I was unable to pay the fee which was less than the sum of $20 as of the time.I didn't give the original blueprint of the Spacetrain because I was skeptical of someone stealing my idea and happening to be in no favorable financial condition to hire a lawyer to fight for my intellectual property rights made me vulnerable. Instead I just gave some fundamental information which  only give some pointers that the technology would work. The drawings were also messy because I am neither good at drawing nor am I easily motivated to spend time on some things I consider to be less important. </p>";
         

initfunc();






  

          