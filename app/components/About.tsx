import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faGear,
  faGlobe,
  faMapMarkerAlt,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      className="w-full flex flex-wrap justify-evenly gap-6 items-start p-4 bg-white dark:bg-gray-50 shadow-2xl"
    >
      {/* LEFT: ABOUT TEXT */}
      <div className="w-full lg:w-[48%] p-6 border rounded-xl text-justify bg-white shadow-sm hover:shadow-md transition">
        <h1 className="text-2xl font-bold mb-4">About Me</h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">

          <p>
            (اَلسَّلَامُ عَلَيْكُم‎) I am an Assistant Professor of Computer Science
            and a researcher in Bioinformatics and Artificial Intelligence, focusing on
            protein, peptide, and genomic sequence analysis.
          </p>

          <p>
            I earned my PhD in Computer Science and Technology from NJUST, China (2021),
            where my research explored post-translational modifications and cancer-type
            prediction using machine learning and deep learning techniques.
          </p>

          <p>
            I completed postdoctoral research at Mahidol University (Thailand), working on
            therapeutic peptide prediction and DNA/RNA sequence modeling, followed by
            research at Lund University (Sweden), where I developed advanced computational
            models for gain- and loss-of-function mutation analysis in the human genome.
          </p>

          <p>
            I previously served as Assistant Professor at the University of Management and
            Technology (UMT), supervising BS and MS research in AI, bioinformatics,
            computer vision, and data science.
          </p>

          <p>
            My current research focuses on advanced AI-driven solutions for biological data,
            including <b>multimodal learning frameworks</b> that integrate sequence,
            structural, and biochemical features.
          </p>

          <p>
            I actively work with <b>pretrained models, large language models (LLMs), and
            transformer-based architectures</b> to extract meaningful representations from
            biological sequences and improve predictive performance in complex
            bioinformatics tasks.
          </p>

          <p>
            I have authored 47+ research publications and have strong expertise in
            PyTorch, TensorFlow, and scikit-learn, along with emerging areas such as
            explainable AI, protein language models, and biomedical data mining.
          </p>

        </div>
      </div>

      {/* RIGHT: BIO + CARDS */}
      <div className="w-full lg:w-[48%] space-y-5">

        <h1 className="text-2xl font-bold ml-2">Biography</h1>

        {/* Contact Card */}
        <div className="p-5 border rounded-xl bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <b>Contact</b>
          </div>
          <p>saeedcs@uoswabi.edu.pk</p>
          <p>saeed.ahmad075@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="p-5 border rounded-xl bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faPhone} />
            <b>Phone</b>
          </div>
          <p>+46-073-6412410</p>
        </div>

        {/* Location */}
        <div className="p-5 border rounded-xl bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <b>Location</b>
          </div>
          <p>Buner, Khyber Pakhtunkhwa, Pakistan</p>
          <p>Swabi, KPK, Pakistan</p>
        </div>

        {/* Skills */}
        <div className="p-5 border rounded-xl bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faGear} />
            <b>Skills</b>
          </div>
          <p>
            Bioinformatics • Machine Learning • Deep Learning • Multimodal Learning •
            Transformer Models • Large Language Models • Biomedical Imaging •
            Protein Sequence Analysis • Data Science
          </p>
        </div>

        {/* Languages */}
        <div className="p-5 border rounded-xl bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faGlobe} />
            <b>Languages</b>
          </div>
          <p>English (Fluent), Urdu (Native), Pashto (Mother Tongue)</p>
        </div>

        {/* Collaboration */}
        <div className="p-5 border rounded-xl bg-white shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faUsers} />
            <b>Collaboration</b>
          </div>
          <p>
            Open to research collaborations in Bioinformatics, Artificial Intelligence,
            Multimodal Learning, and Transformer-based Biomedical Applications.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;