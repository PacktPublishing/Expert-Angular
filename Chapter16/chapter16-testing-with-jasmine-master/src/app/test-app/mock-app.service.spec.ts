import { MockAppService } from './mock-app.service';
import { TestBed, inject } from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {
  HttpModule,
  XHRBackend,
  ResponseOptions,
  Response,
  RequestMethod
} from '@angular/http';

const mockResponse = {
  'isbn': "123456",
  'book': {
    "id": 10,
    "title": "Packt Angular"
  }
};
const mockResponseText = 'Hello Packt';

describe('service: MockAppService', () => {
 beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
       providers: [
        {
          provide: XHRBackend,
          useClass: MockBackend
        }, MockAppService]
    });

  });

// Example #1 
  it('MockAppService Service should return 4 publication values', inject([MockAppService, XHRBackend], (service: MockAppService, mockBackend: XHRBackend) => {
    let names = service.getpublications();
    expect(names).toContain('Packt');
    expect(names).toContain('Packt PDF');
    expect(names).toContain('Packt Video');
    expect(names.length).toEqual(3);
  }));

// Example 4

  it('Mocking Services with Json', inject([MockAppService, XHRBackend], (service: MockAppService, mockBackend: MockBackend) => {
    const expectedUrl = 'someurl';

    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Get);
        expect(connection.request.url).toBe(expectedUrl);

        connection.mockRespond(new Response(
          new ResponseOptions({ body: mockResponse })
        ));
    });

    service.search('Angular').subscribe(res => {
      expect(res).toEqual(mockResponse);
    });
  }));


});

