window.onload = function(){
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
};
