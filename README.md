
# ShoeStocks

For running the website locally use your server url as `VITE_SERVER_URL` in a .env file. Uses `VITE_CLOUDINARY_API_KEY` and `VITE_CLOUD_NAME` for cloudinary credentials.

Run `yarn` for installing node modules and `yarn dev` for running the website locally 

Create a user account by registering from `/register` page. 


# Features


A shoe inventory management web app that lets you manage your product inventory of shoes. User can easily maintain and organize his inventory and also keep track of his sales and purchases.

This app includes features like:

**Product List:** A detailed list of products is present in the app that lets you filter the list using shoe model, brand, price, color, size, material etc.

**Low Stock Product List:** User can set alert for product stocks and when the stock reaches that alert quantity, the product gets added to the list

**Sales List:** A detailed list of sales made by the user is recorded and shown. Also there are recent sales list for keeping track of recent sales from dashboard.

**Graphical Representation:** Important information such as best selling products, weekly sales and purchase comparision, current stock, monthly profit are shown using graphs and pie charts.


Some more key features of this app are: 

**Product Management**
* User can add a products which will be added to the product list and a purchase record is also stored for it separately
* User can update a product anytime from the product list
* User can delete a product from the list direcly

**Sales Management**
* User can make a sale and the sale will be recorded. Also the sale quantity for products will be reduced from the product's current stock
* If the sale is equal to the current stock, the product will be removed from current product list
* Sales are listed in a seprate table and user can filter saled by daily, monthly, weekly and yearly
