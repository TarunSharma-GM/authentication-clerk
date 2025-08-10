import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export const Navigation = () => {
    return (
        <nav className="bg-[var(--background)] border-b border-[var(--foregroupnd)]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink 0">
                        <h1 className="text-xl font-semibold text-[var(--forground)]">
                            Next.js App
                        </h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <SignedOut>
                            <SignInButton>
                                <button className="py-1 px-2 text-sm border border-neutral-300 dark:border-neutral-500 dark:text-neutral-200 dark:hover:bg-neutral-700">Sign in</button>
                            </SignInButton>
                            <SignUpButton>
                                <button className="py-1 px-2 text-sm border border-neutral-300 dark:border-neutral-500 dark:text-neutral-200 dark:hover:bg-neutral-700">Sign up</button>
                            </SignUpButton>
                        </SignedOut>
                        {/* <UserButton /> */}
                        <SignedIn>
                            <Link href="/user-profile">Profile</Link>
                            <SignOutButton />
                        </SignedIn>
                    </div>
                </div>
            </div>

        </nav>
    )
}