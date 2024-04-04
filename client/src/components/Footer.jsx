import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDribbbleSquare } from "react-icons/fa";

export default function FooterCom() {
    return (
        <Footer container className="border border-t-8 border-teal-400">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ">Saran's</span> Blog
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="https://www.100jsprojects.com"
                                    target="_blank"
                                    rel="reopener noreferrer"
                                >
                                    100 JS Projects
                                </Footer.Link>
                                <Footer.Link
                                    href="/about"
                                    target="_blank"
                                    rel="reopener noreferrer"
                                >
                                    Saran's Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow Me" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="#"
                                    target="_blank"
                                    rel="reopener noreferrer"
                                >
                                    GitHub
                                </Footer.Link>
                                <Footer.Link
                                    href="#"
                                    target="_blank"
                                    rel="reopener noreferrer"
                                >
                                    Linked In
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href="#"

                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href="#"
                                >
                                    Terms & Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Saran's Blog"
                        year={new Date().getFullYear()}
                    />
                    <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                        <Footer.Icon href="#" icon={FaFacebook} />
                        <Footer.Icon href="#" icon={FaInstagram} />
                        <Footer.Icon href="#" icon={FaTwitter} />
                        <Footer.Icon href="#" icon={FaGithub} />
                        <Footer.Icon href="#" icon={FaDribbbleSquare} />
                    </div>
                </div>
            </div>
        </Footer>
    )

};
