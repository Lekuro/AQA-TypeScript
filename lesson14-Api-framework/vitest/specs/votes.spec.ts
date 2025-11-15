import { describe, expect, it } from 'vitest';
import { apiWorld } from '../src/hooks/vitest-global-setup';
// import { expect as expectChai } from 'chai';

describe('The Cat Api integration tests', () => {
    let imageId: string;
    let voteId: number;
    const subId = 'sub_id';
    const voteValue = 10;

    it('should fetch and save random cat image', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsImageApi.getRandomImage();
        // console.log('response', response, '\njsonResponse', jsonResponse);

        // Act
        imageId = jsonResponse[0].id;
        console.log('imageId', imageId);

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
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should upload the vote to image by id with a value', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsVotesApi.uploadVoteToImage(imageId, voteValue, subId);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Act
        voteId = jsonResponse.id;

        // Assert
        expect(response.status).toBe(201);
        expect(response.statusText).toBe('Created');
        expect(response.url).toBe('https://api.thecatapi.com/v1/votes');
        expect(jsonResponse.id).to.be.a('number');
        expect(jsonResponse.value).to.be.a('number');
        expect(jsonResponse.image_id).toMatch(/([a-z0-9]{3}|[A-Z0-9]{7})/);
        expect(jsonResponse.sub_id).to.be.a('string');
        expect(jsonResponse.message).to.be.equal('SUCCESS');
        expect(jsonResponse.country_code).toMatch(/[A-Z]{2}/);
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should fetch vote by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsVotesApi.getVoteById(voteId);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/votes/${voteId}`);
        expect(jsonResponse.id).to.be.equal(voteId);
        expect(jsonResponse.user_id).toMatch(/[a-z0-9]{6}/);
        expect(jsonResponse.image_id).toMatch(/([a-z0-9]{3}|[A-Z0-9]{7})/);
        expect(jsonResponse.sub_id).to.be.equal(subId);
        expect(jsonResponse.created_at).toMatch(/[-0-9TZ:.]{24}/);
        expect(jsonResponse.value).to.be.equal(voteValue);
        expect(jsonResponse.country_code).toMatch(/[A-Z]{2}/);
        expect(jsonResponse.image.id).to.be.equal(imageId);
        expect(jsonResponse.image.url).to.contain('https://cdn2.thecatapi.com/images/', '.jpg');
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should get votes', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsVotesApi.getVotes();
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe('https://api.thecatapi.com/v1/votes');
        expect(jsonResponse).to.be.an('array');
        expect(jsonResponse[0]).to.have.property('id').that.is.a('number');
        expect(jsonResponse[0]).to.have.property('image_id').that.is.a('string');
        expect(jsonResponse[0]).to.have.property('sub_id').that.is.a('string');
        expect(jsonResponse[0]).to.have.property('created_at').that.is.a('string');
        expect(jsonResponse[0]).to.have.property('value').that.is.a('number');
        expect(jsonResponse[0].country_code).toMatch(/[A-Z]{2}/);
        expect(jsonResponse[0]).to.have.property('image').that.is.an('object');
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should delete vote by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsVotesApi.deleteVoteById(voteId);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/votes/${voteId}`);
        expect(jsonResponse.message).to.be.equal('SUCCESS');
    });
});
