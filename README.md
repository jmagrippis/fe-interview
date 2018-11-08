# Cleo Frontend Interview - Bills

[Live demo] deployed to Google App Engine, sadly missing one feature the actual implementation has when you run it locally, updating bills.

This is a gotcha with [Google App Engine] combined with having to use just a json file as the database: everything is uploaded to a Google Cloud Storage bucket, and writing the interface to manoeuver the permissions for writing to a file there, is more work than using Datastore or Cloud PostgreSQL. And I didn't want to do that since I did spend most of the time on the non-frontend bits anyway.

To run this locally, and see it actually working as expected, you need the backend service running. So from the root of the repo, run on a terminal:

```sh
cd ./server
yarn
yarn build
yarn dev
```

Leave that tab running and, on another terminal from the root of the repo, run:

```sh
yarn
yarn start
```

Have fun!

## Why write a backend anyway

I am a fullstack engineer for one, and I do think a great frontend starts with a great backend. I am a huge proponent of [GraphQL] and a layer like that allows for so much freedom and efficiency on the frontend. Quite easily done with [Apollo GraphQL] as well, if you have the experience.

It's definitely something I'm bringing in more in my current company and all my personal side-projects. I know in my next company I'd manage to get buy-in to use it heavily, so why not use it for the technical tests and expand my proficiency with it?

## Testing

As much as I love how Jest works nowadays (Javascript comeback of the decade), as comfortable as I am simulating events left and right and checking if the enzyme-rendered component has updated as expected, there is always a bit of a nagging feeling of "does it actually work IRL".

So I've taken to using Jest for testing anything _that's not UI_, and trying [Cypress] to BDD the front-end with confidence!

One quirk of Cypress is that it recommends running the app outside of it, so **start the app first**, as described above, then open the tool with `yarn cypress open` and click in the UI to run all specs. It only takes a few seconds and looks pretty cool even with a bare-bones app like this!

```sh
# on project root
cd ./server
yarn
yarn build
yarn dev

# on another terminal
cd .. # go to project root again
yarn
yarn start

# on yet another terminal
yarn cypress open
```

Again, it's that pesky json file that's causing a bit of trouble there, IRL it would have been even faster and easier to use, for example you wouldn't need a live-reloading server in order for re-seeding the database to work.

You may also `yarn cypress run`, which runs the tests in headless mode without any UI, like you'd have your CI/CD tool do.

You may find the specs in the `cypress/integration` directory, where you'll notice they sadly use the old-school mocha + chai assertion combo. I much prefer Jest's `expect`, as well as its mocking solution over sinon, but when Cypress started taking shape, mocha + chai + sinon were the undisputed testing kings.

I have experimented with Jest + [Puppeteer], but even though writing the tests is more pleasant, I do find the actual flow better with Cypress, it feels faster and having UI you can click around, with failing points that highlight relevant elements, is a dream.

I did get in touch with the Cypress team though, and Jest support is in their pipeline!

## Typescript

As if writing a backend service on a frontend test wasn't enough, as well as not really using the testing tool already in the repo, I've also taken the liberty to use Typescript for both the backend and the frontend.

I've been using it a lot, it's getting more and more buy-in in my current company, and it supercharges my VSCode. Coupled with the BDD, its static typing makes unit tests even more useless in most scenarios.

That's said it still looks like Javascript, so I'm sure even engineers not familiar with it will get it. And it's much more pleasant to use actual types instead of `PropTypes`.

## Design

There was no design spec other than two constants for colours that seemed to match the Cleo brand, so I went quite light on it: Bare-bones and usable, displaying some useful information but not overloading the user. With the logic in place it'll be quite easy to match something in Sketch / Figma.

## Closing thoughts

There are quite a few things to fine-tune or even deliver in this mock app, like matching bills to their categories for example, or adding more design flair with animations, or making it more accessible to screen readers.

I was mindful of the time and the suggested 3 hours, and in the end I spent around 6 spread across 3 evenings to get to this "spec complete + some nice images" point. I figured a bit extra time was fine since I had fun doing the backend; which was definitely not a requirement, and probably a bad idea if my only goal was "do well on the interview".

I just wouldn't enjoy working at a company that'd be like "oh he should have used Redux and Enzyme" :-)

So, thanks a bunch for assessing this, I hope you like it and do let me know if you want me to elaborate on anything.

[live demo]: https://cleo-bills.appspot.com/ 'Buttons do not do anything, but only on app engine'
[google app engine]: https://cloud.google.com/appengine/ 'I love it'
[graphql]: https://graphql.org/ 'A query language for your API'
[cypress]: https://www.cypress.io/ 'Fast, easy and reliable testing for anything that runs in a browser.'
[puppeteer]: https://github.com/GoogleChrome/puppeteer 'Headless Chrome Node API'
[apollo graphql]: https://www.apollographql.com/ 'Their tagline is a "complete solution to do GraphQL right"'
