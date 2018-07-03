package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.qa.util.TestBase;

public class HomePage extends TestBase {

	@FindBy(xpath = "//td")
	WebElement title;
	
}
