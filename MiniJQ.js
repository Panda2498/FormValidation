function isEmail(email)
			{
  				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  				return regex.test(email);
			}
			$("#submitButton").click(function()
			{
				var errorMessage=""
				var fieldsmissing="";
				if($("#email").val()=="")
				{
					fieldsmissing += "<br>Email";
				}
				if($("#phone").val()=="")
				{
					fieldsmissing += "<br>Telephone";
				}
				if($("#password").val()=="")
				{
					fieldsmissing += "<br>Password";
				}
				if($("#passwordConfirm").val()=="")
				{
					fieldsmissing += "<br>Confirm Password";
				}
				if(fieldsmissing != "")
				{
					errorMessage+="<p> The following field(s) are missing: </p>"+fieldsmissing;
				}
				if(isEmail($("#email").val())==false)
				{
					errorMessage+="<p> Your email address is not valid </p>";
				}
				if($.isNumeric($("#phone").val()) == false)
				{
					errorMessage+= "<p> Your phone number is not numeric </p>";
				}
				if($("#password").val()!=$("#passwordConfirm").val())
				{
					errorMessage+= "<p> Your passwords do not match </p>";
				}
				if(errorMessage!="")
				{
					$("#errorMessage").html(errorMessage);
				}
				else
				{
					$("#successMessage").show();
					$("#errorMessage").hide();
				}
			});