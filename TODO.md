#### Features
* add search with `redux` and search box in the appbar on the index page
* add two components `ReadBookCard` and `ToReadBookCard` to illustrate composition
* backend:
    * add a Book API on express server
    * connect the API to a MongoDB server
    * load data from the Book API into the shelf
* actual about page
    * good looking stack description
    * short project presentation 
* add history to navigation between pages
* add sorting in shelf (alphabetic, date of publication, etc.)
* define actual schema (Book, Author, ?User?)
* allow dynamic addition in the shelf
* use a `Slide` transition somehow to make things cooler
* pass config var through a `Context` object
* add a `BookPage` view
* SPA ?

#### Development
* add Flow
* add ESLint/Prettier
* use styled-components to create our own visual identity
* (switch to TypeScript eventually)

#### Next
* move layout (AppBar, etc.) to `<App>`
