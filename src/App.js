import React, { useState, useEffect } from 'react';

function MonComposant() {
  const [donnees, setDonnees] = useState(null); 

  useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setDonnees(data))
      .catch(error => console.error('Une erreur est survenue :', error));
  }, []); // Passer un tableau vide comme dépendance pour exécuter l'effet une seule fois au chargement du composant

  if (donnees === null) {
    return 'Chargement...';
  }

  return (
    <div>
      {donnees.map(donnee => (
        <p key={donnee.id}>{donnee.title}</p>
      ))}
    </div>
  );
}

export default MonComposant;
