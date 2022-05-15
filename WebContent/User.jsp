<%@ page import="com.User" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/User.js"></script>

</head>
<body>

<div class="container">
<div class="row">
<div class="col-6">

	<h1>User Management</h1>
	
	<form id="formUser" name="formUser">
	
		Name:
		<input id="userName" name="userName" type="text" class="form-control form-control-sm">
		<br>
		Address:
		<input id="userAddr" name="userAddr" type="text" class="form-control form-control-sm">
		<br>
		Region:
		<input id="userRegion" name="userRegion" type="text" class="form-control form-control-sm">
		<br>
		Postal Code:
		<input id="userPostalCode" name="userPostalCode" type="text" class="form-control form-control-sm">
		<br>
		ContactNo:
		<input id="userContactNo" name="userContactNo" type="text" class="form-control form-control-sm">
		<br>
		Account ID:
		<input id="userAccountID" name="userAccountID" type="text" class="form-control form-control-sm">
		<br>
		Meter Number:
		<input id="userMeterNb" name="userMeterNb" type="text" class="form-control form-control-sm">
		<br>
		Load Type:
		<input id="userLoadType" name="userLoadType" type="text" class="form-control form-control-sm">
		<br>
		Reading Type:
		<input id="userReadingType" name="userReadingType" type="text" class="form-control form-control-sm">
		<br>
		PaymentType:
		<input id="userPaymentType" name="userPaymentType" type="text" class="form-control form-control-sm">
		<br>
		
		<input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
		<input type="hidden" id="hidUserIDSave" name="hidUserIDSave" value="">
		
	</form>

	<div id="alertSuccess" class="alert alert-success"></div>
	<div id="alertError" class="alert alert-danger"></div>
	
	<br>
	
	<div id="divUsersGrid">
		<%
			User userObj =new User();
			out.print(userObj.readUsers());
		%>
	</div>

</div>
</div>
</div>

</body>
</html>