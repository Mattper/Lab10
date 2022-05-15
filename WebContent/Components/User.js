$(document).ready(function() 
{ 
	$("#alertSuccess").hide(); 
	$("#alertError").hide(); 
});

//Save
$(document).on("click", "#btnSave", function(event)
{
	//Clear alerts
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	var status =validateUserForm();
	if(status != true)
		{
			$("#alertError").text(status);
			$("#alertError").show();
			return;
			
		}
	
	//if valid
	var type = ($("#hidUserIDSave").val() == "") ? "POST" : "PUT";

	$.ajax(
	{
		url : "userAPI",
		type : type,
		data : $("#formUser").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onUserSaveComplete(response.responseText, status);
		}
		
	});
	
});

//update
$(document).on("click", ".btnUpdate", function(event)
{
		$("#hidUserIDSave").val($(this).data("userid"));
		$("#userName").val($(this).closest("tr").find('td:eq(0)').text());
		$("#userAddr").val($(this).closest("tr").find('td:eq(1)').text());
		$("#userRegion").val($(this).closest("tr").find('td:eq(2)').text());
		$("#userPostalCode").val($(this).closest("tr").find('td:eq(3)').text());
		$("#userContactNo").val($(this).closest("tr").find('td:eq(4)').text());
		$("#userAccountID").val($(this).closest("tr").find('td:eq(5)').text());
		$("#userMeterNb").val($(this).closest("tr").find('td:eq(6)').text());
		$("#userLoadType").val($(this).closest("tr").find('td:eq(7)').text());
		$("#userReadingType").val($(this).closest("tr").find('td:eq(8)').text());
		$("#userPaymentType").val($(this).closest("tr").find('td:eq(9)').text());
});

//delete
$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "userAPI",
		type : "DELETE",
		data : "userID=" + $(this).data("userid"),
		dataType : "text",
		complete : function(response, status)
		{
			onUserDeleteComplete(response.responseText, status);
		}
	});
});

//save
function onUserSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divUsersGrid").html(resultSet.data);
		}
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	}
	else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#hidUserIDSave").val("");
	$("#formUser")[0].reset();
}

//delete
function onUserDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
			{
				$("#alertSuccess").text("Successfully deleted.");
				$("#alertSuccess").show();
				$("#divUsersGrid").html(resultSet.data);
			} else if (resultSet.status.trim() == "error")
			{
				$("#alertError").text(resultSet.data);
				$("#alertError").show();
			}
	} else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else
	{
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

//CLIENT-MODEL
function validateUserForm() 
{ 
	// userName
	if ($("#userName").val().trim() == "") 
	 { 
		return "Insert User Name."; 
	 } 
	// userAddr
	if ($("#userAddr").val().trim() == "") 
	 { 
		return "Insert user address."; 
	 }
	//userRegion
	if ($("#userRegion").val().trim() == "") 
	 { 
		return "Insert Region."; 
	 }
	// userName
	if ($("#userName").val().trim() == "") 
	 { 
		return "Insert User Name."; 
	 } 
	//userPostalCode
	if ($("#userPostalCode").val().trim() == "") 
	 { 
		return "Insert PostalCode."; 
	 } 
	 
	return true; 
}