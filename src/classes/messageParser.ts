import { outputMessage, Patient } from "../types/commonTypes";



export class messageParser {
    private message: outputMessage = {fullName:null, dateOfBirth:'', primaryCondition:''};
    private inputData:string;

    get parsedMessage():outputMessage {
        return this.message;
    }
    constructor(input:string) {
        this.inputData = input;
    }

    parseMessage() {
        const lines = this.inputData.split('\n');

        try{ 
            lines.forEach(line=>{
                //only process lines with a starting segment
                if (line.length > 3) 
                    this.parseLine(line);            
            });
        } catch (error)
        {
            //log the error and return
            console.log(error);
        }
    }

    parseLine(line: string) {
        //only proceed if line starts with message segments PRS or DET
        if (!(line.startsWith('PRS') || line.startsWith('DET')))
            return;

        const fields = line.split('|');
        
        let patientName: Patient = { lastName: '', firstName: '', middleName: '' };
        let primaryCondition='';
        let dob = '';
        
        if (line.startsWith('PRS')){
            const nameParts = fields[4].split('^');
            patientName = {
                lastName: nameParts[0] || '',
                firstName: nameParts[1] || '',
                middleName: nameParts[2] || ''
            };
            dob = fields[8] || ''; 
            this.message = {
                fullName: patientName,
                dateOfBirth: this.formatDate(dob),
                primaryCondition: ''
            };       
        }
        else if (line.startsWith('DET')){
            const condition = fields[4].split('^');
            primaryCondition = condition[0] || '';
            this.message.primaryCondition = primaryCondition;
        }                    
    }

    formatDate(dateString: string): string {
        if (dateString.length !== 8) {
        throw new Error("Invalid date string. Must be in YYYYMMDD format.");
        }
        const year = dateString.slice(0, 4);
        const month = dateString.slice(4, 6);
        const day = dateString.slice(6, 8);
    
        return `${year}-${month}-${day}`;
    }
}