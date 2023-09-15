const containerEl=document.querySelector(".container");

for(let index=0 ;index < 54; index++){

  const colorContainerEl=document.createElement("div");
  colorContainerEl.classList.add('color-container');
   
  containerEl.appendChild(colorContainerEl);

  const colorCodeEl=document.createElement("span");
  colorCodeEl.classList.add('color-code');
  colorContainerEl.appendChild(colorCodeEl);

  const copyButtonEl=document.createElement("button");
  copyButtonEl.innerText="Copy";
  colorContainerEl.appendChild(copyButtonEl);

  // console.log(containerEl);
}
function randomColor(){
  const chars="012345689ABCDEF";
  const colorCodeLength=6;
  let colorCode="";

  for(let index=0;index<colorCodeLength;index++){
    const randomNum=Math.floor(Math.random() * chars.length);
    colorCode +=chars.substring(randomNum,randomNum + 1);
    // console.log(colorCode);  
  }
  return colorCode;
}
// randomColor();

const colorContainerEls=document.querySelectorAll(".color-container");
generateColor();

function generateColor(){
  for(let i=0;i<colorContainerEls.length;i++){
     
         const colorContainerEl=colorContainerEls[i];
         const newColorCode=randomColor();
         const colorCodeEl=colorContainerEl.querySelector(".color-code");

         colorContainerEl.style.backgroundColor="#"+newColorCode;

          colorCodeEl.innerText="#"+newColorCode;
  }
}
colorContainerEls.forEach((colorContainerEl)=>{
  const copyButtonEl=colorContainerEl.querySelector("button");
  const colorCodeEl=colorContainerEl.querySelector(".color-code");
  copyButtonEl.addEventListener("click",()=>{
    const colorCode=colorCodeEl.innerText;
    copyClipBoard(colorCode);
  });

});

function copyClipBoard(text){
  navigator.clipboard.writeText(text)
  .then(()=>{
    alert("Copied to Clipboard : "+text);
  })
  .catch((error)=>{
    console.log("Failed to Copy to Clipboard",error);
  })

}