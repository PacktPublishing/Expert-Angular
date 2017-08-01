import {TestAppComponent} from './src/app/test-app/test-app.component';

describe('Dashboard page', function() {

    var dashboard: TestAppComponent = new TestAppComponent();

    beforeEach(function() {
        browser.get('#/dashboard');
    });

    it('should say hello', function() {
        dashboard.sayHi('yo');
        expect(dashboard.greeting.getText()).toEqual('Yo yo');
    });

});