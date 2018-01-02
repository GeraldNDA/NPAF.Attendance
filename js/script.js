window.onload = function() {
  if('serviceWorker' in navigator) {
    function onTaskAdded(task) {
        console.log("Task successfully scheduled.");
    }

    function onError(error) {
        alert("Sorry, couldn't set the alarm: " + error);
    }
    
    navigator.serviceWorker.register('service-worker.js')
      .then((registration) => {
        console.log(registration.taskScheduler);
      }).catch((err) => {
        console.error(err);
      });
      navigator.serviceWorker.ready.then((reg) => {
        console.log(reg);
        console.log(reg.taskScheduler);
        reg.taskScheduler.add(Date.now() + (10 * 60000), {
            message: "It's been 10 minutes, your soup is ready!"
        }).then(onTaskAdded, onError);
      })
  }
  
  var attendance = document.forms.attendance;
  for(var i = 0; i < attendance.length; i++)
    {
      attendance[i].dataset["checked"] = 0;
			attendance[i].onclick = function(){
        switch(this.dataset["checked"])
        {
						case "0":
							//currently checked, set to unchecked
							this.dataset["checked"] = 1;
              this.checked = "";
							break;
						case "1":
							//currently unchecked, set to excused
							this.dataset["checked"] = 2;
              this.checked = "";
              this.indeterminate = true;
							break;
						default:
							this.dataset["checked"] = 0;
              this.checked = "checked";
              this.indeterminate = false;
							break;
				};
			};
    };
		document.onkeydown = function(e){
			var pressedKeyValue = e.keyCode;
			if(pressedKeyValue == 27 && location.hash == "#modal")
			{
				location.hash = "";
			}
		
		};
		document.getElementById("modal").onmousedown = function()
		{
			location.hash = "";
		};
		document.forms.modal.onmousedown = function(e)
		{
			e.stopPropagation();
		};	
};
