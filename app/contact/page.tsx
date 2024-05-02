"use client";
import {Github, Mail, Twitter} from "lucide-react";
import {Navigation} from "../components/nav";
import {Card} from "../components/card";
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"

const socials = [
    {
        icon: <Twitter size={20}/>,
        href: "https://twitter.com/alexanderkonchar",
        label: "Twitter",
        handle: "@alexanderkonchar",
    },
    {
        icon: <Mail size={20}/>,
        href: "mailto:contact@alexanderkonchar.com",
        label: "Email",
        handle: "contact@alexanderkonchar.com",
    },
    {
        icon: <Github size={20}/>,
        href: "https://github.com/alexanderkonchar",
        label: "Github",
        handle: "alexanderkonchar",
    },
];

export default function Example() {
    return (
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation/>
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <Card>
                    <div
                        className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-40  md:p-16"
                    >
								<span
                                    className="absolute w-px h-[90%] md:h-[60%] lg:h-[50%] bg-gradient-to-b from-zinc-500 to-zinc-500/25"
                                    aria-hidden="true"
                                />
                        <span
                            className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{socials[1].icon}
								</span>{" "}
                        <form className="z-10 flex flex-col items-center" action="https://api.web3forms.com/submit"
                              method="POST">

                            <input type="hidden" name="access_key" value="842e0009-97a5-4ad1-bce0-1e7034c0218e"/>
                            <input type="hidden" name="redirect" value="https://alexanderkonchar.vercel.app/contact/success"/>
                            {/*		<span*/}
                            {/*            className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">*/}
                            {/*			{socials[1].handle}*/}
                            {/*		</span>*/}
                            {/*<span*/}
                            {/*    className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">*/}
                            {/*			{socials[1].label}*/}
                            {/*		</span>*/}
                            <Input className="bg-zinc-900 text-zinc-200 border-zinc-600 placeholder:text-zinc-400"
                                   type="text"
                                   name="name"
                                   required
                                   placeholder="Your Name"/>
                            <Input
                                className="bg-zinc-900 text-zinc-200 border-zinc-600 placeholder:text-zinc-400 mt-2"
                                type="email"
                                name="email"
                                required
                                placeholder="Your Email"/>
                            <Input
                                className="bg-zinc-900 text-zinc-200 border-zinc-600 placeholder:text-zinc-400 mt-2"
                                type="text"
                                name="Subject Line"
                                required
                                placeholder="Subject"/>
                            <Textarea
                                className="bg-zinc-900 text-zinc-200 border-zinc-600 placeholder:text-zinc-400 mt-2"
                                placeholder="Message"
                                required
                                name="message"/>
                            <Button type="submit"
                                    className="bg-zinc-900 hover:bg-white text-zinc-200 border border-zinc-600 hover:text-black mt-6">Submit</Button>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    );
}
