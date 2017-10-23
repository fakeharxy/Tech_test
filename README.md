Hey Chaps, hope you having a good day!

So here is the result from my test coding application to create an product that consumes a video api for searching movies and getting movie information.

The time was a little on the short side so I didn't achieve as much as I would like.

Things left todo:
  #1 Unit tests, normally with react and redux I would use JEST and ENZYME and combined with `axios-mock-adaptor` for testing api responses.
  #2 More effort in CSS architecture, i've used `styled-components` with a bit of BEM, but I would have liked to build out an `ITCSS` base,
     this methodology works really well with `styled-components`
  #3 Fill out `PropTypes` for each component
  #4 General code clean up, apply `eslint` rules, refactor where needed
  #5 Implement Conditional rendering for favourites heading if the list of videos doesn't contain a trailer
  #6 Style search page

How to run.

This app is bootstrap with `create-react-app` mainly to save time setting up the environment, build scripts etc. I found whilst using `create-react-app`
it come with some pretty cool features for debugging.

  #1 npm install
  #2 npm run start - should spin up a server, if not navigate tp 'localhost:1337'
