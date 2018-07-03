package com.qa.stepsDefinition;

import org.junit.Assert;

import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class HomePageSteps extends TestBase{

	LoginPage loginpage = new LoginPage();
	
	@Given("^user opens browser$")
	public void user_opens_browser() throws Throwable {
	    TestBase.initialization();
	}

	@Then("^user on LoginPage$")
	public void user_on_LoginPage() throws Throwable {
	    String title = loginpage.validateLoginPage();
	    Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}

	@Then("^user enters login and password$")
	public void user_enters_login_and_password() throws Throwable {
	   
	}

	@Then("^user click login button$")
	public void user_click_login_button() throws Throwable {
	   
	}

	@Then("^homepage is displayed$")
	public void homepage_is_displayed() throws Throwable {
	    
	}

	@Then("^validate HomePage title$")
	public void validate_HomePage_title() throws Throwable {
	    
	}

	@Then("^validate logged in username$")
	public void validate_logged_in_username() throws Throwable {
	    
	}
	
}
