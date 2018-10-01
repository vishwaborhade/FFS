import { Event } from './event.model';

export class EventService {
    selectedEvent: Event;
    events: Event[] = [
        new Event('E01', 'Fashion Street', '', 'Fashion Show', 'Chicago, IL, USA', 'This fashion show occurs once in year.', 
                    '09/04/2018', '02/15/2018', '', 'GUESS INC', '800-222-1000', '$250', 'Formal wear allowed in Event.', '003'),
        new Event('E02', 'Fashion Trend', '', 'Demo', 'Santacruz, Mumbai ', 'This event is organized by Vishwa.', 
                '10/01/2018', '03/12/2018', '', 'Vishwa INC', '888-222-6666', 'Free', 'During event free lunch will be offered.', '002'),
        new Event('E03', 'Fashion Exhibition', '', 'Fashion Show', 'Frankfurt, Germany', 'This fashion show occurs once in year.', 
                    '10/18/2018', '03/31/2018', '', 'KOHLS LLC', '800-222-1000', '$500', 'Formal wear allowed in Event.', '001'),
        new Event('E04', 'On the Rock Party', '', 'Fashion Show', 'London, UK', 'This fashion show occurs once in year.', 
                    '10/30/2018', '02/28/2018', '', 'Shopper\'s Stop', '800-222-1000', '$300', 'Formal wear allowed in Event.', '002'),
        new Event('E05', 'Fashion Street', '', 'Fashion Show', 'Mumbai, MH, INDIA', 'This fashion show occurs once in year.', 
                    '12/01/2018', '05/12/2018', '', 'GUESS INC', '800-222-1000', '$250', 'Formal wear allowed in Event.', '003'),
        new Event('E06', 'Fashion Auction', '', 'Fashion Show', 'Miami, FL, USA', 'This fashion show occurs once in year.', 
                    '12/08/2018', '06/15/2018', '', 'GUESS INC', '800-222-1000', '$100', 'Formal wear allowed in Event.', '001')
    ];
    
   
    getEvents() {
        return this.events.slice();
    }
    
    getDesingerEvents(designerId: string) {
        const designerEvents: Event[] = [];
        for(let event of this.events){
            if(event.uploadedByDesigner == designerId) {
                designerEvents.push(event);
            }
        }
        return designerEvents;
    }
    
   
    getOtherDesingerEvents(designerId: string) {
        const otherEvents: Event[] = [];
        for(let event of this.events){
            if(event.uploadedByDesigner != designerId) {
                otherEvents.push(event);
            }
        }
        return otherEvents;
    }
    
    getEvent(eventId: string) {
        for(let event of this.events){
            if(event.eventId == eventId) {
                this.selectedEvent = event;
            }
        }
    }
    
    deleteEvent(eventId: string) {
        for(let event of this.events){
            if(event.eventId == eventId) {
                this.events.splice(this.events.indexOf(event), 1);
            }
        }
    }
    
    updateEvent(modifiedEvent: Event){
        for(let event of this.events){
            if(event.eventId == modifiedEvent.eventId) {
                this.events.splice(this.events.indexOf(event), 1);
                this.events.push(modifiedEvent);
                    break;
            }
        }
    }
    
}
