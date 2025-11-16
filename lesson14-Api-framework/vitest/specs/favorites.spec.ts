import { describe, expect, it } from 'vitest';
import { apiWorld, imageIdRegex, userIdRegex, createdAtRegex } from '../src/hooks/vitest-global-setup';
// import { expect as expectChai } from 'chai';

describe('The Cat Api integration tests - Favorites section', () => {
    let imageId: string;
    let favoriteId: number;
    const subId = 'sub_id';

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

    it('should upload the favorite to image by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsFavoritesApi.uploadFavoriteToImage(imageId, subId);
        // console.log('response', response, '\njsonResponse', jsonResponse);

        // Act
        favoriteId = jsonResponse.id;

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe('https://api.thecatapi.com/v1/favourites');
        expect(jsonResponse.id).to.be.a('number');
        expect(jsonResponse.message).to.be.equal('SUCCESS');
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should fetch favorite by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsFavoritesApi.getFavoriteById(favoriteId);
        // console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/favourites/${favoriteId}`);
        expect(jsonResponse.id).to.be.equal(favoriteId);
        expect(jsonResponse.user_id).toMatch(userIdRegex);
        expect(jsonResponse.image_id).toMatch(imageIdRegex);
        expect(jsonResponse.sub_id).to.be.equal(subId);
        expect(jsonResponse.created_at).toMatch(createdAtRegex);
        expect(jsonResponse.image.id).to.be.equal(imageId);
        expect(jsonResponse.image.url).to.contain('https://cdn2.thecatapi.com/images/', '.jpg');
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should get favorites', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsFavoritesApi.getFavorites();
        // console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe('https://api.thecatapi.com/v1/favourites');
        expect(jsonResponse).to.be.an('array');
        expect(jsonResponse[0]).to.have.property('id').that.is.a('number');
        expect(jsonResponse[0]).to.have.property('image_id').that.is.a('string');
        expect(jsonResponse[0]).to.have.property('sub_id').that.is.a('string');
        expect(jsonResponse[0]).to.have.property('created_at').that.is.a('string');
        expect(jsonResponse[0]).to.have.property('image').that.is.an('object');
        // expect(jsonResponse).toMatchSnapshot();
    });

    it('should delete favorite by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsFavoritesApi.deleteFavoriteById(favoriteId);
        // console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/favourites/${favoriteId}`);
        expect(jsonResponse.message).to.be.equal('SUCCESS');
    });
});
