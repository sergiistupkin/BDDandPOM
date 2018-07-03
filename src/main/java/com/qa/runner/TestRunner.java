package com.qa.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "./src/main/java/com/qa/features/crm.feature" //the path of the feature files
		,glue={"com/qa/stepsDefinition"} //the path of the step definition files
        ,format={"pretty", "html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}

                ,dryRun = false //-when true it checks steps and definitions
                ,monochrome = true // display readable output
                ,strict = true //failed execution of pending or undefined steps in .feature
//              ,tags= {"~@SmokeTest","@EndToEnd"} // execution different suits of test
				)
public class TestRunner {
	
}
