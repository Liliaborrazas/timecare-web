import { Valoration } from './valoration.model';

export class Event {
    id: string;
    title: string;
    description: string;
    price: number;
    days: string;
    creator: string;
    startTime: string;
    endTime: string;
    email: string;
    valorations: Array<Valoration>
   
}
    
   