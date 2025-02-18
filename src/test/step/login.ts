import {Given, Then, When} from '@cucumber/cucumber';
import { pagefixture } from '../../hooks/pageFixture';

Given('Load the url', async function () {   
    await pagefixture.page.goto('https://www.saucedemo.com/');
     });

  Given('Enter valid username and password', async function () {
   await pagefixture.page.fill('#user-name','standard_user');
   await pagefixture.page.fill('#password','secret_sauce')
  });

  When('Clicked on Login button', async function () {
    await pagefixture.page.click('#login-button');
   console.log( await pagefixture.page.title());
  });

  Then('User should be able to login successfully', async function () {
    console.log( await pagefixture.page.title());
     });