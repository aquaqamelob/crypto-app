import SignInModal from "@/components/sign-in-modal";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function Home() {

 
  return (
    <Container>

      <div className="h-screen w-full flex justify-center items-center flex-col gap-2">
      <h1 className="text-[min(19vw,130px)] tracking-tighter font-medium">iCrypto</h1>
      <h2 className="text-[min(8vw,3rem)] tracking-tighter font-semibold text-balance text-neutral-900 max-w-xl text-center leading-[3.5rem] mb-16">The best place for all your crypto, notes, analysis.</h2>
      <SignInModal />

      <Link className="text-[min(3vw,1.5rem)] tracking-tighter font-medium mt-4 text-sky-600 hover:text-sky-500" href={""}>Learn more about the project</Link>
      </div>
      {/* <Navbar /> */}
      {/* <h1 className="text-[min(10vw,4rem)] tracking-tighter font-medium">Heading 1</h1>

      <h2 className="text-[min(8vw,3rem)] tracking-tighter font-medium">Heading 2</h2>

      <h3 className="text-[min(6vw,2.5rem)] tracking-tighter font-medium">Heading 3</h3>

      <h4 className="text-[min(5vw,2rem)] tracking-tighter font-medium">Heading 4</h4>

      <h5 className="text-[min(4vw,1.75rem)] tracking-tighter font-medium">Heading 5</h5>

      <h6 className="text-[min(3vw,1.5rem)] tracking-tighter font-medium">Heading 6</h6> */}



    </Container>
  )
}
