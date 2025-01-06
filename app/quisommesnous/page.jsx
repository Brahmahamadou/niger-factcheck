"use client";

import React from 'react';
import Image from 'next/image';


  function QuiSommesNous() {
    return (
      <div className="flex items-center justify-around max-w-4xl mx-auto py-8">
             <div className="">
          <Image
            src="/images/Fact2.png" // Remplacez par le chemin de votre logo
            alt="Logo"
            width={5000}
            height={5000}
          />
      </div>
      <div>
      <h1 className="text-3xl font-bold mb-4">Qui sommes-nous ?</h1>
        <p className="text-gray-700">
Niger Fact-Check est une initiative dédiée à la lutte contre la désinformation au Niger et dans toute la région. Notre mission est de fournir une information vérifiée, fiable et transparente en vérifiant les faits relatifs aux événements, déclarations publiques, et informations circulant sur les réseaux sociaux.

Nous sommes un collectif de journalistes, de blogueurs et d'experts en communication déterminés à promouvoir la vérité et à sensibiliser le public aux dangers des fausses informations. En nous appuyant sur des méthodes rigoureuses de vérification des faits, nous contribuons à renforcer la confiance des citoyens dans les informations qu'ils reçoivent.

Notre objectif est de mettre à disposition des outils et des ressources permettant à chacun de vérifier la véracité des informations et d'encourager un dialogue constructif basé sur des faits avérés.

Rejoignez-nous dans notre mission pour une information plus claire et plus juste.</p>
      </div>

      </div>
    );
  }
  
  export default QuiSommesNous;