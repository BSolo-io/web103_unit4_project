# WEB103 Project 4 - *Bolt Bucket*

Submitted by: **Borys**

About this web app: **Bolt Bucket is a car customizer for a sedan modeled after the Toyota Corolla. Users pick an exterior color, roof, wheels, and interior, and see the car's picture tiles and total price update live as they choose. They can name and save their build, then view, edit, or delete saved cars. All cars are stored in a PostgreSQL database on Render and served through an Express API to a React frontend.**

Time spent: **9** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses React to display data from the API.**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured `CustomItem` table.**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **Users can view **multiple** features of the `CustomItem` (e.g. car) they can customize, (e.g. wheels, exterior, etc.)**
- [x] **Each customizable feature has multiple options to choose from (e.g. exterior could be red, blue, black, etc.)**
- [x] **On selecting each option, the displayed visual icon for the `CustomItem` updates to match the option the user chose.**
- [x] **The price of the `CustomItem` (e.g. car) changes dynamically as different options are selected *OR* The app displays the total price of all features.**
- [x] **The visual interface changes in response to at least one customizable feature.**
- [x] **The user can submit their choices to save the item to the list of created `CustomItem`s.**
- [x] **If a user submits a feature combo that is impossible, they should receive an appropriate error message and the item should not be saved to the database.**
- [x] **Users can view a list of all submitted `CustomItem`s.**
- [x] **Users can edit a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [x] **Users can delete a submitted `CustomItem` from the list view of submitted `CustomItem`s.**
- [x] **Users can update or delete `CustomItem`s that have been created from the detail page.**


The following **optional** features are implemented:

- [x] Selecting particular options prevents incompatible options from being selected even before form submission

The following **additional** features are implemented:

- [x] Convertible toggle that switches the roof list between fixed roofs and convertible roofs
- [x] Option popups with an image tile for every choice, showing its name and added price
- [x] 2x2 summary grid on the Create, Details, and Edit pages; hover a tile to see the option and its price
- [x] Custom-rendered images for every option (paint swatches, roofs, wheels by price tier, and leather seat colors)
- [x] All options and prices live in one file (`options.js`), so adding or changing an option updates every page

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://imgur.com/a/l1HAsvZ' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ScreenToGif](https://www.screentogif.com/)
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

- **Connecting to Render:** My first connection attempts failed. Running `reset.js` from the project root meant the `.env` file wasn't found, which caused an SSL error. After that, I had used Render's *Internal* hostname instead of the *External* one. Running the script from the `server` folder and using the full external hostname fixed both.
- **Missing `.env` after cloning:** The `.env` file is ignored by Git (on purpose, since it holds the database password), so it had to be recreated after cloning the repo locally.
- **Port conflicts:** `npm run dev` already starts both the server and the client. Running `npm start` at the same time caused an "address already in use" error on port 3000.
- **Styling conflicts:** The starter's global button styles stretched the option tiles to full width, so I added more specific CSS rules to keep them a fixed size.
- **Impossible combos:** A convertible roof can't be paired with Speed wheels or a White interior. These options are greyed out as soon as a convertible roof is picked, and are also checked again on submit.

## License

Copyright 2026 Borys

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.