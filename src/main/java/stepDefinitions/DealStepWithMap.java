package stepDefinitions;

import java.util.Map;
import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealStepWithMap {

WebDriver driver;
	
	@Given("^user is already on Login Page$")
    public void user_already_on_login_page(){
        System.setProperty("webdriver.chrome.driver", "D:/QA/Selenium/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.crmpro.com//index.html");
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }
    
    @When("^title of Login Page is CRM$")
    public void title_of_Login_Page_is_CRM(){
        String title=driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
    }
    
    @Then("^user enters username and password$")  
    public void user_enters_username_and_password(DataTable credentials){
    	for(Map<String,String> data : credentials.asMaps(String.class,String.class)){
    		
        driver.findElement(By.name("username")).sendKeys(data.get("username"));
        driver.findElement(By.xpath("//input[@name='password']")).sendKeys(data.get("password"));
    }
    }
    @Then ("^user clicks on Login button$")
    public void user_clicks_on_Login_button(){
        WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();",loginBtn);
    }
    @Then ("^user is on Home Page$")
    public void user_is_on_Home_Page(){
    String title = driver.getTitle();
    System.out.println(title);
    Assert.assertEquals("CRMPRO", title);
    }
    @Then ("^user moves to new deal page$")
    public void user_moves_to_new_deal_page() {
    	//switch to frame
    	driver.switchTo().frame("mainpanel");
    	// Action for moving mouse, to make New Deal visible
    	Actions action = new Actions(driver);
    	action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Deals')]"))).build().perform();
    	driver.findElement(By.xpath("//a[contains(text(), 'New Deal')]")).click();
    	}
    @Then("^user enters deal details$")  
    public void user_enter_deal_details(DataTable dealdata) {
    	for(Map<String, String> dealValues : dealdata.asMaps(String.class, String.class)) {
    		
    	driver.findElement(By.id("title")).sendKeys(dealValues.get("title"));
    	driver.findElement(By.id("amount")).sendKeys(dealValues.get("amount"));
    	driver.findElement(By.id("probability")).sendKeys(dealValues.get("probability"));
    	driver.findElement(By.id("commission")).sendKeys(dealValues.get("commision"));
    	driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
    	
    	// Action for moving mouse, to make New Deal visible
    	Actions action = new Actions(driver);
    	action.moveToElement(driver.findElement(By.xpath("//a[contains(text(), 'Deals')]"))).build().perform();
    	driver.findElement(By.xpath("//a[contains(text(), 'New Deal')]")).click();
    	}
    	}
    
    @Then ("^close the browser$")
    public void close_the_browser(){
        driver.quit();
    }
	
}
