export class Designer {
    public designerId: string;
    
    public userName: string;
    public password: string;
    
    public seqQuestion: string;
    public seqAnswer: string;
    
    public businessName: string;
    public businessDetail: string;
    public isBusinessOwn: boolean;
    public firstName: string;
    public lastName: string;
    public profilePicURL: string;
    public address1: string;
    public address2: string;
    public city: string;
    public state: string;
    public country: string;
    public zipCode: string;
    public contactNum1: string;
    public contactNum2: string;
    public email: string;
    public qualification: string;
    public course: string;
    public expertise: string;
    public experience: string;
    public skillLevel: string;
    public aboutMe: string;
    public socMediaLink: string;
    
    constructor( designerId: string,  userName: string,  password: string,  seqQuestion: string,  seqAnswer: string,  
                businessName: string,  businessDetail: string,  isBusinessOwn: boolean,  firstName: string,  lastName: string,  
                profilePicURL: string, address1: string,  address2: string,  city: string,  state: string,  country: string, 
                zipCode: string,  contactNum1: string,  contactNum2: string,  email: string, 
                qualification: string, course: string,  expertise: string,  experience: string,  
                skillLevel: string,  aboutMe: string,  socMediaLink: string) {

        this.designerId = designerId;
        this.userName = userName;
        this.password = password;
        this.seqQuestion = seqQuestion;
        this.seqAnswer = seqAnswer;
        
        this.businessName = businessName;
        this.businessDetail = businessDetail;
        this.isBusinessOwn = isBusinessOwn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profilePicURL = profilePicURL;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipCode = zipCode;
        this.contactNum1 = contactNum1;
        this.contactNum2 = contactNum2;
        this.email = email;
        this.qualification = qualification;
        this.course = course;
        this.expertise = expertise;
        this.experience = experience;
        this.skillLevel = skillLevel;
        this.aboutMe = aboutMe;
        this.socMediaLink = socMediaLink;
    }
}