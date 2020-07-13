package com.lucky.run;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;
import org.testng.annotations.DataProvider;

@CucumberOptions(
        features = {"src/test/resources/features/CreateApikey.feature"},
        glue ={"com.lucky.steps"},
        tags = {"@CreateApiKey"},
        monochrome = true,
        strict = true
)

public class Runner extends AbstractTestNGCucumberTests {
    @DataProvider(parallel = true)
    @Override
    public Object[][] scenarios() {
        return super.scenarios();
    }

}

