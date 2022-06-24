import express from 'express';
const axios = require('axios').default;

/**
 * Verify Status for Services.
 * @returns Services Runnig.
 */
function getStatus() {
  return 'Services running.';
}

/**
 * Get Token for String.
 * @returns Token.
 */
function getToken() {
  return '4e80d884-6962-4111-a140-affa40f6b50e';
}

/**
 * Get Token from Url rooftop-career-swtich.
 * @returns Token.
 */
async function getTokenEmail() {
  const email = 'rembertus@gmail.com';
  let token = '';
  try {
    await axios.get('https://rooftop-career-switch.herokuapp.com/token?email=' + email)                      
      .then(function (response) {        
        token = response.data.token;
      });
  } catch (error) {
    console.error(error);
  }
  
  return token;
}

/**
 * Sorted a blocks List, using a URL rooftop-career-switch.
 * @param blocks Blocks List.
 * @param token Token from email.
 * @returns 
 */
async function check(blocks = [], token = '') {
  let sorted = [];
  let firstElement = blocks.shift();
  let secondElement = firstElement;
  sorted.push(firstElement);
  while (blocks.length > 0) {
    let secuential = false;
    for await (const value of blocks) {
      secondElement = value;
      let payload = { blocks: [firstElement, secondElement] };

      try {
        await axios.post('https://rooftop-career-switch.herokuapp.com/check?token=' + token, payload)
          .then(function (response) {
            secuential = response.data.message;
          });
      } catch (error) {
        console.error(error);
      }

      if (secuential) {
        sorted.push(secondElement);
        firstElement = secondElement;
        blocks = blocks.filter((element) => element != secondElement);
        break;
      }
    }
  }

  return sorted;
}

/**
 * Verify sorted Blocks List, and it is correct.
 * @param blocks Blocks List.
 * @param token Token for email.
 * @returns 
 */
async function verify(blocks = [], token = '') {  
  const encoded = blocks.join("");    
  let payload = { encoded: encoded };
  let result = false;
  try {
    await axios.post('https://rooftop-career-switch.herokuapp.com/check?token=' + token, payload)
      .then(function (response) {
        result = response.data.message;  
      });
  } catch (error) {
    console.error(error);
  }
  
  return result;
}

module.exports = { getStatus, getToken, getTokenEmail, check, verify };
