"use client"; // Only necessary for app directory usage

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Homepage() {
    const router = useRouter();

    useEffect(() => {
        // Client-side redirect
        router.replace("/pages");  // Using replace instead of push for instant redirection
    }, [router]);

    return null;
}