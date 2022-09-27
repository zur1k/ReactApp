import React from "react";
import s from './Settings.module.css'





const Settings = () => {
   return (
      <div className={s.settingsWrapper}>
         <form>
            <div>
               <label for="firstname">Your name</label>
               <input type="text" id="firstname" name="firstname" />
            </div>
            <div>
               <label for="date">Birthday: </label>
               <input type="date" id="date" name="date" />
            </div>
            <div>
               <label for="proffesion">Proffesion </label>
               <input type="proffesion" id="proffesion" name="proffesion" />
            </div>
            <div>
               <label for="email">Your email </label>
               <input type="email" id="email" name="email" />
            </div>
            <div>
               <label for="password">Password </label>
               <input type="password" id="password" name="password" />
            </div>
            <div>
               <label for="newpPassword">New password </label>
               <input type="newpPassword" id="newpPassword" name="newpPassword" />
            </div>

            <div>
               <label>Your country</label>
               <select name="country">

                  <option value="">Country...</option>
                  <option value="UA">Ukraine</option>
                  <option value="DE">Germany</option>
                  <option value="US">USA</option>
                  <option value="ES">SPAIN</option>
                  <option value="CA">CANADA</option>
               </select>
            </div>

            <div>
               <input type="file" id="file1" />
               <img id="image1" width="150px" height="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMvO4ydq3DuBwMUTliFGqGm641axT0vrKaQ&usqp=CAU" />
            </div>
         </form>

      </div>
   )
}

export default Settings