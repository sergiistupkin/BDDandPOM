package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class HomePage extends TestBase {

	@FindBy(xpath = "//td[contains(text(), 'User:')]")
	WebElement userTitle;
	@FindBy(xpath = "//td[contains(text(), 'CRMPRO')]")
	WebElement pageTitleText;
	@FindBy(xpath="//td[contains(text(), 'Sergii')]")
	WebElement loggedUserName;
		
	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	public boolean validateHomePageText() {
		return pageTitleText.isDisplayed();
	}
	
	public String validateHomePage() {
		return driver.getTitle();
	}
	
	public boolean validateLoggedUserName() {
		return loggedUserName.isDisplayed();
	}
}
