
import { Button } from "@/components/ui/button";
import { SignedIn,SignedOut,SignUpButton,SignOutButton} from '@clerk/nextjs'
export default function Home() {
  return <div className="">
      <h1>Home Page</h1>
      

      <SignedOut>
          <SignUpButton>SignUp</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>

  </div>
  
  
}
