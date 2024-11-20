export const testInput = 'MSG|^~\&|SenderSystem|Location|ReceiverSystem|Location|20230502112233||DATA^TYPE|123456|P|2.5\nEVT|TYPE|20230502112233\nPRS|1|9876543210^^^Location^ID||Smith^John^A|||M|19800101|\nDET|1|I|^^MainDepartment^101^Room 1|Common Cold';

export const testPrsInput='PRS|1|9876543210^^^Location^ID||Smith^John^A|||M|19800101|'

export const testDetInput='DET|1|I|^^MainDepartment^101^Room 1|Common Cold'

export const outputPrs = {
    fullName: {
      lastName: 'Smith',
      firstName: 'John',
      middleName: 'A',
    },
    dateOfBirth: '1980-01-01',
    primaryCondition: ''
  }

export const outputComplete = {
    fullName: {
      lastName: 'Smith',
      firstName: 'John',
      middleName: 'A',
    },
    dateOfBirth: '1980-01-01',
    primaryCondition: 'Common Cold',
  }

export const outputDet = {
    fullName: null,
    dateOfBirth:'',    
    primaryCondition: 'Common Cold'
  }