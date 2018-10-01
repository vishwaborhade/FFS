import { Design } from './design.model';

export class DesignService {
    designs: Design[] = [
        new Design('D1001', '001', 'Donald Duck', 'Sherwani', 'Indian wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
        new Design('D1002', '001', 'Donald Duck', 'Rugby Sweater', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
        new Design('D1003', '001', 'Donald Duck', 'CLASSIC CARGO SHORT', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
        new Design('D1004', '001', 'Donald Duck', 'REGULAR FIT CHECK SHIRT', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
        new Design('D1005', '001', 'Donald Duck', 'STRIPE TRIM CARDIGAN', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1006', '001', 'Donald Duck', 'REGULAR FIT PINSTRIPE SHIRT', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1007', '001', 'Donald Duck', 'BLOCK STRIPE SIGNATURE TEE', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1008', '001', 'Donald Duck', 'SIGNATURE STRIPE SHORT', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1009', '001', 'Donald Duck', 'STRIPE SWIM TRUNK', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1010', '001', 'Donald Duck', 'CUSTOM FIT STARS AND STRIPES POLO', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
        new Design('D1011', '002', 'Vishwanath Borhade', 'CUSTOM FIT SHORT SLEEVE SHIRT', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
        new Design('D1012', '002', 'Vishwanath Borhade', 'CUSTOM FIT H POLO', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
        new Design('D1013', '002', 'Vishwanath Borhade', 'SHERPA-LINED HOODIE', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
        new Design('D1014', '002', 'Vishwanath Borhade', 'SIGNATURE STRIPE TEE', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1015', '002', 'Vishwanath Borhade', 'REGULAR FIT MICRO PRINT SHIRT', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1016', '002', 'Vishwanath Borhade', 'CUSTOM FIT SOLID OXFORD SHIRT', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1017', '002', 'Vishwanath Borhade', 'STRIPE SHORT', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1018', '002', 'Vishwanath Borhade', 'SLIM FIT H POLO', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
//        new Design('D1019', '002', 'Vishwanath Borhade', 'HILFIGER COLOR TEE', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM'),
        new Design('D1020', '002', 'Vishwanath Borhade', 'HILFIGER COLOR TEE', 'Men wear', 'Formal wear', 'Cotton', '08/12/2018 2:30PM')
    ];
    
    selectedDesign: Design;
     
    getDesigns() {
        return this.designs.slice();
    }
    
    getDesignOfSDesigner(designerId: string, designTyep: string) {
        const recentDesign: Design[] = [];
        for(let design of this.getDesigns()) {
            if(design.designerId == designerId && designTyep == 'recentDesigns') {
                recentDesign.push(design);
            } else if(design.designerId != designerId && designTyep == 'popularDesigns') {
                recentDesign.push(design);
            }
        }
        return recentDesign;
    }
    
    getAllDesings(designerId: string) {
        const recentDesign: Design[] = [];
        for(let design of this.getDesigns()) {
            if(design.designerId == designerId) {
                recentDesign.push(design);
            } 
        }
        console.log(recentDesign);
        return recentDesign;
    }
    
    getSelectedDesign(selDesingId: string) {
        for(let design of this.getDesigns()) {
            if(design.designId == selDesingId) {
                this.selectedDesign = design;
                break;
            }
        }    
        return this.selectedDesign; 
    }
    
    addDesign(newDesign: Design) {
        this.designs.push(newDesign);    
    }
    
    deleteDesign(designId: string, designerId: string) {
                
        for(let design of this.getDesigns()) {
            if(design.designerId == designerId && design.designId == designId) {
                this.designs.splice(this.designs.indexOf(design), 1);
            } 
        }
    }
}