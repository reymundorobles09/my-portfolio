import ContactInfoCard from "../components/ContactInfoCard";
import { ABOUT_ME } from "../utils/data";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";

function ContactMe() {
    return (
        <section id="contact">
            <div className="container mx-auto p-10">
                <div className="w-full lg:w-[60vw] mx-auto">
                    <h4 className="section-title">Contact Me</h4>

                    <p className="text-sm text-center mt-4 leading-6">
                    Mattis accumsan faucibus parturient rhoncus, et posuere volutpat. Maximus efficitur et elit vivamus vestibulum tempus interdum adipiscing. Sodales natoque dis accumsan erat imperdiet euismod eleifend. 
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
                    <div>
                        <ContactInfoCard icon={<IoMdMail/>} text={ABOUT_ME.email}/>
                        <ContactInfoCard icon={<IoPhonePortraitOutline/>} text={ABOUT_ME.phone}/>
                        <ContactInfoCard icon={<MdOutlineWeb/>} text={ABOUT_ME.website}/>
                    </div>

                <form className="flex flex-col">

                    <input type="text" name="fullname" placeholder="Fullname" id="" className="input-box" autoComplete="off"/>
                    <input type="email" name="email" placeholder="email" id="" className="input-box" autoComplete="off"/>
                    <textarea type="text" name="message" row="4" placeholder="message" id="" className="input-box" autoComplete="off"/>

                    <button className="action-btn btn-scale-anim">SUBMIT</button>
                </form>
                </div>
            </div>
        </section>
    )
}

export default ContactMe
