# Student Store Project

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:





<a href="https://www.loom.com/share/c281460abaf149b687b392746c30b325">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/c281460abaf149b687b392746c30b325-with-play.gif">
  </a>



Week 3
<a href="https://www.loom.com/share/387967819f5d4a51a314a5892f47b7ed">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/387967819f5d4a51a314a5892f47b7ed-with-play.gif">
  </a>




- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

## *Week 2* Application Features

### Core Features

- [X] The website displays header, banner, search, product grid, about, contact, and footer section.
- [X] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [X] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [X] Users can search for products.
- [X] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [ ] Users can click to expand the shopping cart in the left navigation.
- [ ] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [ ] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [ ] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [X] Users can still read the About and the Contact Us portion of the page regardless if they search, filter using category, or click on a product for more descriptions.

## *Week 3* Application Features

### Core Features

- [X] User can click to expand the shopping cart in the left navigation.
- [X] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [X] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [X] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [X] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [X] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [ ] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [X] Created a Exit button to exit the Checkout after the user is done checking out items from the cart.
