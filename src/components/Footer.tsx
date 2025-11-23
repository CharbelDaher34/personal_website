import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background/50 backdrop-blur-xl mt-20">
            <div className="container flex flex-col items-center justify-between gap-8 py-12 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} Charbel Daher. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-6">
                    <Link href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                        <Github className="h-5 w-5" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                        <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="mailto:charbeldaher34@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                        <Mail className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
