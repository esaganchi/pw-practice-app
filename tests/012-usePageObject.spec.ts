import { test, expect } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';
import { faker } from '@faker-js/faker'; 


test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('navigate to form page @smoke', async ({ page }) => {
    const pm = new PageManager(page);
    //const navigationPage = new NavigationPage(page);
    await pm.navigateTo().formLayoutsPage();
    await pm.navigateTo().datepickerPage();
    await pm.navigateTo().smartTablePage();
    await pm.navigateTo().toastrPage();
    await pm.navigateTo().tooltipPage();
});



test('parametrized methods @smoke', async ({ page }) => {
    const pm = new PageManager(page);
    const randomFullName = faker.person.fullName();
    const randomEmail = `${randomFullName.replace(' ', '').toLowerCase()}${faker.number.int(1000)}@test.com`;

    await pm.navigateTo().formLayoutsPage();

    await page.screenshot({ path: 'screenshots/formLayoutsPage.png' });
    await page.locator('nb-card', { hasText: "Inline form" }).screenshot({ path: 'screenshots/formLayoutsPage.png' });
    
    await pm.onFormLayoutsPage().submitUsingTheGrigdFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 2');
    await pm.onFormLayoutsPage().sumbitInlineFormWithNameEmailAndCheckbox( randomFullName, randomEmail, false);
    //await pm.onFormLayoutsPage().sumbitInlineFormWithNameEmailAndCheckbox('John Smith', 'John@test.com',false);
  
    // await pm.navigateTo().datepickerPage();
    // await pm.onDatepickerPage().selectCommonDatePickerDateFromToday(10);
    // await pm.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15);
  });

  test.only('testing with argos cI', async ({ page }) => {
    const pm = new PageManager(page);
  
    await pm.navigateTo().formLayoutsPage();
    await pm.navigateTo().datepickerPage();
  });
  