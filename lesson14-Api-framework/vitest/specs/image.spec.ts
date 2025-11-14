import { describe, expect, it } from 'vitest';
import { ApiWorld } from '../src/api-world';
// import { expect as expectChai } from 'chai';

describe('The Cat Api integration tests', () => {
    const apiWorld = new ApiWorld();
    let imageId: string;

    it('should fetch random cat image', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsImageApi.getRandomImage();
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Act
        imageId = jsonResponse[0].id;

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe('https://api.thecatapi.com/v1/images/search');
        expect(jsonResponse).to.be.an('array');
        expect(jsonResponse).to.have.length(1);
        expect(jsonResponse[0]).to.have.property('id').that.is.a('string');
        expect(jsonResponse[0]).to.have.property('url').that.is.a('string');
        expect(jsonResponse[0]).to.have.property('width').that.is.a('number');
        expect(jsonResponse[0]).to.have.property('height').that.is.a('number');
        expect(jsonResponse[0]).to.have.property('breeds').that.is.an('array');
        expect(jsonResponse).toMatchSnapshot();
    });

    it('should fetch cat image by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsImageApi.getImageById(imageId);
        console.log('response', response, '\nimage', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/images/${imageId}`);
        expect(jsonResponse.id).to.be.eql(imageId);
        expect(jsonResponse.url).to.be.a('string');
        expect(jsonResponse.width).to.be.a('number');
        expect(jsonResponse.height).to.be.a('number');
        expect(jsonResponse).toMatchSnapshot();
    });
});
