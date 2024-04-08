"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"

import { Button } from "./ui/button"
import Modal from "./ui/modal";
import { toast } from "sonner";
import { Icons } from "./icons";

export default function SignInModal() {

    const [showModal, setShowModal] = useState(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loginWithProvider = async (providerName: string) => {
      setIsLoading(true);
  
      try {
        await signIn(providerName);
      } catch (error) {
        toast("There was an error, try again.");
      } finally {
        setIsLoading(false);
      }
    };

    return (
        <>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div className="w-full overflow-hidden md:max-w-2xl md:rounded-3xl md:border md:border-gray-100 md:shadow-2xl">
                    <div className="flex flex-col items-center justify-center space-y-3 bg-white px-4 py-6 pt-8 text-center md:px-16">
                        {/* <h3 className="text-3xl font-bold tracking-tight mb-8">[Logo]</h3> */}
                        {/* <p className="text-sm text-gray-500 tracking-tight">
                            Rerum velit officia, dignissimos dolores placeat doloremque ipsam neque incidunt iure nam, assumenda.
                        </p> */}
                        {/* <h1 className="text-[min(10vw,4rem)] tracking-tighter font-medium mb-8">iCrypto</h1> */}


                        <Button className="w-full" onClick={() => loginWithProvider('google')}><Icons.Google className="mr-2 h-4 w-4"/> Google</Button>
                        <Button className="w-full" onClick={() => loginWithProvider('discord')}><Icons.Discord className="mr-2 h-4 w-4 invert"/>Discord</Button>
                        <Button className="w-full" onClick={() => loginWithProvider('github')}><Icons.Github className="mr-2 h-4 w-4 invert"/>GitHub</Button>
                    </div>
                </div>
            </Modal>
            <Button onClick={() => { setShowModal(prev => !prev) }}>Sign In</Button>
        </>
    )
}