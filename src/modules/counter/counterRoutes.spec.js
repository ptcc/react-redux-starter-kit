import CounterRoutes from './counterRoutes'

describe('(Route) Counter', () => {
  let _route

  beforeEach(() => {
    _route = CounterRoutes({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof(_route)).to.equal('object')
  })

  it('Configuration should contain path `counter`', () => {
    expect(_route.path).to.equal('counter')
  })

})
