// POC - proof of concept
// MCP - Model Context Protocol
// LLM - Large Language Model
// TDD - Test Driven Development - tests are written before the code
// AAA - Arrange, Act, Assert - structure of the unit test
// Given, When, Then gercken??? - structure of the unit test
// "Given" is used to set up the initial state or context for the test scenario.
// "When" is used to describe the action or event that is being tested.
// "Then" is used to describe the expected outcome or result of the action or event.
import { CombinedWaterHeater } from '../src/combined-water-heater';

describe('Unit tests', () => {
    let heater: CombinedWaterHeater;

    beforeEach(() => {
        console.log('before each');
        // Arrange
        heater = new CombinedWaterHeater('combined water heater');
    });

    describe('Water heater temperature', () => {
        it('default temperature should be 20', () => {
            expect(heater.getCurrentTemperature()).toBe(20);
        });

        it('Heat and check temperature', () => {
            // Arrange
            heater.setTemperature(15);

            // Act
            heater.turnOn();
            heater.setTemperature(35);
            heater.heatWater();

            // Assert
            expect(heater.getCurrentTemperature()).toBe(35);
        });
    });
});
