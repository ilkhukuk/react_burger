import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <p>&copy; 2023 ilkhukuk</p>
        <Link to="https://www.instagram.com/ilk.hukuk/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className='instagram' />
        </Link>
        <Link to="https://www.linkedin.com/in/ilkhukuk/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="linkedin" />
        </Link>
        <Link to="https://github.com/ilkhukuk" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="github" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
