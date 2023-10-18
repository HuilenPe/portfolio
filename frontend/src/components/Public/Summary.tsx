import { useState, useEffect } from 'react'
import { Profile, getProfileInfo } from '../../services/api'
import '../Public/styles/Summary.css'

function Summary () {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    // Llamada a la función del servicio para obtener el perfil
    getProfileInfo()
      .then(response => {
        console.log('Profile response:', response)
        setProfile(response)
      })
      .catch(error => {
        console.error('Error fetching profile:', error)
      })
  }, [])

  return (
    <div className='card summary-card'>
      <div className='card-body'>
        {profile
          ? (
            <div>
              <h2 className='card-title'>{profile.name}</h2>
              <h3 className='card-title'>{profile.title}</h3>
              <p className='card-text'>{profile.summary}</p>
              {profile.contactLinks && (
                <div className='contact-links'>
                  {profile.contactLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              )}
            </div>
            )
          : (
            <p>Loading profile...</p>
            )}
      </div>
    </div>
  )
}

export default Summary
