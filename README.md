<h1 align="center">
    <a href="https://yetanotherbookshelf.herokuapp.com">YetAnotherBookshelf</a>
</h1> 

Idea behind this project
----

Trying to reproduce the feeling of a packed bookshelf :books:.  

Just a personal project to get better at things. Any kind of feedback (best pratices, UI-wise, etc.) would be appreciated.


About this stack
----------------

It's an augmented MERN stack.

<table style="width:100%;">
    <tr>
        <td><b>React.js</b> <span style="font-size:75%;color:grey;">16.4.z</span></td>
        <td>View library for building declarative and reusable UI components.</td>
    </tr>
    <tr>
    	<td><b>Next.js</b> <span style="font-size:75%;color:grey;">6.1.z</span></td>
		<td>Zero-config but extensible framework that brings SSR with React.js and Express.js </td>
    </tr>
    <tr>
    	<td><b>Node.js</b> <span style="font-size:75%;color:grey;">10.10.z</span></td>
		<td>JavaScript runtime server-side environment.</td>
    </tr>
    <tr>
    	<td><b>Express.js</b> <span style="font-size:75%;color:grey;">4.16.z</span></td>
		<td>Unopinionated web framework on top of Node.js to deal with routing, request handling, middleware, etc.</td>
    </tr>
    <tr>
    	<td><b>Material-UI</b> <span style="font-size:75%;color:grey;">3.0.z</span></td>
		<td>UI library which is React implementation of Google material design specification, to design intuitive and responsive UI. </td>
    </tr>
    <tr>
    	<td>
            <b>Apollo</b> <span style="font-size:75%;color:grey;">
        	<br/>server: 2.y.z<br/>client: boost</span></td>
		<td>
            GraphQL server and client implementation, with zero-config client-side cache and declarative fetching.
            <br/>
            <b>GraphQL</b> is a "Get what you need" typed query language that could be used to replace REST API in the future.
        </td>
    </tr>
    <tr>
    	<td><b>Redux.js</b> <span style="font-size:75%;color:grey;">4.0.z</span></td>
		<td>Client state management library, introducing a predictable state container.</td>
    </tr>
    <tr>
    	<td><b>Webpack</b> <span style="font-size:75%;color:grey;">4<br>embedded with Next.js</span></td>
		<td>JavaScript module bundler, used to build preprocessed and optimized static assets from any ressources required in the project. Brings HMR to the development.</td>
    </tr>
    <tr>
    	<td><b>Babel</b> <span style="font-size:75%;color:grey;">7</span></td>
		<td>JavaScript transpiler, used to convert recent modern JS into backward compatible JS used by current and older execution environment.</td>
    </tr>
    <tr>
    	<td><b>MongoDB</b> <span style="font-size:75%;color:grey;">3.6.z</span></td>
		<td>Document-oriented NoSQL database.</td>
    </tr>
</table>


Production
----------
<table>
    <tr><th>Content</th><th>Hosted on</th></tr>
    <tr><td>MongoDB</td><td>MLab</td></tr>
    <tr><td>App</td><td>Heroku</td></tr>
    <tr><td>Images</td><td>Cloudinary</td></tr>
</table>

Toolchain
---------
<table>
    <tr><td><b>ESLint</b></td></tr>
    <tr><td><b>Prettier</b></td></tr>
    <tr><td><b>Flow</b></td></tr>
    <tr><td><b>Nodemon</b></td></tr>
</table>

### Getting Started
1. Set the database credentials in a `.env` files at the root directory:
    * `DB_USER`, `DB_PASS`, `DB_HOST`, `DB_PORT`
