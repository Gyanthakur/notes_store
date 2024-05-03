"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    return(
        <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl md:text-6xl sm:text-3xl">
                {/* your Ideas, Documents & Plans. Unified. Welcome to <span  */}
                Welcome to <span 
                className="underline">Notes-Store</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                {/* Notes-Store is the connected workspace where <br />
                better, faster work happens. */}

                Notes-Store is your go-to space where you can write down notes, save images, and keep all your important data organized and accessible.   
            </h3>
            {isLoading &&(
                <div className="w-full flex justify-center items-center ">
                <Spinner size="lg"/>
                </div>
            )}
            {isAuthenticated && !isLoading &&(

            <Button asChild>
                <Link href="/documents">
                    Notes_Store
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Link>
            </Button>
            )}
            {!isAuthenticated && !isLoading &&(
                <SignInButton mode="modal">
                    <Button>
                        Get Notes_Store Free
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}
            <br />
            <Button asChild>
                <Link href="https://github.com/Gyanthakur">
                    Go to my github ...
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Link>
            </Button>
        </div>
    )
}