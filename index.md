---
title: "Club Oven Lovin'"
layout: default
show_header: false
---

[![ci](https://github.com/club-oven-lovin/club-oven-lovin/actions/workflows/ci.yml/badge.svg)](https://github.com/club-oven-lovin/club-oven-lovin/actions/workflows/ci.yml)


# Team Members

- Koichiro Amakasu
- Miron Suarez
- Chloe Teijeiro
- Nathan Vogel
- Kevin Lee

# Project Links

- [Organization Page](https://github.com/club-oven-lovin)
- [Team Contract](https://docs.google.com/document/d/1fXQvWZ49DqS4yCMb3UyWqb7hSrQO9jujz0mKL-YnZF0/edit?usp=sharing)
- [M1 Project page](https://github.com/orgs/club-oven-lovin/projects/2)
- [M2 Project page](https://github.com/orgs/club-oven-lovin/projects/4)
- [M3 Project page](https://github.com/orgs/club-oven-lovin/projects/6)

# Deployment
- [Vercel Page](https://club-oven-lovin.vercel.app/)


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
     
# User Guide:

#### Landing page

  - The entry point for all users, providing options to log in, register, and access basic information about the platform and how it      works.

  <img src='/public/m2-updated-images/landing-page-screenshot.png'>

#### User Home page

  - The main dashboard for students, showing recipes, search tools, and quick access to their profile and contributed recipes.

  <img src='/public/m2-updated-images/user-home-page-screenshot.png'>

#### Vendor Home Page

  - A dashboard for vendors to view their profile, ingredient listings, and links to add or update ingredient information for recipes.

  <img src='/public/m2-updated-images/vendor-page-screenshot.png'>

#### Admin Homepage

  - A central page for admins to manage users, approve or edit recipes, and monitor site content for appropriateness and accuracy.

  <img src='/public/m1-updated-images/Admin-dashboard.png'>

### User Profile Page

  - Displays a student’s personal information, contributed recipes, favorite recipes, and options to edit profile details and dietary preferences.

  <img src='/public/m2-updated-images/userprofile-screenshot.png'>

  - Allows the student to update personal information and modify dietary preferences.

  <img src='/public/m2-updated-images/userprofile-edit-screenshot.png'>

#### Add Recipe

  - Displays a form for students to submit a new recipe. The form includes fields for a recipe image URL, recipe name, ingredients, step-by-step instructions, custom tags, and checkboxes for dietary restriction labels.

  <img src='/public/m2-updated-images/add-recipe-screenshot.png'>

#### Search Recipes

  - Allows users to search, filter, and sort recipes based on ingredients, dietary restrictions, preparation time, and estimated cost.

  <img src='/public/m2-updated-images/browse-recipes-screenshot.png'>

#### Individual Recipes

  - Shows a complete recipe with description, ingredients, preparation steps, estimated cost and servings, dietary notes, images, and nearby vendors for each ingredient.

  <img src='/public/images/individual-recipes.png'>

# Developer Guide:

This guide helps developers get up and running with Club Oven Lovin, including setup, running, and making changes.

1. System Requirements

Before starting, make sure you have:

* **Node.js v18 or later**
* **npm** (comes with Node.js)
* **Git**
* **Visual Studio Code** (or another code editor)
* **PostgreSQL** (local or Vercel-hosted)
* **A modern browser** such as Chrome, Firefox, or Safari

---

2. Get the Source Code

Clone the repository locally:

```bash
git clone https://github.com/<your-org>/club-oven-lovin.git
```

Navigate into the project directory:

```bash
cd club-oven-lovin
```

---

3. Set Up Environment Variables

Create a **.env** file in the project root and include the following:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-here

POSTGRES_DATABASE=verceldb
POSTGRES_HOST=your-host
POSTGRES_USER=default
POSTGRES_PASSWORD=your-password
POSTGRES_PRISMA_URL=postgres://...

DATABASE_URL=${POSTGRES_PRISMA_URL}
```

---

4. Install Dependencies

Run:

```bash
npm install
```

---

5. Database Setup

Generate the Prisma client:

```bash
npx prisma generate
```

Apply the database schema:

```bash
npx prisma db push
```

Optionally, populate the database with sample data:

```bash
npx prisma db seed
```

---

6. Run Locally

Start the development server:

```bash
npm run dev
```

Open the app in your browser at:

```
http://localhost:3000
```

---

7. Project Overview

* **app/** — main pages and routes
* **components/** — reusable UI components
* **lib/** — utilities, authentication, Prisma setup
* **prisma/** — database schema and seed files
* **public/** — static files and images
* **styles/** — global styling

---

8. Making Changes

### Pages

Add new pages under `app/`. Example:

```
app/new-page/page.tsx → accessible at /new-page
```

### Components

Add or update components in:

```
components/
```

### Database

Edit the schema in:

```
prisma/schema.prisma
```

Then run:

```bash
npx prisma db push
npx prisma generate
```

### API Routes

Add or update routes in:

```
app/api/
```

### Authentication

Handled in:

```
lib/authOptions.ts
```

You can modify sign-in/session behavior or restrict access by role.
