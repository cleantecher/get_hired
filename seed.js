require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// Pattern:  IIFE
(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Executives', sortOrder: 10},
    {name: 'Manager', sortOrder: 20},
    {name: 'Co-worker', sortOrder: 30},
    {name: 'HR', sortOrder: 40},

  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'How many times have you contacted this person', emoji: '👩‍⚖️', category: categories[0], price: 1},
    {name: 'Cold Email: First time you are reaching out to this person', emoji: '📧', category: categories[0], price: 1},
    {name: 'Warm Intro: Someone introduced you via email and this is your first responce', emoji: '👩📧', category: categories[0], price: 1},
    {name: 'Connected on other social media platform', emoji: "🌍", category: categories[0], price: 1},
    {name: 'How many times have you contacted this person', emoji: '👩‍⚖️', category: categories[1], price: 1},
    {name: 'Cold Email: First time you are reaching out to this person', emoji: '📧', category: categories[1], price: 1},
    {name: 'Warm Intro: Someone introduced you via email and this is your first responce', emoji: '👩📧', category: categories[1], price: 1},
    {name: 'Connected on other social media platform', emoji: "🌍", category: categories[1], price: 1},
    {name: 'How many times have you contacted this person', emoji: '👩‍⚖️', category: categories[2], price: 1},
    {name: 'Cold Email: First time you are reaching out to this person', emoji: '📧', category: categories[2], price: 1},
    {name: 'Warm Intro: Someone introduced you via email and this is your first responce', emoji: '👩📧', category: categories[2], price: 1},
    {name: 'Connected on other social media platform', emoji: "🌍", category: categories[2], price: 1},
    {name: 'How many times have you contacted this person', emoji: '👩‍⚖️', category: categories[3], price: 1},
    {name: 'Cold Email: First time you are reaching out to this person', emoji: '📧', category: categories[3], price: 1},
    {name: 'Warm Intro: Someone introduced you via email and this is your first responce', emoji: '👩📧', category: categories[3], price: 1},
    {name: 'Connected on other social media platform', emoji: "🌍", category: categories[3], price: 1},
  ]);

  console.log(items)

  process.exit();

})();