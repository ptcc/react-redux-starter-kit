import HomeRoute from './homeRoutes'

describe('(Route) Home', () => {
  let _component

  beforeEach(() => {
    _component = new HomeRoute.component().render()
    console.log(_component);
  })

  it('Should return a route configuration object', () => {
    expect(typeof(HomeRoute)).to.equal('object')
  })

  it('Should define a route component', () => {
    expect(_component.type).to.equal('div')
  })
})
