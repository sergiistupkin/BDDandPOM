package com.qa.stepsDefinition;

import org.junit.Assert;

import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;
import com.qa.util.TestUtil;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class HomePageSteps extends TestBase{

	LoginPage loginPage;
	HomePage homePage;
	TestUtil testUtil;
	
	@Given("^user opens browser$")
	public void user_opens_browser() {
	    TestBase.initialization();
	}

	@Then("^user on LoginPage$")
	public void user_on_LoginPage() {
		loginPage = new LoginPage() ;
	    String title = loginPage.validateLoginPage();
	    Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
	}

	@Then("^user enters login and password and click login button$")
	public void user_enters_login_and_password() {
	   homePage = loginPage.enterLoginAndPassword(prop.getProperty("username"), prop.getProperty("password"));
	}

	@Then("^homepage is displayed$")
	public void homepage_is_displayed() {
	driver.switchTo().frame("mainpanel");
	   boolean text = homePage.validateHomePageText();
	   Assert.assertTrue(text);
	}

	@Then("^validate HomePage title$")
	public void validate_HomePage_title(){
		String homeTitle = homePage.validateHomePage();
		Assert.assertEquals("CRMPRO", homeTitle);
	}

	@Then("^validate logged in username$")
	public void validate_logged_in_username() {
	    boolean loggedUserName = homePage.validateLoggedUserName();
	    Assert.assertTrue(loggedUserName);
	}
	
}
