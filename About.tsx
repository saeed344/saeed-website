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
      className="w-full flex flex-wrap justify-evenly gap-2 items-start p-2 bg-white shadow-2xl dark:text-black"
    >
      {/* About me */}
      <div className="w-full lg:w-[48%] overflow-x-scroll p-2 border border-black rounded-lg text-justify">
        <h1 className="font-semibold">About:</h1>
        <p>
          (اَلسَّلَامُ عَلَيْكُم‎)! I earned my PhD in Computer Science and
          Technology from the School of Computer Science and Engineering at
          Nanjing University of Science and Technology (NJUST), Nanjing, China,
          in 2021. During my doctoral studies, I focused on various topics in
          bioinformatics and protein sequence analysis. Specifically, I
          conducted research on post-translational modifications and cancer
          type prediction and classification using machine and deep learning
          algorithms.
          Following my doctoral studies, I served as a postdoctoral researcher
          at the Center of Data Mining and Biomedical Informatics, Faculty of
          Medical Technology, Mahidol University, Bangkok, Thailand. During
          this period, my primary focus was on predicting therapeutic peptides
          and analyzing their sequences using machine and deep learning
          algorithms. Additionally, I conducted research on various topics,
          including the prediction and classification of modification sites in
          DNA/RNA sequences across different species.
          Subsequently, I joined the School of Systems and Technology,
          Department of Computer Science, University of Management and
          Technology (UMT), Lahore, Pakistan, as an Assistant Professor from
          September 2021 to September 2023. In this role, I was responsible
          for teaching, conducting research, and handling administrative
          duties. During my tenure at UMT, I supervised numerous bachelor's
          and master's theses covering a wide range of topics, such as the
          application of machine learning and deep learning in bioinformatics,
          image processing, computer vision, and data science.
          Currently, I am serving as a postdoctoral researcher at the Protein
          Structure and Bioinformatics Group, Biomedical Center (BMC), Lund
          University, Sweden. I am enthusiastic about immersing myself in a
          dynamic research environment to enhance my existing skills and
          acquire new ones in the field of bioinformatics. My current research
          focuses on developing advanced machine learning techniques tailored
          for identifying and classifying gain-loss-of-function mutations in
          the human genome, with the aim of advancing research and clinical
          applications in this domain.
          My expertise spans bioinformatics, biomedical imaging, artificial
          intelligence, deep learning, computer vision, and machine learning.
          I have hands-on experience with various machine learning and deep
          learning libraries, including sci-kit-learn, TensorFlow, and PyTorch.
          Furthermore, I actively participate in research projects related to
          the explainability of deep neural networks, large language models,
          image content modification, genetic analysis, and natural language
          processing using deep learning methodologies.
        </p>
      </div>

      <div className="w-full lg:w-[48%] mt-3 lg:mt-0">
        <h1 className="text-2xl ml-2">Biography</h1>

        <div className="flex flex-col items-center lg:items-start">
          <div className="flex flex-col gap-5 w-10/12">
            {/* Email */}
            <div className="flex items-center gap-3">
              <div>
                <FontAwesomeIcon icon={faEnvelope} size={"1x"} />
                &nbsp;
                <b> Email </b>
              </div>
              <div>
                <h3> saeedcs@uoswabi.edu.pk </h3>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div>
                <FontAwesomeIcon icon={faPhone} size={"1x"} />
                &nbsp;
                <b> Phone </b>
              </div>
              <h3>+46-073-6412410</h3>
            </div>

            {/* Home Address */}
            <div className="flex items-center gap-3">
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} size={"1x"} />
                &nbsp;
                <b> Home Address </b>
              </div>
              <h3 className="break-words">
                Buner, Khyber Pakhtunkhwa, Pakistan
              </h3>
            </div>

            {/* Current Address */}
            <div className="flex items-center gap-3">
              <div>
                <FontAwesomeIcon icon={faMapMarkerAlt} size={"1x"} />
                &nbsp;
                <b> Current Address </b>
              </div>
              <h3 className="break-words">
                Biomedical Center (BMC), Lund University, Sweden.
              </h3>
            </div>

            {/* Skills */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGear} size={"1x"} />
                &nbsp;
                <b> Skills </b>
              </div>
              <h3 className="break-words">
                Bioinformatics, Machine Learning, Deep Learning, Image
                Processing, Biomedical imaging, Databases
              </h3>
            </div>

            {/* Languages */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGlobe} size={"1x"} />
                &nbsp;
                <b> Languages </b>
              </div>
              <h3 className="break-words">
                English (Fluent) Urdu (National Language) Pashto (Mother tongue)
              </h3>
            </div>

            {/* Collaboration */}
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUsers} size={"1x"} />
                &nbsp;
                <b> Collaboration </b>
              </div>
              <h3 className="break-words">
                Open to new collaborations and permanent or long-term
                opportunities in Bioinformatics Research.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;