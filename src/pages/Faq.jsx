import React from 'react'
import { Header } from '../components/Header'
import lady from '../assets/lady.svg'
import Accordion from 'react-bootstrap/Accordion'
import AccordionBody from 'react-bootstrap/AccordionBody'
import AccordionItem from 'react-bootstrap/AccordionItem'
import AccordionHeader from 'react-bootstrap/AccordionHeader'

export const Faq = () => {
  return (
    <div>
      <Header
        isVideo={false}
        src={lady}
      />

      <p className='faq-title'>Frequently Asked Questions</p>
      <div className='faq-container'>

        <div className='faq'>
          <Accordion>
            <AccordionItem eventKey="0">
              <AccordionHeader>
                How can I uninstall the Mac version of PressionC camera?
              </AccordionHeader>
              <AccordionBody>
                To uninstall the Mac app, please delete the following files:
                <p className='accordion-cmd'>
                  /Applications/PressionC camera.app
                  /Library/CoreMediaIO/Plug-Ins/DAL/PressionCPlugin.plugin
                  ~/Library/Application Support/PressionC-cam-macos
                  ~/Library/Application Support/inc.embodyme.PressionC-cam-menu-macos
                  ~/Library/Application Support/inc.embodyme.PressionC-cam-macos
                  ~/Library/Preferences/inc.embodyme.PressionC-cam-macos.plist
                  ~/Library/Preferences/inc.embodyme.PressionC-cam-menu-macos.plist
                </p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="1">
              <AccordionHeader>
                How can I uninstall the Windows version of PressionC camera?
              </AccordionHeader>
              <AccordionBody>
                To uninstall the Windows app, please follow the steps below:
                <p className='accordion-cmd'>
                  <ol type="1">
                    <li> Right click Windows icon</li>
                    <li> Click Settings or press windows+R  type ms-settings: enter</li>
                    <li>Next, click Apps on the left side</li>
                    <li>Then, click installed apps</li>
                    <li>In the list of installed apps, you can find out where PressionC camera is</li>
                    <li>Once you found, click the button on the right side and you will see 'uninstall'</li>
                    <li>Click 'uninstall', follow the instruction to uninstall PressionC camera</li>
                  </ol>
                </p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="2">
              <AccordionHeader>
                How do I change my payment settings?
              </AccordionHeader>
              <AccordionBody>
                Please open the PressionC camera app, and select "Manage Account" from the File menu (for Windows version) or the PressionC camera menu (for Mac version).
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="3" style={{ marginBottom: '20px' }}>
              <AccordionHeader>
                What is commercial use?
              </AccordionHeader>
              <AccordionBody>
                Commercial use includes, but are not limited to, business meetings, earning income from video creation or live streaming on Youtube, Twitch, or other socials, promotional video creation, events, education, and customer services.
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
