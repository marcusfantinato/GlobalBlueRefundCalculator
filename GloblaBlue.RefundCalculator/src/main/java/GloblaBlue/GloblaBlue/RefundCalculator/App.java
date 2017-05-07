package GloblaBlue.GloblaBlue.RefundCalculator;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;
import static org.hamcrest.CoreMatchers.*;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Hello world!
 *
 */
public class App {
	public static void main(String[] args) {
		System.setProperty("webdriver.gecko.driver", "D:/geckodriver.exe");

		WebDriver driver = new FirefoxDriver();
		driver.get("http://www.globalblue.com/customer-services/tax-free-shopping/refund-calculator/");

		// WebElement mySelectElement = driver.findElement(By.id("mySelect"));
		// Select dropdown= new Select(mySelectElement);
		Select dropdown = new Select(driver.findElement(By.name("jurisdictions")));
		dropdown.selectByVisibleText("Italy");
		driver.findElement(By.name("refundInput")).clear();
		driver.findElement(By.name("refundInput")).sendKeys("123456");
		driver.findElement(By.name("submitRefund")).click();
		   WebDriverWait wait = new WebDriverWait(driver, 40);
		   wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/div/form/fieldset/div[5]/a")));   
	   driver.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/div/form/fieldset/div[5]/a"));
		   String valor = driver.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[2]/tbody/tr/td[5]")).getText();
   
	 //   System.out.println(test);
	    
	    if (valor.equals("19135.50")){
	    	System.out.println("TESTE");
	    }
	    else {
	    	System.out.println("= /");
	    }
		
	}
}
