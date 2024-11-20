import { messageParser } from "./classes/messageParser";

const input = 'MSG|^~\&|SenderSystem|Location|ReceiverSystem|Location|20230502112233||DATA^TYPE|123456|P|2.5\nEVT|TYPE|20230502112233\nPRS|1|9876543210^^^Location^ID||Smith^John^A|||M|19800101|\nDET|1|I|^^MainDepartment^101^Room 1|Common Cold';

const parser = new messageParser(input);
parser.parseMessage();

console.log('Output: ' + JSON.stringify(parser.parsedMessage));  