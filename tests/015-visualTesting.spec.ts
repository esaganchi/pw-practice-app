import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

//test.describe.configure({mode: 'parallel'});

test.describe('Form Layouts page', () => {
  test.describe.configure({ retries: 0 });

  test.beforeEach(async ({ page }) => {
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
  });

//   test('input fields', async ({ page }, testInfo) => {
//     if (testInfo) {
//       //await page.reload(); 
//       console.log('Retrying test...');
//     }

//     const usingTheGridEmailInput = page.locator('nb-card', { hasText: 'Using the Grid' }).getByRole('textbox', { name: 'Email' });
  
//     await usingTheGridEmailInput.fill('test@test.com');                    // быстро ввести текст
//     await usingTheGridEmailInput.clear();                                  // очистить поле
//     await usingTheGridEmailInput.pressSequentially('test2@test.com', {    // печать по символам
//       delay: 500,
//     });
  
//     // generic assertion
//     const inputValue = await usingTheGridEmailInput.inputValue();          // считать value из инпута
//     expect(inputValue).toEqual('test2@test.com');                          // обычное сравнение строки
//     // locator assertion
//     await expect(usingTheGridEmailInput).toHaveValue('test2@test.com');    // проверка через локатор
//   });
  

  test.only('radio buttons', async ({ page }) => {
    const usingTheGridForm = page.locator('nb-card', { hasText: 'Using the Grid' });
    // Выбираем Option 1
    await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).check({ force: true });
    const radioStatus = await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).isChecked();
    await expect(usingTheGridForm).toHaveScreenshot();
   
    // expect(radioStatus).toBeTruthy();
    
    // await expect(usingTheGridForm.getByRole('radio', { name: 'Option 1' })).toBeChecked();
    // await usingTheGridForm.getByRole('radio', { name: 'Option 2' }).check({ force: true });
  
    // expect(await usingTheGridForm.getByRole('radio', { name: 'Option 1' }).isChecked()).toBeFalsy();
    // expect(await usingTheGridForm.getByRole('radio', { name: 'Option 2' }).isChecked()).toBeTruthy();
  });
  

});
