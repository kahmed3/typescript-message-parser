export type outputMessage = {
    fullName: Patient;
    dateOfBirth: string;
    primaryCondition: string;
}

export type Patient = { lastName: string; firstName: string; middleName: string } | null;