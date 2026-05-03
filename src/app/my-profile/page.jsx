"use client";
import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";


const MyProfilePage = () => {

       const userData = authClient.useSession()
         const user = userData?.user;
        
        //  if(!user) {
        //     redirect('/signin')
        //  }
    return (
        <div>
            <Card className="max-w-90 mx-auto flex flex-col items-center border mt-5">

                 <Avatar className="h-20 w-20">
                                 <Avatar.Image 
  alt={user?.name || "User"} 
//   src={user?.image} 
src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
  referrerPolicy="no-referrer" 
/>
                                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                              </Avatar>

                              <h2 className="text-xl font-bold">{user?.name}</h2>
                              <p className="text-muted">{user?.email}</p>


                    <UpdateUserModal></UpdateUserModal>          
            </Card>
        </div>
    );
};

export default MyProfilePage;