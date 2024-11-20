import { messageParser } from '../classes/messageParser';
import { outputComplete, outputDet, outputPrs, testDetInput, testInput, testPrsInput } from './fixtures/messageFixture';

describe('Message Parser Application', () => {  
  it('should parse a PRS line correctly', () => {
    const parser = new messageParser(testPrsInput);
    parser.parseMessage();

    expect(parser.parsedMessage).toBeDefined();
    expect(parser.parsedMessage).toEqual(outputPrs);
  });

  it('should parse a DET line correctly', () => {
    const parser = new messageParser(testDetInput);
    parser.parseMessage();

    expect(parser.parsedMessage).toBeDefined();
    expect(parser.parsedMessage).toEqual(outputDet);
  });

  it('should parse the complete message correctly', () => {
    const parser = new messageParser(testInput);
    parser.parseMessage();

    expect(parser.parsedMessage).toBeDefined();
    expect(parser.parsedMessage).toEqual(outputComplete);
  })
});
