const express = require('express');
const fs = require('fs');


class Massage {
 readMassageItem() {
  try {
    const data = fs.readFileSync('./public/massage.json', 'utf8');
    const massage = JSON.parse(data);
    return massage;
  } catch (err) {
    console.error('Error reading or parsing the file:', err);
    throw err;
  }
}

 readById(searchId) {
  const index = massageData.findIndex(p => p.id === searchId);

  if (index === -1) {
    return 'Message not found';
  } else {
    const searchedMassage = massageData[index]
    return searchedMassage 
  }
}

}

const massageFunc = new Massage
const massageData = massageFunc.readMassageItem()

module.exports = {
  Massage
}