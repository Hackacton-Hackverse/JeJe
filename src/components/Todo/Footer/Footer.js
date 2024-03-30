import logo from "../../../images/logo.png";
import { APPLICATION_NAME, SERVER_URL } from "../../../Params";
export default function Footer() {
    return (
        <footer>
            <div className="w-full bg-gray-200 rounded-lg flex flex-wrap gap-12 px-[17%] py-16 justify-between">
                <div>
                    <div className="flex items-center pb-4">
                        <img src={logo} className="grid h-20 w-auto text-white rounded-[10px] justify-items-center items-center" alt="logo" />
                    </div>
                    <div className="py-2 font-bold">Call Us</div>
                    <div className="py-2" id = "contact">+237 620203289</div>
                    <div className="py-2 text-neutral-500 w-max">Yaounde Melen carrefour emia face total emia</div>
                    <div className="py-2 text-neutral-500 w-max">{APPLICATION_NAME}@gmail.com</div>
                </div>
                <div>
                    <h1 className="mb-4">About Us</h1>
                    <a href="" className="flex items-center text-neutral-500 w-max py-2"> Resume Page</a>
                    <a href="" className="flex items-center text-neutral-500 w-max py-2">Blog</a>
                    <a href="" className="flex items-center text-neutral-500 w-max py-2">Contact</a>
                </div>
                <div>
                    <h1 className="mb-4">Helpful Ressource</h1>
                    <a href="" className="flex items-center text-neutral-500 w-max py-2">Terms of Use</a>
                    <a href="" className="flex items-center text-neutral-500 w-max py-2">Privacy center</a>
                    <a href="" className="flex items-center text-neutral-500 w-max py-2">Security center</a>
                </div>
            </div>
            <div className="border-t">
                <div className="px-[17%] flex justify-between items-center py-6 flex-wrap">
                    <span className="w-max">&copy; 2024 {APPLICATION_NAME}. All rights reserved</span>
                    <span></span>
                    <div className="flex justify-between items-center">
                        <div className="p-4 flex justify-between items-center">
                            <a href="">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <a href="/social">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <a href="/social">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                            <a href="/social">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill-rule="nonzero" d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col w-full items-center">
                <span>by kamgang william</span>
                <a href="https://wa.me/237673993240?text=bonjour">whatsapp : 653219096</a>
                <a href="mailto:kamgangwilliam2021@gmail.com">mail : kamgangwilliam2021@gmail.com</a>
            </div> */}
        </footer>
    );
}