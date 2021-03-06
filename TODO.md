#### Features
* add two components `ReadBookCard` and `ToReadBookCard` to illustrate composition
* short project presentation
* add sorting in shelf (alphabetic, date of publication, etc.)
* add user/login/authentification/jwt/oauth
* define actual schema (Book, Author, ?User?)
* allow dynamic addition in the shelf
* cache wiki API calls on express server
* use theme to normalize MUI style
* minify static images (with webpack loader)
* on `xs` breakdown : add a search a icon/button, which show search input on when clicked on
* BookCard UI : 
    * make the book cover fill the BookCard
    * on hovering:
        * show title/author over the cover
        * make cover slightly disappear
* use CDN :
    * for images (Cloudinary free-tier)
    * for material UI ?
* audit with Lighthouse, codacy. CircleCI, Sentry
* leverage `_document.js` to add transition between main page and book pages
* use font-size to make things more responsive
* paginate boodgrid
* search : add section for author and allow searching by author or isbn
* add isLoading state and make a presentional loading component with CSS animation  
* NavBar: implement the priority+ pattern

#### Development
* add Enzyme for shallow testing
* use styled-components to create our own visual identity
    * in `_document.js` :
        * unset styled-jsx
        * set styled-components
* (switch to TypeScript eventually)
* review dependencies versions

#### Next
* move layout (AppBar, etc.) to `<App>`