export type Conference = {
    title: string;
    description: string;
    location: string;
    venue: string;
    startDate: string;
    endDate: string;
    days: string;
    talk: string; 
    speaker: string;
}

export type Day = {
    title: string;
    speaker: string;
    talks: Talk[];
}

export type Talk = {
    title: string;
    speaker: string;
    time: string;
}

export type Speaker = {
    name: string;
    title: string;
}