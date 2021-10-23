  // var btn = document.getElementById("src");
  //  btn.addEventListener('click',() => {
  // let inpt=document.getElementById('search');
  //   inpt.classList.toggle('hide')
  // })
function search() {
  let searched = document.getElementById("search").value.trim();
  if (searched!=="") {
    let text =document.querySelector("body").innerText;
    let re = new RegExp(searched,"ig");
    let newText = text.replace(re);
    newText.addClass("mark")
    console.log(re);
    //document.querySelector("body").innerHTML =newText;
    
  }
}

//  $(document).ready(function(){
//   $("#myBtn").click(function(){
//       $("#myModal").modal();
//   });
// });

