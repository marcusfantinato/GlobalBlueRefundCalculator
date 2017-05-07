package GloblaBlue.GloblaBlue.RefundCalculator;

import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(format = { "pretty", "html:target/HtmlResult" }, 
                 features = { "src/RefundCalculator/resource" })

public class refundCalculatorRunner {

}
