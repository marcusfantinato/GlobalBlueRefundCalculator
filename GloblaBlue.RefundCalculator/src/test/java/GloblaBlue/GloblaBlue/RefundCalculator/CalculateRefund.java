package GloblaBlue.GloblaBlue.RefundCalculator;

import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class CalculateRefund {

	private WebDriver driver;

	@Before
	public void before() {
		System.setProperty("webdriver.gecko.driver", "D:/geckodriver.exe");
		driver = new FirefoxDriver();
		// driver.get("http://www.globalblue.com/customer-services/tax-free-shopping/refund-calculator/");
	}

	@Given("^Traveller is on Refund Calculator Page$")
	public void traveller_is_on_Refund_Calculator_Page() {
		// driver = new FirefoxDriver();
		driver.get("http://www.globalblue.com/customer-services/tax-free-shopping/refund-calculator/");
	}

	@When("^Traveler Chooses '(.*?)'$")
	public void traveler_Chooses_Italy(String Country) {
		driver.findElement(By.name("refundInput")).clear();
		Select dropdown = new Select(driver.findElement(By.name("jurisdictions")));
		dropdown.selectByVisibleText(Country);

	}

	@When("^Enter '(\\d+)' in Purchase Amaunt field$")
	public void enter_in_Purchase_Amaunt_field(String Value) {
		driver.findElement(By.name("refundInput")).clear();
		driver.findElement(By.name("refundInput")).sendKeys(Value);
	}

	@When("^Click Calculate$")
	public void click_Calculate() {
		driver.findElement(By.name("submitRefund")).click();
	}

	@When("^Click \\(\\+\\)$")
	public void click() {
		driver.findElement(By.className("appendRefund")).click();

	}

	@Then("^'(\\d+)' should be displayed correctly in the Tax Refund Field\\.$")
	public void should_be_displayed_correctly_in_the_Tax_Refund_Field(double Tax) {
		String valor = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[2]/tbody/tr/td[5]"))
				.getText();
		double totalint = Double.parseDouble(valor);

		// System.out.println(totalint + " " + Tax);

		if (totalint == Tax) {
			// System.out.println("Valor Total Conferido com Sucesso");
			driver.quit();
		} else {
			throw new RuntimeException("Houston, we have a problem !");
		}

	}

	@Then("^'(\\d+)'\\+'(\\d+)'\\+'(\\d+)' Amount should be displayed correctly in the Total Purchase Field and '(\\d+)' \\+ '(\\d+)' \\+ '(\\d+)' should be displayed correctly in the Total Refund$")
	public void amount_should_be_displayed_correctly_in_the_Total_Purchase_Field_and_should_be_displayed_correctly_in_the_Total_Refund(
			double Value, double Value2, double Value3, double Tax, double Tax2, double Tax3) throws Throwable {
		String refund = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[2]/tbody/tr/td[5]"))
				.getText();
		String purchases = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[2]/tbody/tr/td[2]"))
				.getText();
		double totalrefund = Double.parseDouble(refund);
		double totalpurchases = Double.parseDouble(purchases);

		double totalamount = Tax + Tax2 + Tax3;
		double totalvalue = Value + Value2 + Value3;
		System.out.println(totalrefund + " Refund " + totalamount);
		System.out.println(totalpurchases + " Purchases " + totalvalue);

		if (totalrefund == totalamount) {
			// System.out.println(totalamount);
		} else {
			throw new RuntimeException("Houston, we have a problem !");
		}

		if (totalpurchases == totalvalue) {
			// System.out.println(totalpurchases);
		} else {
			throw new RuntimeException("Houston, we have a problem !");
		}

		driver.quit();

	}

	@When("^Click \\(-\\) and remove Value(\\d+) and Value(\\d+)$")
	public void click_and_remove_Value_and_Value(int arg1, int arg2) throws Throwable {
		driver.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[1]/tbody/tr[3]/td[6]"))
				.click();
		driver.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[1]/tbody/tr[2]/td[6]"))
				.click();
	}

	@Then("^'(\\d+)' and '(\\d+)' should be displayed correctly in the total Purchase and total Refund Field\\.$")
	public void and_should_be_displayed_correctly_in_the_total_Purchase_and_total_Refund_Field(double Value,
			double Tax) {
		String refund = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[2]/tbody/tr/td[5]"))
				.getText();
		String purchases = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[2]/tbody/tr/td[2]"))
				.getText();
		double totalrefund = Double.parseDouble(refund);
		double totalpurchases = Double.parseDouble(purchases);

		System.out.println(totalrefund + " Refund " + Tax);
		System.out.println(totalpurchases + " Purchases " + Value);

		if (totalrefund == Tax) {
			// System.out.println(Amount);
		} else {
			throw new RuntimeException("Houston, we have a problem !");
		}

		if (totalpurchases == Value) {
			// System.out.println(Value);
		} else {
			throw new RuntimeException("Houston, we have a problem !");
		}

		driver.quit();
	}

	@Then("^The Symbol should be displayed according to the country chosen\\. E\\.g \"([^\"]*)\" = \"([^\"]*)\"$")
	public void the_Symbol_should_be_displayed_according_to_the_country_chosen_E_g(String Country, String Symbol)
			throws Throwable {

		String[] websysmbol = new String[8];
		websysmbol[0] = driver
				.findElement(
						By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/div/form/fieldset/div[4]/div/span"))
				.getText();
		websysmbol[1] = driver
				.findElement(
						By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/div/form/fieldset/div[5]/div/span[1]"))
				.getText();
		websysmbol[2] = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[1]/tbody/tr[1]/td[1]"))
				.getText();
		websysmbol[3] = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[1]/tbody/tr[1]/td[4]"))
				.getText();
		websysmbol[4] = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[1]/tbody/tr[2]/td[1]"))
				.getText();
		websysmbol[5] = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[1]/tbody/tr[2]/td[4]"))
				.getText();
		websysmbol[6] = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[2]/tbody/tr/td[1]"))
				.getText();
		websysmbol[7] = driver
				.findElement(By.xpath("/html/body/div[6]/div[2]/div[1]/div[1]/div/div/table[2]/tbody/tr/td[4]"))
				.getText();

		for (int i = 0; i < websysmbol.length;) {
			if (websysmbol[i].equals(Symbol)) {
				// System.out.println(websysmbol [i] + " Symbols " + Symbol);
				i++;
			} else {
				// System.out.println(websysmbol [i] + " Symbols " + Symbol + "
				// " + i);
				throw new RuntimeException("Houston, we have a problem !");
			}
		}

		driver.quit();

	}

}
