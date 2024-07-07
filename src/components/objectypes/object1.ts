 import '../objectypes/object2'
// import { user1 } from '../objectypes/object2';
 
 type UserAvatar={
    name:string;
    email:string;
    userdata:{
        userid:string;
        userAvatar:string;
    };
}
export const user:UserAvatar = {
    name: "John Doe",
    email:"john@example.com",
    userdata:{
        userid:"1234567890",
        userAvatar:"User-Avatar"
    }
}


