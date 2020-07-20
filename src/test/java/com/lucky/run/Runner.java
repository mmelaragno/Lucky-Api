package com.lucky.run;

import com.lucky.configurations.ObjectMapperConfiguration;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import kong.unirest.Unirest;
import org.junit.BeforeClass;
import org.testng.annotations.DataProvider;

@CucumberOptions(
        features = {"src/test/resources/features/CreateUser.feature"},
        plugin = {"json:target/cucumber.json", "html:target/site/cucumber-pretty"},
        glue = {"com.lucky.steps"},
        tags = {"@CreateUser"},
        monochrome = true,
        strict = true
)


public class Runner extends AbstractTestNGCucumberTests {
    @DataProvider()
    @Override
    public Object[][] scenarios() {
        ObjectMapperConfiguration.initUnirest();
        return super.scenarios();
    }
}


