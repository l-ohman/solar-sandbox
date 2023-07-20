## main todo:
- [x] set up react-flow with zustand store
- [x] build solar model from data in zustand store
- [x] create forms for react-flow nodes
- [x] refactor components so planet position does not need to be in store
- [x] stars floating outside the solar system
- [ ] setup mobile view (horizontal division, scaling, zooming, etc)
- [ ] fix moon orbit (rotation is faster when closer to sun - probably a math/update error somewhere)
- [ ] 'add planet' connects planet to sun automatically
- [ ] move 'add moon' button to individual planets
- [ ] tutorial / guidance for first-time users

### secondary todo:
- [ ] simple noise textures for planets/sun
- [ ] ability to set camera to follow planets
- [x] ~~lower the rerender rate to 30fps~~
- [ ] increase size of nodes/edges; improve selectability
- [ ] ability to share systems via a link (code for end of URL)
- [x] ~~ability to login to save systems, potentially (if tone.js is added)~~
- [ ] restrict camera from leaving the system (maybe don't allow right-click movement?)
- [ ] camera movement smoothing
- [ ] switch to React production build on deployed version

### etc:
- [x] make text (header/footer) not selectable when clicking in node editor / 3d space
- [ ] attempt implementation of tone.js
