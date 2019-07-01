## exercise

1. Create a new project `cards-app-express`

2. Build the API:

   1. `GET /cards` &rarr; returns Array of `cards`
   2. `GET /cards/:id` &rarr; returns `card` with `title, description, category`
   3. `POST /cards` &rarr; adds a `card` to `cards`
   4. `DELETE /cards/:id` &rarr; removes a `card` from `cards`

3. Test your API with **Postman**

4. Save all changes to `cards` in `cards.json` and read from it, when the server starts

5. Create a frontend with those classes:
   - `App` &rarr; main app that controls the rest
   - `Form` &rarr; to create new cards
   - `CardList` &rarr; that renders and shows instances of `Card`
   - `Card` &rarr; represents a single card with `title, description, category`
     and has an Icon to `delete` a card

#### Hints:

- In your frontend you don't need multiple pages, just always show the CardList and Form
- Open the DevTools-Console to see possible Errors

**Enjoy**
