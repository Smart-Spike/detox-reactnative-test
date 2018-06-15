const request = require('supertest');

const host_url = 'https://jsonplaceholder.typicode.com';


describe('Detox ReactNative Test with Jest and SuperTest', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should be able to query an API', (done) => {
        const container = request(host_url + '/posts/1');

        container.get('')
            .expect(200, done);
    });

    it('should be able to submit to an API', (done) => {
        const container = request(host_url + '/posts');

        container.post('')
            .send({title: 'animal', body: 'cat', userId: 1})
            .set('Accept', 'application/json')
            .end((err, res) => {
                console.log('response', JSON.stringify(res.body));
            });

    });


    it('should have welcome screen', async () => {
        await expect(element(by.id('welcome'))).toBeVisible();
    });

    it('should show hello screen after tap', async () => {
        await element(by.id('hello_button')).tap();
        await expect(element(by.text('Hello!!!'))).toBeVisible();
    });

    it('should show world screen after tap', async () => {
        await element(by.id('world_button')).tap();
        await expect(element(by.text('World!!!'))).toBeVisible();
    });
});