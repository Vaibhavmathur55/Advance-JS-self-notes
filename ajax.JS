const FetchBtn = document.getElementById("FetchBTN");

FetchBtn.addEventListener("click", buttonClickHandler);
function buttonClickHandler() {
  //This command is only to check whether event occured correctly or not
  console.log("You have clicked the right button");
  //create an xhr object
  const xhr = new XMLHttpRequest();
  //opening the object
  //Here we placed the link of a dummy database
  //use this for post request
  xhr.open("GET","http://dummy.restapiexample.com/api/v1/employee/1", true);
  xhr.getResponseHeader('Content-type','application/json')
  //Symptomps of progress
  xhr.onprogress = function () {
    console.log("on track");
  };

  //What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else {
      console.log("some error occured");
    }
  };
  //send the request
  params=`{"name":"test34sad545","salary":"123","age":"23"}`;
  xhr.send(params);
  console.log('We are done');
}
