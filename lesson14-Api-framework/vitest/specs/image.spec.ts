import { describe, expect, it } from 'vitest';
import { ApiWorld } from '../src/api-world';
import { IUploadedImageDto } from '../src/models/the-cat-api/image.dto';
// import { expect as expectChai } from 'chai';

describe('The Cat Api integration tests', () => {
    const apiWorld = new ApiWorld();
    let imageId: string;
    let uploadedImage: IUploadedImageDto;

    it('should fetch random cat image', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsImageApi.getRandomImage();
        // console.log('response', response, '\njsonResponse', jsonResponse);

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
        // console.log('response', response, '\njsonResponse', jsonResponse);

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

    it('should fetch analysis of cat image by id ', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsImageApi.getAnalysisImageById(imageId);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/images/${imageId}/analysis`);
        expect(jsonResponse[0].image_id).to.be.eql(imageId);
        expect(jsonResponse).toMatchSnapshot();
    });

    it('should upload cat image', async () => {
        // Arrange
        const imageFileName = 'pexels-cat.jpg';
        const imagePath = `artifacts/${imageFileName}`;
        const [response, jsonResponse] = await apiWorld.catsImageApi.uploadImage(imagePath, imageFileName, 'sub_id', ['abys', 'aege']);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Act
        uploadedImage = jsonResponse as IUploadedImageDto;

        // Assert
        expect(response.status).toBe(201);
        expect(response.statusText).toBe('Created');
        expect(response.url).toBe('https://api.thecatapi.com/v1/images/upload');
        expect(jsonResponse).to.have.property('id').that.is.a('string');
        expect(jsonResponse).to.have.property('url').that.is.a('string');
        expect(jsonResponse).to.have.property('sub_id').that.is.a('string');
        expect(jsonResponse).to.have.property('width').that.is.a('number');
        expect(jsonResponse).to.have.property('height').that.is.a('number');
        expect(jsonResponse).to.have.property('original_filename').that.is.a('string');
        expect(jsonResponse).to.have.property('pending').that.is.a('number');
        expect(jsonResponse).to.have.property('approved').that.is.a('number');
        expect(jsonResponse).toMatchSnapshot();
    });

    it('should fetch uploaded cat images', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsImageApi.getUploadedImages();
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe('https://api.thecatapi.com/v1/images');
        expect(jsonResponse[0].id).to.be.eql(uploadedImage.id);
        expect(jsonResponse[0].url).to.be.eql(uploadedImage.url);
        expect(jsonResponse[0].sub_id).to.be.eql(uploadedImage.sub_id);
        expect(jsonResponse[0].original_filename).to.be.eql(uploadedImage.original_filename);
        expect(jsonResponse).toMatchSnapshot();
    });

    it('should upload breed to uploaded image', async () => {
        // Arrange
        const breed = 'abys';
        const [response, jsonResponse] = await apiWorld.catsImageApi.uploadBreedToUploadedImage(uploadedImage.id, breed);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/images/${uploadedImage.id}/breeds`);
        expect(jsonResponse.id).to.be.eql(breed);
    });

    it('should upload breed to uploaded image', async () => {
        // Arrange
        const breed = 'aege';
        const [response, jsonResponse] = await apiWorld.catsImageApi.uploadBreedToUploadedImage(uploadedImage.id, breed);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/images/${uploadedImage.id}/breeds`);
        expect(jsonResponse.id).to.be.eql(breed);
    });

    it('should fetch uploaded breeds', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsImageApi.getUploadedBreeds(uploadedImage.id);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/images/${uploadedImage.id}/breeds`);
        expect(jsonResponse).to.be.an('array');
        expect(jsonResponse).to.have.length(2);
        expect(jsonResponse).toMatchSnapshot();
    });

    it('should fetch uploaded image by id', async () => {
        // Arrange
        const [response, jsonResponse] = await apiWorld.catsImageApi.getUploadedImageById(uploadedImage.id);
        console.log('response', response, '\njsonResponse', jsonResponse);

        // Assert
        expect(response.status).toBe(200);
        expect(response.statusText).toBe('OK');
        expect(response.url).toBe(`https://api.thecatapi.com/v1/images/${uploadedImage.id}`);
        expect(jsonResponse.id).to.be.eql(uploadedImage.id);
        expect(jsonResponse.url).to.be.eql(uploadedImage.url);
        expect(jsonResponse.sub_id).to.be.eql(uploadedImage.sub_id);
        expect(jsonResponse.breeds).to.be.an('array');
        expect(jsonResponse.breeds).to.have.length(2);
        expect(jsonResponse).to.have.property('width').that.is.a('number');
        expect(jsonResponse).to.have.property('height').that.is.a('number');
        expect(jsonResponse).toMatchSnapshot();
    });
});
