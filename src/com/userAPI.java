package com;
import com.User;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/userAPI")
public class userAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	User userObj=new User();
	
    public userAPI() {
        super();
        
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String output= userObj.insertUser(
						request.getParameter("userName"),
						request.getParameter("userAddr"),
						request.getParameter("userRegion"),
						request.getParameter("userPostalCode"),
						request.getParameter("userContactNo"),
						request.getParameter("userAccountID"),
						request.getParameter("userMeterNb"),
						request.getParameter("userLoadType"),
						request.getParameter("userReadingType"),
						request.getParameter("userPaymentType"));
		
		response.getWriter().write(output);
		
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map paras =getParasMap(request);
		
		String output =userObj.updateUser(
					paras.get("hidUserIDSave").toString(),
					paras.get("userName").toString(),
					paras.get("userAddr").toString(),
					paras.get("userRegion").toString(),
					paras.get("userPostalCode").toString(),
					paras.get("userContactNo").toString(),
					paras.get("userAccountID").toString(),
					paras.get("userMeterNb").toString(),
					paras.get("userLoadType").toString(),
					paras.get("userReadingType").toString(),
					paras.get("userPaymentType").toString()
				);
		
		response.getWriter().write(output);
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map paras =getParasMap(request);
		
		String output= userObj.deleteUser(paras.get("userID").toString());
		
		response.getWriter().write(output);
	}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{
		Map<String, String> map = new HashMap<String, String>();
		try
		{
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ?scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			
			String[] params = queryString.split("&");
			for (String param : params)
			{
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		}
		
		catch (Exception e)
		{
		}
		return map;
	}
	
	
	

}
