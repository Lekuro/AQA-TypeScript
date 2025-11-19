import { describe, expect, it, beforeAll } from 'vitest';
import { apiWorld, imageIdRegex, userIdRegex, createdAtRegex, countryCodeRegex } from '../src/hooks/vitest-global-setup';
// import { expect as expectChai } from 'chai';

describe('The Cat Api integration tests - Votes section', () => {
    let imageId: string;
    let voteId: number;
    const subId = 'sub_id';
    const voteValue = 10;

    beforeAll(async () => {
        const [response, jsonResponse] = await apiWorld.catsImageApi.getRandomImage();
        imageId = jsonResponse[0].id;
        console.log('response', response, '\njsonResponse', jsonResponse, '\nimageId', imageId);
    });

    it('should upload the vote to image by id with a value', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsVotesApi.uploadVoteToImage(imageId, voteValue, subId);
        // console.log('response', response, '\njsonResponse', jsonResponse);

        // Act
        voteId = jsonResponse.id;

        // Assert
        expect(response.status).toBe(201);
        expect(response.statusText).toBe('Created');
        expect(response.url).toBe('https://api.thecatapi.com/v1/votes');
        expect(jsonResponse.id).to.be.a('number');
        expect(jsonResponse.value).to.be.a('number');
        expect(jsonResponse.image_id).toMatch(imageIdRegex);
        expect(jsonResponse.sub_id).to.be.a('string');
        expect(jsonResponse.message).to.be.equal('SUCCESS');
        expect(jsonResponse.country_code).toMatch(countryCodeRegex);
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should fetch vote by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsVotesApi.getVoteById(voteId);
        // console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/votes/${voteId}`);
        expect(jsonResponse.id).to.be.equal(voteId);
        expect(jsonResponse.user_id).toMatch(userIdRegex);
        expect(jsonResponse.image_id).toMatch(imageIdRegex);
        expect(jsonResponse.sub_id).to.be.equal(subId);
        expect(jsonResponse.created_at).toMatch(createdAtRegex);
        expect(jsonResponse.value).to.be.equal(voteValue);
        expect(jsonResponse.country_code).toMatch(countryCodeRegex);
        expect(jsonResponse.image).to.have.property('id', imageId);
        expect(jsonResponse.image).to.have.property('url').to.contain('https://cdn2.thecatapi.com/images/', '.jpg');
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should get votes', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsVotesApi.getVotes();
        // console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe('https://api.thecatapi.com/v1/votes');
        expect(jsonResponse).to.be.an('array');
        expect(jsonResponse[0]).to.have.property('id').that.is.a('number');
        expect(jsonResponse[0]).to.have.property('image_id').match(imageIdRegex);
        expect(jsonResponse[0]).to.have.property('sub_id').that.is.a('string');
        expect(jsonResponse[0]).to.have.property('created_at').match(createdAtRegex);
        expect(jsonResponse[0]).to.have.property('value').that.is.a('number');
        expect(jsonResponse[0]).to.have.property('country_code').match(countryCodeRegex);
        expect(jsonResponse[0]).to.have.property('image').that.is.an('object');
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should delete vote by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsVotesApi.deleteVoteById(voteId);
        // console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/votes/${voteId}`);
        expect(jsonResponse).to.have.property('message', 'SUCCESS');
    });

    it('should not fetch vote by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsVotesApi.getVoteById(voteId);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(404);
        expect(response.statusText).toBe('Not Found');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/votes/${voteId}`);
        expect(response.ok).toBe(false);
    });
});
