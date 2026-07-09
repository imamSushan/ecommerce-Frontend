import style from "./newsLetter.module.css"
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa"
import {RiInstagramFill} from "react-icons/ri"
import { FaLocationDot } from "react-icons/fa6"
export default function NewsLetter() {
  //   const {mail,container} = style
  return (
    <div className={style.container}>
      <h2>Subscribe To Our Newsletter</h2>
      <p>
        Subscribing to our newsletter allows you access in to what we do and{" "}
        <br className="hidden lg:block" />
        our corporate activities.
      </p>
      <div className={style.mail}>
        <input type="mail" placeholder="Email Address" />
        <button>subscribe</button>
      </div>
      {/* social links */}
      <div className={style.social_link}>
        <div className={style.storeLocation}>
         <FaLocationDot className={style.locate}/>
          <span>Store Location</span>
        </div>
        <div className={style.links}>
          <a href="">
            <FaFacebook className={style.action} />
          </a>
          <a href="">
            <FaTwitter className={style.action}  />
          </a>
          <a href="">
            <RiInstagramFill className={style.action} />
          </a>
          <a href="">
            <FaYoutube className={style.action} />
          </a>
        </div>
      </div>
    </div>
  )
}
