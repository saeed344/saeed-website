import React from "react";

const ResearchInterest = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      className="bg-white shadow-2xl py-3 overflow-hidden rounded "
    >
      <h1 className="text-2xl mb-2 pl-4 ">Research Interests:</h1>

      <ol className="relative w-full mx-5 md:mx-10 dark:border-gray-700">

        {/* Bioinformatics */}
        <li data-aos="fade-up" className="mb-5 ms-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="none">
              <path d="M13 15L16 12M16 12L13 9M16 12H8" stroke="#000" strokeWidth="2"/>
            </svg>
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            Bioinformatics and Computational Biology
          </h3>
        </li>

        {/* ML + DL */}
        <li data-aos="fade-up" className="mb-5 ms-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="none">
              <path d="M13 15L16 12M16 12L13 9M16 12H8" stroke="#000" strokeWidth="2"/>
            </svg>
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            Machine Learning and Deep Learning for Biological Data
          </h3>
        </li>

        {/* Multimodal */}
        <li data-aos="fade-up" className="mb-5 ms-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="none">
              <path d="M13 15L16 12M16 12L13 9M16 12H8" stroke="#000" strokeWidth="2"/>
            </svg>
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            Multimodal Learning for Biological Data Integration
          </h3>
        </li>

        {/* Transformers */}
        <li data-aos="fade-up" className="mb-5 ms-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="none">
              <path d="M13 15L16 12M16 12L13 9M16 12H8" stroke="#000" strokeWidth="2"/>
            </svg>
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            Transformer Models and Protein Language Models
          </h3>
        </li>

        {/* LLMs */}
        <li data-aos="fade-up" className="mb-5 ms-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="none">
              <path d="M13 15L16 12M16 12L13 9M16 12H8" stroke="#000" strokeWidth="2"/>
            </svg>
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            Large Language Models (LLMs) in Bioinformatics
          </h3>
        </li>

        {/* Protein/Peptide */}
        <li data-aos="fade-up" className="mb-5 ms-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="none">
              <path d="M13 15L16 12M16 12L13 9M16 12H8" stroke="#000" strokeWidth="2"/>
            </svg>
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            Protein and Peptide Sequence Analysis
          </h3>
        </li>

        {/* Genomics */}
        <li data-aos="fade-up" className="mb-5 ms-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="none">
              <path d="M13 15L16 12M16 12L13 9M16 12H8" stroke="#000" strokeWidth="2"/>
            </svg>
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            Genomic Data Modeling and Mutation Analysis
          </h3>
        </li>

        {/* XAI */}
        <li data-aos="fade-up" className="mb-5 ms-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="none">
              <path d="M13 15L16 12M16 12L13 9M16 12H8" stroke="#000" strokeWidth="2"/>
            </svg>
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            Explainable AI (XAI) for Biomedical Applications
          </h3>
        </li>

        {/* Drug Discovery */}
        <li data-aos="fade-up" className="mb-10 ms-6 ">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white">
            <svg className="w-8 h-8 text-blue-800" viewBox="0 0 24 24" fill="none">
              <path d="M13 15L16 12M16 12L13 9M16 12H8" stroke="#000" strokeWidth="2"/>
            </svg>
          </span>
          <h3 className="text-sm md:text-lg font-semibold text-gray-900">
            AI for Drug Discovery and Therapeutic Design
          </h3>
        </li>

      </ol>
    </div>
  );
};

export default ResearchInterest;