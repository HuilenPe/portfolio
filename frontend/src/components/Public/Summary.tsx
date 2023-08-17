import { useState, useEffect } from 'react';
import { Profile, getProfileInfo } from '../../services/api';

function Summary() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    // Llamada a la función del servicio para obtener el perfil
    getProfileInfo()
      .then(response => {
        console.log('Profile response:', response);
        setProfile(response);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
      });
  }, []);

  return (
    <div>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.summary}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Summary;
