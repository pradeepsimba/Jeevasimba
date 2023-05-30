let count = 0 ;

function ct (x) {

  if(x==1){
   count++;
  } else if(x==0) {
   count --;
  }

  setImage();

}

function setImage () {

const WhichImg = "https://raw.githubusercontent.com/Jeevasimba/files/main/conjunctions/"+count+".png";

document.getElementById('soundtrack').innerHTML=`
  <img src='${WhichImg}' alt="image" width=auto height=auto>
`;

}