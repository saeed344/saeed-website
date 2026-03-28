import React from "react";

const ResearchPublication = () => {
  // Define publications data to avoid duplicates
  const publications2025 = [
    {
      authors: "<b>Saeed Ahmed</b>, N Schaduangrat, C Pipattanaboon, W Shoombuatong",
      title: "Accurate identification of broadly neutralizing antibodies against dengue virus based on deep stacking strategy with multi-perspective features",
      journal: "Scientific Reports",
      volume: "",
      issue: "",
      pages: "bbab583",
      publisher: "Nature Publishing Group UK",
      year: "2025"
    },
    {
      authors: "<b>Saeed Ahmed</b>, N Schaduangrat, P Chumnanpuen, SM H Mahmud, K O Michae Goh, W Shoombuatong",
      title: "BLSAM-TIP: Improved and robust identification of tyrosinase inhibitory peptides by integrating bidirectional LSTM with self-attention mechanism",
      journal: "PloS one",
      volume: "20",
      issue: "10",
      pages: "e0333614",
      publisher: "Public Library of Science",
      year: "2025"
    },
    {
      authors: "<b>Saeed Ahmed</b>, N Schaduangrat, I Meewan, W Shoombuatong",
      title: "DeepHDAC3i: Leveraging an Interpretable Deep Learning-based Framework for the Accelerated Discovery of HDAC3 Inhibitors",
      journal: "IEEE Transactions on Computational Biology and Bioinformatics",
      volume: "22",
      issue: "6",
      pages: "2453-2464",
      publisher: "IEEE",
      year: "2025"
    },
    {
      authors: "<b>Saeed Ahmed</b>, N Schaduangrat, P Chumnanpuen, W Shoombuatong",
      title: "GRU4ACE: Enhancing ACE inhibitory peptide prediction by integrating gated recurrent unit with multi‐source feature embeddings",
      journal: "Protein Science",
      volume: "3346",
      issue: "6",
      pages: "e70026",
      publisher: "John Wiley & Sons, Inc.",
      year: "2025"
    },
    {
      authors: "M Gill, M Kabir, <b>Saeed Ahmed</b>, M A Subhani, M Hayat",
      title: "A Comparative Review and Analysis of Computational Predictors for Identification of Enhancer and their Strength",
      journal: "Current Bioinformatics",
      volume: "20",
      issue: "4",
      pages: "323-343",
      publisher: "Bentham Science Publishers",
      year: "2025"
    },
    {
      authors: "W Shoombuatong, <b>Saeed Ahmed</b>, SM H Mahmud, N Schaduangrat",
      title: "A comprehensive review and evaluation of machine learning-based approaches for identifying tumor T cell antigens",
      journal: "Computational Biology and Chemistry",
      volume: "18",
      issue: "",
      pages: "108440",
      publisher: "Elsevier",
      year: "2025"
    },
    {
      authors: "W Shoombuatong, N Schaduangrat, N Homdee, <b>Saeed Ahmed</b>, P Chumnanpuen",
      title: "Advancing the accuracy of tyrosinase inhibitory peptides prediction via a multiview feature fusion strategy",
      journal: "Scientific Reports",
      volume: "15",
      issue: "1",
      pages: "4762",
      publisher: "Nature Publishing Group UK",
      year: "2025"
    },
    {
      authors: "H Zhang, M Kabir, <b>Saeed Ahmed</b>, M Vihinen",
      title: "There will always be variants of uncertain significance. Analysis of VUSs",
      journal: "NAR Genomics and Bioinformatics",
      volume: "6",
      issue: "4",
      pages: "lqae154",
      publisher: "Oxford University Press",
      year: "2025"
    },
    {
      authors: "W Shoombuatong, N Schaduangrat, N Homdee, <b>Saeed Ahmed</b>, P Chumnanpuen",
      title: "Advancing the Accuracy of Anti-MRSA Peptide Prediction Through Integrating MultiSource Protein Language Models",
      journal: "Scientific Reports",
      volume: "15",
      issue: "1",
      pages: "4762",
      publisher: "Nature Publishing Group UK",
      year: "2025"
    },
    {
      authors: "M Kabir, <b>Saeed Ahmed</b>, H Zhang, I Rodríguez-Rodríguez, S M Najibi, M Vihinen",
      title: "PON-P3: Accurate Prediction of Pathogenicity of Amino Acid Substitutions",
      journal: "International Journal of Molecular Sciences",
      volume: "26",
      issue: "",
      pages: "2004",
      publisher: "",
      year: "2025"
    }
  ];

  const publications2024 = [
    { authors: "A Amjad, <b>Saeed Ahmed</b>, M Arif, T Alam, M Kabir*", title: "A novel deep learning identifier for promoters and their strength using heterogeneous features", journal: "Methods", volume: "230", pages: "119-128", year: "2024" },
    { authors: "M A Arshed, S Mumtaz, Stefan C Gherghina, N Urooj, <b>Saeed Ahmed</b>, C Dewi*", title: "A Deep Learning Model for Detecting Fake Medical Images to Mitigate Financial Insurance Fraud", journal: "Computation", volume: "12", issue: "9", pages: "173", year: "2024" },
    { authors: "R Arif, <b>Saeed Ahmed</b>, S Kanwal, M Kabir*", title: "A Computational Predictor for Accurate Identification of Tumor Homing Peptides by Integrating Sequential and Deep BiLSTM Features", journal: "Interdisciplinary Sciences: Computational Life Sciences", pages: "1-16", year: "2024" },
    { authors: "F Arshad, A Amjad, <b>Saeed Ahmed</b>, M Kabir*", title: "An explainable stacking-based approach for accelerating the prediction of antidiabetic peptides", journal: "Analytical Biochemistry", pages: "115546", year: "2024" },
    { authors: "S Kanwal, R Arif, <b>Saeed Ahmed</b>, M Kabir*", title: "A novel stacking-based predictor for accurate prediction of antimicrobial peptides", journal: "Journal of Biomolecular Structure and Dynamics, Taylor & Francis", pages: "1-12", year: "2024" },
    { authors: "M A Arshed, H A Rehman, <b>Saeed Ahmed</b>, C Dewi, H J Christanto", title: "A 16 × 16 Patch-Based Deep Learning Model for the Early Prognosis of Monkeypox from Skin Color Images", journal: "Computation - MDPI", volume: "12", issue: "2", pages: "33", year: "2024" },
    { authors: "M. A. Arshed, S. Mumtaz, M. Ibrahim, C. Dewi, M. Tanveer, <b>Saeed Ahmed</b>", title: "Multiclass AI-Generated Deepfake Face Detection Using Patch-Wise Deep Learning Model", journal: "Computers- MDPI", volume: "13", issue: "1", pages: "31", year: "2024" }
  ];

  const publications2023 = [
    { authors: "Mehwish Gill, <b>Saeed Ahmad</b>, Muhammad Kabir*, Maqsood Hayat", title: "A Novel Predictor for the Analysis and Prediction of Enhancers and Their Strength via Multi-View Features and Deep Forest", journal: "Information - MDPI", volume: "14", issue: "12", pages: "636", year: "2023" },
    { authors: "M A Arshed, M Ibrahim, S Mumtaz, M Tanveer, <b>Saeed Ahmed</b>", title: "Chem2Side: A Deep Learning Model with Ensemble Augmentation (Conventional+ Pix2Pix) for COVID-19 Drug Side-Eﬀects Prediction from Chemical Images", journal: "Information - MDPI", volume: "14", issue: "12", pages: "663", year: "2023" },
    { authors: "M. A. Arshed, S. Mumtaz, M. Ibrahim, <b>Saeed Ahmed</b>, M Tahir, M. Shaﬁ", title: "Multi-class skin cancer classiﬁcation using vision transformer networks and convolutional neural network-based pre-trained models", journal: "Information - MDPI", volume: "14", issue: "7", pages: "415", year: "2023" },
    { authors: "Hina Alam, Muhammad Burhan, Anusha Gillani, Ihtisham ul Haq, Muhammad Asad Arshed, Muhammad Shaﬁ, <b>Saeed Ahmed</b>", title: "IoT Based Smart Baby Monitoring System with Emotion Recognition Using Machine Learning", journal: "Wireless Communications and Mobile Computing - Hindawi", volume: "2023", pages: "1175450", year: "2023" }
  ];

  const publications2022 = [
    { authors: "<b>Saeed Ahmed</b>, Muhammad Arif, Muhammad Kabir*, Khaistah Khan, Yaser Daanial Khan", title: "PredAoDP: Accurate identification of antioxidant proteins by fusing different descriptors based on evolutionary information with support vector machine", journal: "Chemometrics and Intelligent Laboratory Systems", volume: "228", pages: "104623", year: "2022" },
    { authors: "Phasit Charoenkwan, <b>Saeed Ahmed</b>, Chanin Nantasenamat, Julian MW Quinn, Mohammad Ali Moni, Pietro Lio’, Watshara Shoombuatong*", title: "AMYPred-FRL is a novel approach for accurate prediction of amyloid proteins by using feature representation learning", journal: "Scientific reports", pages: "7697", year: "2022" },
    { authors: "<b>Saeed Ahmad</b>, Phasit Charoenkwan, Julian MW Quinn, Mohammad Ali Moni, Md Mehedi Hasan, Pietro Lio’, Watshara Shoombuatong*", title: "SCORPION is a stacking-based ensemble learning framework for accurate prediction of phage virion proteins", journal: "Scientific Reports", pages: "4106", year: "2022" },
    { authors: "Muhammad Arif, <b>Saeed Ahmad</b>, Fang Ge, Muhammad Kabir*, Yaser Daniaal Khan, Dong-Jun Yu*, Maha Thafar", title: "StackACPred: Prediction of anticancer peptides by integrating optimized multiple feature descriptors with stacked ensemble approach", journal: "Chemometrics and Intelligent Laboratory Systems", volume: "220", pages: "10445815", year: "2022" }
  ];

  const publications2021 = [
    { authors: "<b>Saeed Ahmad</b>, Muhammad Kabir, Muhammad Arif, Zaheer Ullah Khan, Dong-Jun Yu*", title: "DeepPPSite: A deep learning based model for analysis and prediction of phosphorylation sites using efficient sequence information", journal: "Analytical Biochemistry", volume: "612", pages: "113955", year: "2021" },
    { authors: "Muhammad Arif, Muhammad Kabir, <b>Saeed Ahmad</b>, Abid Khan, Fang Ge, Adel Khelifi, Dong-Jun Yu", title: "DeepCPPred: a deep learning framework for the discrimination of cell-penetrating peptides and their uptake efficiencies", journal: "IEEE/ACM Transactions on Computational Biology and Bioinformatics", volume: "19", issue: "5", pages: "2749-2759", year: "2021" }
  ];

  const publications2020 = [
    { authors: "<b>Saeed Ahmad</b>, Muhammad Kabir*, Muhammad Arif, Zakir Ali, Zar Nawab Khan Swati", title: "Prediction of human phosphorylated proteins by extracting multi-perspective discriminative features from the evolutionary profile and physicochemical properties through LFDA", journal: "Chemometrics and Intelligent Laboratory Systems", volume: "203", pages: "104066", year: "2020" },
    { authors: "Muhammad Arif, <b>Saeed Ahmad</b>, Farman Ali, Ge Fang, Min Li, Dong-Jun Yu*", title: "TargetCPP: accurate prediction of cell-penetrating peptides from optimized multi-scale features using gradient boost decision tree", journal: "Journal of computer-aided molecular design", volume: "34", pages: "841-856", year: "2020" },
    { authors: "Muhammad Arif, Farman Ali, <b>Saeed Ahmad</b>, Muhammad Kabir, Zakir Ali, Maqsood Hayat*", title: "Pred-BVP-Unb: Fast Prediction of Bacteriophage Virion Proteins Using Un-biased Multi-perspective Properties with Recursive Feature Elimination", journal: "Genomics", volume: "112", issue: "2", pages: "1565-1574", year: "2020" },
    { authors: "Muhammad Kabir*, Muhammad Iqbal, <b>Saeed Ahmad</b>, Maqsood Hayat*", title: "iNR-2L: A two-level sequence-based predictor developed via Chou’s 5-steps rule and general PseAAC for identifying nuclear receptors and their families", journal: "Genomics", volume: "112", issue: "1", pages: "276-285", year: "2020" },
    { authors: "Farman Ali, Muhammad Arif, Zaheer Ullah Khan, Muhammad Kabir, <b>Saeed Ahmad</b>, Dong-Jun Yu*", title: "SDBP-Pred: Prediction of single-stranded and double-stranded DNA-binding proteins by extending consensus sequence and K-segmentation strategies into PSSM", journal: "Analytical Biochemistry", volume: "589", pages: "113494", year: "2020" }
  ];

  const publications2019 = [
    { authors: "Zar Nawab Khan Swati, Qinghua Zhao, Muhammad Kabir, Farman Ali, Zakir Ali, <b>Saeed Ahmed</b>, Jianfeng Lu*", title: "Brain Tumor Classification for MR Images using Transfer Learning and Fine-Tuning", journal: "Computerized Medical Imaging and Graphics", volume: "75", pages: "34-46", year: "2019" },
    { authors: "Farman Ali, <b>Saeed Ahmed</b>, Zar Nawab Khan Swati, Shahid Akbar", title: "DP-BINDER: machine learning model for prediction of DNA-binding proteins by fusing evolutionary and physicochemical information", journal: "Journal of Computer-Aided Molecular Designs", volume: "33", pages: "645-658", year: "2019" },
    { authors: "SM Hasan Mahmud, Wenyu Chen, Hosney Jahan, Yongsheng Liu, Nasir Islam Sujan, <b>Saeed Ahmed</b>", title: "iDTi-CSsmoteB: identification of drug–target interaction based on drug chemical structure and protein sequence using XGBoost with over-sampling technique SMOTE", journal: "IEEE Access", volume: "7", pages: "48699-48714", year: "2019" },
    { authors: "Zar Nawab Khan Swati, Qinghua Zhao, Muhammad Kabir, Farman Ali, Zakir Ali, <b>Saeed Ahmed</b>, Jianfeng Lu*", title: "Content-Based Brain Tumor Retrieval for MR Images Using Transfer Learning", journal: "IEEE Access", volume: "7", issue: "1", pages: "17809-17822", year: "2019" },
    { authors: "Muhammad Kabir, Muhammad Arif, Farman Ali, <b>Saeed Ahmad</b>, Zar Nawab Khan Swati, Dong-Jun Yu*", title: "Prediction of membrane protein types by exploring local discriminative information from evolutionary profiles", journal: "Analytical Biochemistry", volume: "564-565", pages: "123-132", year: "2019" }
  ];

  const publications2018 = [
    { authors: "<b>Saeed Ahmad*</b>, Muhammad Kabir, Zakir Ali, Muhammad Arif, Farman Ali, Dong-Jun Yu", title: "An Integrated Feature Selection algorithm for Cancer Classification using Gene Expression Data", journal: "Combinatorial Chemistry & High Throughput Screening", volume: "21", issue: "9", pages: "631-645", year: "2018" },
    { authors: "<b>Saeed Ahmad*</b>, Muhammad Kabir*, Muhammad Arif, Zakir Ali, Farman Ali, Zar Nawab Khan Swati", title: "Improving secretory proteins prediction in Mycobacterium tuberculosis using the unbiased dipeptide composition with support vector machine", journal: "International Journal of Data Mining and Bioinformatics", volume: "21", issue: "3", pages: "212-229", year: "2018" },
    { authors: "Muhammad Kabir, Muhammad Arif, <b>Saeed Ahmad*</b>, Zakir Ali, Zar Nawab Khan Swati, Dong-Jun Yu*", title: "Intelligent computational method for discrimination of anticancer peptides by incorporating sequential and evolutionary profiles information", journal: "Chemometrics and Intelligent Laboratory Systems", volume: "182", pages: "158-165", year: "2018" },
    { authors: "Muhammad Kabir, <b>Saeed Ahmad</b>, Muhammad Iqbal, Zar Nawab Khan Swati, Zi Liu, Dong-Jun Yu*", title: "Improving prediction of extracellular matrix proteins using evolutionary information via a grey system model and asymmetric under-sampling technique", journal: "Chemometrics and Intelligent Laboratory Systems", volume: "174", pages: "22-32", year: "2018" }
  ];

  const publications2017 = [
    { authors: "Muslim Khan, Maqsood Hayat, Sher Afzal Khan, <b>Saeed Ahmad</b>, Nadeem Iqbal", title: "Bi-PSSM: Position specific scoring matrix based intelligent computational model for identification of mycobacterial membrane proteins", journal: "Journal of Theoretical Biology", volume: "435", pages: "116-124", year: "2017" }
  ];

  const publications2015 = [
    { authors: "Muhammad Kabir, Muhammad Iqbal, <b>Saeed Ahmad</b>, Maqsood Hayat*", title: "iTIS-PseKNC: Identification of Translation Initiation Site in human genes using pseudo k-tuple nucleotides composition", journal: "Computers in Biology and Medicine", volume: "66", pages: "252-257", year: "2015" },
    { authors: "<b>Saeed Ahmad</b>, Muhammad Kabir, Maqsood Hayat*", title: "Identification of Heat Shock Protein Families and J-Protein Types by incorporating Dipeptide Composition into Chou's general PseAAC", journal: "Computer Methods and Programs in Biomedicine", volume: "122", pages: "165-174", year: "2015" }
  ];

  const conferencePapers = [
    { authors: "Adil Yousaf, Muhammad Rashid Rasheed, Muhammad Arif, Abdullah Yousafzai, Muhammad Kabir, <b>Saeed Ahmed*</b>", title: "Recent advancements in predicting protein phosphorylation sites using machine learning methods", journal: "2021 International Conference on Innovative Computing (ICIC) -IEEE", pages: "1-6", year: "2021" },
    { authors: "Muhammad Rashid Rasheed, Mehwish Gill, Muhammad Asif Subhani, Muhammad Arif, <b>Saeed Ahmed</b>, Muhammd Kabir", title: "Comprehensive analysis of machine learning based predictors for identifying DNase I hypersensitive site", journal: "2021 International Conference on Innovative Computing (ICIC) -IEEE", pages: "1-6", year: "2021" }
  ];

  const renderPublication = (pub: any) => (
    <li key={`${pub.title}-${pub.year}`}>
      <div className="flex gap-2">
        <svg
          className="w-6 h-6 text-blue-800 dark:text-blue-300 flex-shrink-0 mt-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4V20M8 12H20M20 12L16 8M20 12L16 16"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="max-w-[80%] break-words" dangerouslySetInnerHTML={{
          __html: `${pub.authors}; <b>${pub.title}</b>, <i><b>[J] ${pub.journal}</b></i>, ${pub.volume ? `Volume ${pub.volume}, ` : ""}${pub.issue ? `Issue ${pub.issue}, ` : ""}${pub.year}, ${pub.pages ? `Pages ${pub.pages}.` : ""} ${pub.publisher || ""}`
        }} />
      </div>
    </li>
  );

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      className="bg-white shadow-2xl py-3 overflow-hidden rounded text-justify"
    >
      <h1 className="text-2xl mb-2 pl-4">Research Publications:</h1>
      <ol className="relative w-full mx-5 md:mx-10 dark:border-gray-700">
        {/* 2025 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2025</span>
          </h3>
          <ol>
            {publications2025.map(renderPublication)}
          </ol>
        </li>
      </ol>

      <ol className="relative w-full mx-5 md:mx-10 dark:border-gray-700">
        {/* 2024 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2024</span>
          </h3>
          <ol>
            {publications2024.map(renderPublication)}
          </ol>
        </li>

        {/* 2023 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2023</span>
          </h3>
          <ol>
            {publications2023.map(renderPublication)}
          </ol>
        </li>

        {/* 2022 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2022</span>
          </h3>
          <ol>
            {publications2022.map(renderPublication)}
          </ol>
        </li>

        {/* 2021 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2021</span>
          </h3>
          <ol>
            {publications2021.map(renderPublication)}
          </ol>
        </li>

        {/* 2020 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2020</span>
          </h3>
          <ol>
            {publications2020.map(renderPublication)}
          </ol>
        </li>

        {/* 2019 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2019</span>
          </h3>
          <ol>
            {publications2019.map(renderPublication)}
          </ol>
        </li>

        {/* 2018 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2018</span>
          </h3>
          <ol>
            {publications2018.map(renderPublication)}
          </ol>
        </li>

        {/* 2017 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2017</span>
          </h3>
          <ol>
            {publications2017.map(renderPublication)}
          </ol>
        </li>

        {/* 2015 Publications */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Publications &nbsp;
            <span className="text-gray-500">2015</span>
          </h3>
          <ol>
            {publications2015.map(renderPublication)}
          </ol>
        </li>

        {/* Conference Papers */}
        <li data-aos="fade-up" className="mb-5 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              className="w-8 h-8 text-blue-800 dark:text-blue-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
            Conference Papers &nbsp;
          </h3>
          <ol>
            {conferencePapers.map(renderPublication)}
          </ol>
        </li>
        <strong> *Corresponding Author.</strong>
      </ol>
    </div>
  );
};

export default ResearchPublication;
