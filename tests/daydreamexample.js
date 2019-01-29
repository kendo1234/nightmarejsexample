const Nightmare = require('nightmare')

describe('navigate to the internet and fill in a form', () => {
    it('should successfully enter details to the form', function(done) {
      this.timeout('10s')
  
const nightmare = Nightmare()

nightmare
.goto('https://the-internet.herokuapp.com/login')
.type('#username', 'testtsts')
.click('.fa')
.end()
done()

})

});