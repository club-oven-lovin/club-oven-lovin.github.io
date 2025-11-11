---
title: "Club Oven Lovin'"
layout: default
show_header: false
---

# Project Description
  Club Oven Lovin’ is a web-based platform that helps college students find, share, and cook affordable, easy-to-make meals using minimal kitchen resources.
  The system connects students, local vendors, and admins to create a community-driven recipe-sharing space. Students can browse and contribute recipes that include ingredient availability, cost, prep time, servings, and    dietary details. Vendors can provide information about ingredient pricing and stock, while admins oversee and manage all site content.
  This project aims to make healthy, realistic cooking accessible to students with limited resources while supporting local food options.
  
# Goals:

  - Implement user authentication and role-based access
    - Allow users to register and log in as students, vendors, or admins, each with distinct permissions and access to different system features.
  - Create recipe management functionality
    - Enable students to:
      - Browse, search, and filter recipes by time, cost, ingredients, or dietary needs.
      - Add new recipes with descriptions, images, ingredients, and preparation steps.
    - Allow vendors to:
      - Create profiles with store name, location, and hours.
      - Add and update ingredient availability, prices, and sizes.
      - Link ingredients to recipes automatically.
    - Enable admins to:
      - Approve, edit, or delete user-submitted recipes.
      - Manage user roles and vendor profiles.
      - Remove inappropriate or inaccurate content.
  - Provide basic user guidance
    - Help new users understand how to navigate the site and contribute recipes or vendor data.
  - Integrate cost and availability tracking
    - Automatically calculate:
      - Cost per recipe and per serving.
      - Where each ingredient can be found near campus.
  - Develop a recipe search and filtering system
    - Allow users to quickly find recipes based on:
      - Dietary restrictions (vegan, gluten-free, etc.)
      - Preparation time
      - Ingredient availability
      - Estimated total cost
     

#### Landing page

When you retrieve the app at http://localhost:3000, this is what should be displayed:


<img src='/public/images/landing-page.png'>

The next step is to use the Login menu to either Login to an existing account or register a new account.

#### User Homepage

Clicking on the Login link, then on the Sign In menu item displays this page:

<img src='/public/images/user-homepage.png'>

#### User Profile

Alternatively, clicking on the Login link, then on the Sign Up menu item displays this page:

<img src='/public/images/user-profile.png'>

#### Admin Homepage

Once you log in (either to an existing account or by creating a new one), the navbar changes as follows:

<img src='/public/images/admin-homepage.png'>

You can now add new Stuff documents, and list the Stuff you have created. Note you cannot see any Stuff created by other users.

#### Search Recipes

After logging in, here is the page that allows you to add new Stuff:

<img src='/public/images/individual-recipes.png'>

#### Individual Recipes

After logging in, here is the page that allows you to list all the Stuff you have created:

<img src='/public/images/search-recipes.png'>

You click the "Edit" link to go to the Edit Stuff page, shown next.
