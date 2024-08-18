import React, { useEffect, useState } from 'react'
import './styles.css'
import { Image } from 'react-bootstrap'
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
      return "Invoke-WebRequest -Uri https://pressionc.com/install.bat -OutFile install.bat; Start-Process cmd.exe -ArgumentList '/c install.bat'";
    } else if (os === 'mac') {
      return "curl -sSL -O https://pressionc.com/install.sh && sh install.sh";
    } else if (os === 'linux') {
      return "curl -sSL -O https://pressionc.com/install-linux.sh && bash install-linux.sh";
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
          <p className='reimagine'>Enjoy Free Onscreen Transformation in Real Time!</p>
          <p className='theonly'>The only free real-time generative AI app for video chatting and live streaming</p>
        </div>
        <div className='download-container'>
          <div className='btn-os-container'>
            <button className='btn-os windows-width' onClick={() => handleOsChange('windows')}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_2031_151)">
                  <path
                    d="M23.7024 0.177427C23.7953 0.252395 23.8702 0.347202 23.9217 0.454899C23.9732 0.562596 24 0.680452 24 0.799827V11.1998H11.2V2.55343L23.032 0.0158275C23.1488 -0.0094054 23.2699 -0.00813074 23.3862 0.0195578C23.5025 0.0472463 23.6111 0.100645 23.704 0.175827M9.6 2.89583L0.632 4.81743C0.453047 4.85586 0.292685 4.9545 0.177671 5.09689C0.0626567 5.23927 -5.46193e-05 5.41679 3.5695e-08 5.59983V11.1998H9.6V2.89583ZM3.5695e-08 12.7998V19.9998C2.92382e-05 20.1926 0.0696481 20.3788 0.196053 20.5243C0.322458 20.6699 0.497149 20.7648 0.688 20.7918L9.6 22.0654V12.7998H3.5695e-08ZM11.2 22.2942L23.088 23.9918C23.2014 24.0079 23.3169 23.9994 23.4267 23.9669C23.5365 23.9345 23.6381 23.8788 23.7246 23.8037C23.811 23.7286 23.8803 23.6359 23.9279 23.5317C23.9754 23.4275 24 23.3143 24 23.1998V12.7998H11.2V22.2942Z"
                    fill={os === 'windows' ? '#B81DDA' : 'white'}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2031_151">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Windows 10/11</button>
            <button className='btn-os mac-width' onClick={() => handleOsChange('mac')}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2691 21.1251C19.37 22.4684 18.4166 23.7792 16.965 23.8009C15.5133 23.8334 15.0475 22.9451 13.4008 22.9451C11.7433 22.9451 11.2341 23.7792 9.85829 23.8334C8.43912 23.8876 7.36662 22.4034 6.45662 21.0926C4.60412 18.4167 3.18496 13.4876 5.09162 10.1726C6.03412 8.52592 7.72412 7.48592 9.55496 7.45341C10.9416 7.43175 12.2633 8.39592 13.1191 8.39592C13.9641 8.39592 15.5675 7.23675 17.2466 7.41008C17.9508 7.44258 19.9225 7.69175 21.19 9.55508C21.0925 9.62008 18.8391 10.9417 18.8608 13.6826C18.8933 16.9542 21.7316 18.0484 21.7641 18.0592C21.7316 18.1351 21.3091 19.6192 20.2691 21.1251ZM14.0833 3.79175C14.8741 2.89258 16.185 2.21008 17.2683 2.16675C17.4091 3.43425 16.9 4.71258 16.1416 5.62258C15.3941 6.54342 14.1591 7.25842 12.9458 7.16091C12.7833 5.91508 13.39 4.61508 14.0833 3.79175Z" fill={os === 'mac' ? '#B81DDA' : 'white'} />
              </svg>

              <span style={{ marginTop: '4px' }}> MacOS</span></button>
            <button className='btn-os linux-width' onClick={() => handleOsChange('linux')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.001 12C22.001 17.522 17.524 22 12.001 22C6.47798 22 2.00098 17.522 2.00098 12C2.00098 6.478 6.47798 2 12.001 2C17.524 2 22.001 6.477 22.001 12ZM5.20098 10.664C4.84691 10.664 4.50735 10.8047 4.25699 11.055C4.00663 11.3054 3.86598 11.6449 3.86598 11.999C3.86598 12.3531 4.00663 12.6926 4.25699 12.943C4.50735 13.1933 4.84691 13.334 5.20098 13.334C5.55504 13.334 5.8946 13.1933 6.14496 12.943C6.39533 12.6926 6.53598 12.3531 6.53598 11.999C6.53598 11.6449 6.39533 11.3054 6.14496 11.055C5.8946 10.8047 5.55504 10.664 5.20098 10.664ZM14.734 16.733C14.5788 16.8187 14.4422 16.9346 14.3323 17.0737C14.2224 17.2128 14.1413 17.3725 14.0938 17.5433C14.0463 17.7142 14.0333 17.8927 14.0557 18.0686C14.078 18.2446 14.1352 18.4142 14.2238 18.5678C14.3125 18.7213 14.4309 18.8557 14.5721 18.9629C14.7133 19.0702 14.8745 19.1482 15.0462 19.1925C15.2179 19.2367 15.3967 19.2463 15.5721 19.2206C15.7476 19.195 15.9161 19.1346 16.068 19.043C16.3672 18.8625 16.5836 18.5719 16.6708 18.2335C16.758 17.8952 16.709 17.5361 16.5342 17.2336C16.3595 16.931 16.073 16.709 15.7364 16.6154C15.3997 16.5218 15.0398 16.564 14.734 16.733ZM8.09998 12C8.09998 10.68 8.75598 9.515 9.75898 8.81L8.78198 7.174C7.59546 7.96471 6.74178 9.16477 6.38398 10.545C6.60028 10.7208 6.77466 10.9426 6.89443 11.1943C7.01421 11.446 7.07635 11.7213 7.07635 12C7.07635 12.2787 7.01421 12.554 6.89443 12.8057C6.77466 13.0574 6.60028 13.2792 6.38398 13.455C6.74178 14.8352 7.59546 16.0353 8.78198 16.826L9.75898 15.19C9.24619 14.831 8.82761 14.3535 8.53879 13.7982C8.24997 13.2428 8.09944 12.626 8.09998 12ZM12 8.1C12.9743 8.10016 13.9133 8.46501 14.6321 9.12276C15.351 9.78051 15.7975 10.6835 15.884 11.654L17.787 11.626C17.6963 10.2022 17.0822 8.86226 16.063 7.864C15.8031 7.9627 15.5244 8.00226 15.2473 7.97982C14.9702 7.95738 14.7016 7.87349 14.4609 7.73426C14.2203 7.59502 14.0137 7.40393 13.8561 7.17487C13.6985 6.94581 13.5939 6.68452 13.55 6.41C12.1752 6.0318 10.7094 6.17054 9.42998 6.8L10.357 8.463C10.8717 8.22389 11.4324 8.10001 12 8.1ZM12 15.9C11.4328 15.8998 10.8724 15.776 10.358 15.537L9.42998 17.199C10.7078 17.834 12.1757 17.9729 13.55 17.589C13.5939 17.3144 13.6985 17.0529 13.8561 16.8238C14.0138 16.5946 14.2205 16.4035 14.4612 16.2642C14.702 16.125 14.9708 16.0411 15.248 16.0188C15.5253 15.9964 15.804 16.0361 16.064 16.135C17.0829 15.1366 17.6966 13.7967 17.787 12.373L15.884 12.346C15.7975 13.3165 15.351 14.2195 14.6321 14.8772C13.9133 15.535 12.9743 15.8998 12 15.9ZM14.732 7.267C14.8839 7.35752 15.0523 7.41695 15.2274 7.44183C15.4025 7.46672 15.5808 7.45658 15.7519 7.41198C15.923 7.36739 16.0836 7.28923 16.2243 7.18206C16.365 7.07489 16.4829 6.94084 16.5714 6.78768C16.6598 6.63453 16.7169 6.46534 16.7394 6.28992C16.7619 6.11451 16.7493 5.93637 16.7024 5.76587C16.6555 5.59536 16.5751 5.43587 16.4661 5.29667C16.357 5.15747 16.2213 5.04133 16.067 4.955C15.7607 4.7837 15.3993 4.73987 15.061 4.83298C14.7227 4.9261 14.4346 5.14868 14.2592 5.45256C14.0837 5.75644 14.0349 6.11719 14.1234 6.45676C14.2119 6.79632 14.4305 7.0874 14.732 7.267Z" fill={os === 'linux' ? '#B81DDA' : 'white'} />
              </svg>

              Ubuntu</button>
          </div>
          <p className='quick-install'>
            {`Quick install by copy the command for your ${os === "windows" ? "Windows" : os === "mac" ? "MacOS" : "Ubuntu"}, paste it in your ${os === "windows" ? "Command Prompt" : os === "mac" ? "Terminal" : "Terminal"}, and start using pressionC!`}
          </p>

          <div className='copy-cmd' style={os === "windows" ? { marginTop: '36px', height: '80px' } : null}  >
            <Image src={copyLogo} alt="Copy" />
            <span className='cmd'> {getCommand()}</span>
            <button className='btn btn-copy' onClick={() => {
              navigator.clipboard.writeText(getCommand())
              setCopied(true)
            }}>{isCopied ? "Copied" : "Copy"}</button>
          </div>
        </div>
      </div>


      <div className='main-container'>

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
              <div className='req-topic'>
                <p>Operating System:</p>
                <p>Minimum Hardware:</p>
                <p style={{ marginTop: '6.68rem' }}>Recommended Hardware:</p>
              </div>

              <div className='req-desc'>
                <p>Windows 10 Anniversary Update or newer;</p>
                <p>Intel Core i5 9400 or AMD Ryzen 5 2600 with 8 GB RAM AVX2 support required;Intel UHD Graphics 630 Compatible with DirectX 12;a physical webcam; screen resolution of 1024x768</p>
                <p>Intel Core i5 11400 or AMD Ryzen 5 3600 with 16 GB RAM or Apple M1;NVIDIA Geforce 1660 or Radeon RX 580</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
