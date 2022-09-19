import app from "..";
import request from 'supertest'


describe('GET /', function() {
  it('response: ', async () => {
    expect(25).toEqual(25)
    const response = await request(app)
      .get('/')
      .query({fileName: 'ahmedHisham', width: 100, height: 100})
    expect(response.status).toEqual(200);
  });
});

