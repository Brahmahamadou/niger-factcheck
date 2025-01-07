"use client";

import React from "react";
import Image from "next/image";

function QuiSommesNous() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto py-12 px-6 space-y-8 md:space-y-0 md:space-x-8">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src="/images/Fact2.png" // Remplacez par le chemin correct vers votre image
          alt="Niger Fact-Check Logo"
          width={400} // Ajustez selon votre design
          height={400}
          className="rounded-lg shadow-md"
          priority // Charge l'image en priorité
        />
      </div>

      {/* Texte */}
      <article className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Qui sommes-nous ?
        </h1>
        <p className="text-gray-700 leading-7">
          <strong>Niger Fact-Check</strong> est une initiative dédiée à la lutte contre la désinformation au Niger et dans toute la région. Notre mission est de
          fournir une information vérifiée, fiable et transparente en vérifiant les faits relatifs aux événements, déclarations publiques, et informations
          circulant sur les réseaux sociaux.
        </p>
        <br />
        <p className="text-gray-700 leading-7">
          Nous sommes un collectif de journalistes, de blogueurs et d'experts en communication déterminés à promouvoir la vérité et à sensibiliser le public aux
          dangers des fausses informations.
        </p>
        <br />
        <p className="text-gray-700 leading-7">
          En nous appuyant sur des méthodes rigoureuses de vérification des faits, nous contribuons à renforcer la confiance des citoyens dans les informations
          qu'ils reçoivent.
        </p>
        <br />
        <p className="text-gray-700 leading-7">
          Notre objectif est de mettre à disposition des outils et des ressources permettant à chacun de vérifier la véracité des informations et d'encourager un
          dialogue constructif basé sur des faits avérés.
        </p>
        <br />
        <p className="text-gray-700 leading-7">
          Rejoignez-nous dans notre mission pour une information plus claire et plus juste.
        </p>
      </article>
    </section>
  );
}

export default QuiSommesNous;
