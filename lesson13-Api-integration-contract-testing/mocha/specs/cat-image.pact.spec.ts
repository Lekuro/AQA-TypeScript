import { expect } from 'chai';
import { CatService } from '../src/cat-service';
import { IImageDto } from '../src/models/index';
import { MatchersV3, PactV3, Verifier } from '@pact-foundation/pact';
import * as path from 'path';

describe('-------- cat-image api contract test --------', () => {
    const apiKey = 'live_ITUwxKsqOsSw4j3mlY0zzdlr1E2orBg2rG5Xbpmij4bdXIvLsMtZXTXzvK21LS3C';
    let catService: CatService;

    const provider = new PactV3({
        consumer: 'cat-consumer',
        provider: 'cat-provider'
    });

    const expectedResponse = [
        {
            breeds: [],
            id: 'drg',
            url: 'https://cdn2.thecatapi.com/images/drg.jpg',
            width: 600,
            height: 398
        }
    ] as unknown as IImageDto[];

    const expectedBody = MatchersV3.like(expectedResponse);

    describe('consumer test', () => {
        it('create contract', () => {
            provider
                .given('cats exists')
                .uponReceiving('a request for cats')
                .withRequest({
                    method: 'GET',
                    path: '/images/search',
                    headers: {
                        'x-api-key': apiKey,
                        accept: '*/*'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: expectedBody
                });

            return provider.executeTest(async (nockServer) => {
                catService = new CatService(nockServer.url);
                const images = await catService.getCatImages();
                expect(images[0]).to.contain.keys('id', 'url', 'width', 'height', 'breeds');
                expect(images[0].id).to.be.a('string');
                expect(images[0].url).to.be.a('string');
                expect(images[0].width).to.be.a('number');
                expect(images[0].height).to.be.a('number');
            });
        });
    });
    describe('provider test', () => {
        it('verify contract', () => {
            return new Verifier({
                providerBaseUrl: 'https://api.thecatapi.com/v1',
                pactUrls: [path.resolve(process.cwd(), 'pacts', 'cat-consumer-cat-provider.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('contract verified');
                });
        });
    });
});
