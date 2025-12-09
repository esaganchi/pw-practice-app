import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

//test.describe.configure({mode: 'parallel'});

test.describe('Form Layouts page', () => {
  test.describe.configure({ retries: 2 });

  test.beforeEach(async ({ page }) => {
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });

  test('input fields', async ({ page }, testInfo) => {
    if (testInfo) {
      //await page.reload(); 
      console.log('Retrying test...');
    }

    const usingTheGridEmailInput = page.locator('nb-card', { hasText: 'Using the Grid' }).getByRole('textbox', { name: 'Email' });
  
    await usingTheGridEmailInput.fill('test@test.com');                    // быстро ввести текст
    await usingTheGridEmailInput.clear();                                  // очистить поле
    await usingTheGridEmailInput.pressSequentially('test2@test.com', {    // печать по символам
      delay: 500,
    });
  
    // generic assertion
    const inputValue = await usingTheGridEmailInput.inputValue();          // считать value из инпута
    expect(inputValue).toEqual('test2@test.com');                          // обычное сравнение строки
  
    // locator assertion
    await expect(usingTheGridEmailInput).toHaveValue('test2@test.com');    // проверка через локатор
  });
  

  test('radio buttons', async ({ page }) => {
    const usingTheGridForm = page.locator('nb-card', { hasText: 'Using the Grid' });
  
    // Выбираем Option 1
    await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).check({ force: true });
  
    // generic assertion (через isChecked)
    const radioStatus = await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).isChecked();
    expect(radioStatus).toBeTruthy();
  
    // locator assertion
    await expect(usingTheGridForm.getByRole('radio', { name: 'Option 1' })).toBeChecked();
  
    // Переключаемся на Option 2
    await usingTheGridForm.getByRole('radio', { name: 'Option 2' }).check({ force: true });
  
    // generic: Option 1 не выбран, Option 2 выбран
    expect(await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).isChecked()).toBeFalsy();
    expect(await usingTheGridForm.getByRole('radio', { name: 'Option 2' }).isChecked()).toBeTruthy();
  });
  
//   test('checkboxes', async ({ page }) => {
//     await page.getByText('Modal & Overlays').click();
//     await page.getByText('Toastr').click();
  
//     await page.getByRole('checkbox', { name: 'Hide on click' })
//       .uncheck({ force: true });
  
//     await page.getByRole('checkbox', {
//       name: 'Prevent arising of duplicate toast',
//     }).check({ force: true });
  
//     const allBoxes = page.getByRole('checkbox');
  
//     for (const box of await allBoxes.all()) {
//       await box.uncheck({ force: true });
//       expect(await box.isChecked()).toBeFalsy();
//     }
//   });

});
