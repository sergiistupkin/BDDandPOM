//package stepDefinitions;
//
//
//import cucumber.api.java.After;
//import cucumber.api.java.Before;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//
//public class HookStepDefinition {
//
//	
//	@Before
//	public void setUp() {
//		System.out.println("Lunch FF");
//		System.out.println("Enter URL");
//	}
//	
//	@After
//	public void tearDown() {
//		System.out.println("Close the browser");
//	}
//	
//	@Given("^user is on deal page$")
//	public void user_is_on_deal_page(){
//	    System.out.println("user is on deal page");
//	}
//
//	@When("^user fills the deals form$")
//	public void user_fills_the_deals_form() {
//		System.out.println("user fills the deals form");
//	}
//
//	@Then("^deal is created$")
//	public void deal_is_created() {
//		System.out.println("deal is created");
//	}
//	
//	@Given("^user is present on contact page$")
//	public void user_is_present_on_contact_page(){
//		System.out.println("user is present on contact page");
//	}
//
//	@When("^user fills the contact form$")
//	public void user_fills_the_contact_form() {
//		System.out.println("user fills the contact form");
//	}
//
//	@Then("^contact is created$")
//	public void contact_is_created() {
//		System.out.println("contact is created");
//	}
//	
//	@Given("^user is on mail page$")
//	public void user_is_on_mail_page() {
//		System.out.println("user is on mail page");
//	}
//
//	@When("^user fills the mail form$")
//	public void user_fills_the_mail_form() {
//		System.out.println("user fills the mail form");
//	}
//
//	@Then("^mail is created$")
//	public void mail_is_created() {
//		System.out.println("mail is created");
//	}
//}
