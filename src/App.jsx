import { useState } from "react";

const publications = [
  {
    year: 2026,
    authors: "Flores Girón L., Martinez G.S., Ntahuma D.B., Bisimwa A.K., et al., Kaleme Kiswele Prince, Kelvin D.J.",
    title: "Case presentation of patients hospitalised with mpox (subclade Ib/2023sh) including children, adolescents, and adults in South Kivu, DRC: an observational cohort study.",
    journal: "The Lancet",
    doi: "https://doi.org/10.1016/S1473-3099(26)00051-4",
  },
  {
    year: 2026,
    authors: "Kalalizi E., Flores L., Pérez-Sancho M., et al., Kaleme Prince, ..., Gortázar C.",
    title: "Non-invasive environmental DNA sampling reveals tuberculosis risks at the human–Great Ape Interface in Africa.",
    journal: "Emerging Microbes & Infections",
    doi: "https://doi.org/10.1080/22221751.2026.2645874",
  },
  {
    year: 2025,
    authors: "Romero-Vidal P., Flores L., Kaleme Prince, Nishuli R., Tella J.L.",
    title: "Armed conflicts and biodiversity research.",
    journal: "Nature Sustainability",
    doi: "https://doi.org/10.1038/s41893-025-01699-2",
  },
  {
    year: 2024,
    authors: "Ngoy Y., Nshimba H., Kaleme Prince, Kpane J., Musalizi Muharabu L.",
    title: "Biomass and Carbon of Trees and Shrubs in the Commune of Mbunya in the City of Bunia, Ituri Province, DRC.",
    journal: "ASRJETS – Vol. 97, No 1, pp 150–157",
    doi: null,
  },
  {
    year: 2024,
    authors: "Ngoy Y., Nshimba H., Kaleme Prince, Kahindo J., Musalizi Muharabu L.",
    title: "Inventory of Urban Trees in the City of Bunia, Case of the Mudzipela District, Ituri Province, DRC.",
    journal: "ASRJETS – Vol. 97, No 1, pp 158–168",
    doi: null,
  },
  {
    year: 2022,
    authors: "Kaleme Kiswele Prince & Kujurakwinja K. Déo",
    title: "Les mammifères de la partie est de la République Démocratique du Congo.",
    journal: "Ed. CERUKI, ISP – Bukavu",
    doi: null,
  },
  {
    year: 2022,
    authors: "Bärmann E.V., Fonseca V.G., Langen K., Kaleme Prince",
    title: "New insights into the taxonomy of duiker antelopes (Artiodactyla: Bovidae) from eastern DRC, with the formal description of a new genus.",
    journal: "Mammalian Biology",
    doi: "https://doi.org/10.1007/s42991-022-00279-7",
  },
  {
    year: 2022,
    authors: "Flanders J., Frick W.F., Nziza J., et al., Kaleme Prince, et al.",
    title: "Rediscovery of the critically endangered Hill's horseshoe bat (Rhinolophus hilli) and other new records of bat species in Rwanda.",
    journal: "Biodiversity Data Journal No 10, pp 1–16",
    doi: "https://doi.org/10.3897/BDJ.10.e83546",
  },
  {
    year: 2022,
    authors: "Mangambu Mokoso J.D.D., Kambale Kavusa G., Milenge L.W., Aruna Sefu J., Kaleme Kiswele Prince",
    title: "Hippopotamus amphibius at Ruzizi River and Lake Tanganyika: population census and conservation implications.",
    journal: "Journal of Applied Biosciences 171: 17795–17811",
    doi: null,
  },
  {
    year: 2021,
    authors: "Thiombiano N.G., Boungou M., Kangoyé N.M., Kaleme Prince, et al.",
    title: "Bats diversity and abundance; record of Taphozous mauritianus for the first time in Burkina Faso.",
    journal: "Journal of Entomology and Zoology Studies 9(3): 26–31",
    doi: null,
  },
  {
    year: 2019,
    authors: "Galbany J., Twahirwa J.C., et al., Kaleme Prince, et al.",
    title: "Dental macrowear in Catarrhine primates: variability across species (book chapter).",
    journal: "Book chapter",
    doi: null,
  },
  {
    year: 2019,
    authors: "Mizerovská D., Nicolas V., Demos T.C., ..., Kaleme P.K., ..., Bryja J.",
    title: "Evolutionary history of forest-dwelling murid rodents in tropical Africa affected by geomorphology and climatic changes.",
    journal: "Journal of Biogeography",
    doi: null,
  },
  {
    year: 2016,
    authors: "Gaubert P., Njiokou F., et al., Kaleme Prince, et al.",
    title: "Phylogeography of the heavily poached African common pangolin (Manis tricuspis) reveals six cryptic lineages.",
    journal: "Molecular Ecology",
    doi: null,
  },
  {
    year: 2016,
    authors: "Abila R., et al., Kaleme Prince, et al.",
    title: "Oil extraction imperils Africa's Great Lakes.",
    journal: "Science 354(6312), 561–562",
    doi: null,
  },
  {
    year: 2015,
    authors: "Cerling T.E., et al., Kaleme Prince, et al.",
    title: "Dietary changes of large herbivores in the Turkana Basin, Kenya from 4 to 1 Ma.",
    journal: "PNAS",
    doi: null,
  },
  {
    year: 2013,
    authors: "Kerbis Peterhans J.C., Fahr J., Huhndorf M.H., Kaleme Prince, et al.",
    title: "Bats (Chiroptera) from the Albertine Rift, eastern DRC, with the description of two new species of the Rhinolophus maclaudi group.",
    journal: "Bonn Zoological Bulletin 62(2): 186–202",
    doi: null,
  },
  {
    year: 2013,
    authors: "Cerling T.E., Manthi F.K., Mbua E.N., et al., Kaleme Prince, et al.",
    title: "Stable isotope-based diet reconstructions of Turkana Basin hominins.",
    journal: "PNAS, pp 1–6",
    doi: null,
  },
  {
    year: 2011,
    authors: "Kaleme P.K., Bates J.M., Belesi H.K., et al.",
    title: "Origin and putative colonization routes for invasive rodent taxa in the Democratic Republic of Congo.",
    journal: "African Zoology 46(1): 133–145",
    doi: null,
  },
  {
    year: 2009,
    authors: "Taylor P.J., et al., Kaleme P., et al.",
    title: "Speciation mirrors geomorphological history in African laminate-toothed rats of the Otomys denti and O. lacustris species-complexes.",
    journal: "Biological Journal of Linnean Society 96, pp 913–941",
    doi: null,
  },
  {
    year: 2008,
    authors: "Cerling T.E., Harris J.M., Hart A.J., Kaleme P., et al.",
    title: "Stable isotope ecology of the common hippopotamus.",
    journal: "Journal of Zoology, ISSN 0952-8369",
    doi: null,
  },
  {
    year: 2008,
    authors: "Yamagiwa J., Basabose A.K., Kaleme P.K., Yumoto T.",
    title: "Phenology of fruits consumed by a sympatric population of gorillas and chimpanzees in Kahuzi Biega National Park, DRC.",
    journal: "African Study Monographs Suppl. 39: pp 3–22",
    doi: null,
  },
  {
    year: 2007,
    authors: "Kaleme P.K., Bates J., Kerbis Peterhans J., Mwanga M.J., Ndara B.R.",
    title: "Small mammal diversity and habitat requirements in Kahuzi-Biega National Park and surrounding areas, eastern DRC.",
    journal: "Integrative Zoology 2: pp 239–246",
    doi: null,
  },
  {
    year: 2007,
    authors: "Foden W., Midgley G.F., et al., Kaleme Prince, et al.",
    title: "A changing climate is eroding the geographical range of the Namib Desert tree Aloe.",
    journal: "Diversity and Distributions 13, 645–653",
    doi: null,
  },
];

const backgroundSections = [
  {
    title: "The Albertine Rift",
    content: [
      `The Albertine Rift is one of the most biologically extraordinary regions on Earth. Stretching from the Lendu Plateau at the northern tip of Lake Albert southward to the tip of Lake Tanganyika, it encompasses a dramatic landscape of rift valley escarpments, montane forests, highland savannas, and a chain of ancient lakes — Albert, Edward, Kivu, and Tanganyika — that together hold some of the oldest and most diverse freshwater ecosystems on the planet. Its geological origins lie in the broader East African Rift System, shaped over millions of years by tectonic uplift, volcanic activity, and Pleistocene climate cycling that repeatedly fragmented and reconnected forest habitats, driving extraordinary levels of speciation.`,

      `The region's global conservation significance has been recognised independently by multiple international bodies. BirdLife International designated it an Endemic Bird Area; the World Wildlife Fund classified it as a distinct Ecoregion; and Conservation International listed it as a Biodiversity Hotspot — one of only 36 such regions worldwide. It is home to the world's last surviving population of the Mountain Gorilla (Gorilla beringei beringei), a symbol both of the Rift's irreplaceable wildlife and of the fragility of its future.`,

      `What makes the Albertine Rift especially remarkable is its position at the crossroads of Africa's major biogeographical zones. Its fauna and flora carry links westward to Cameroon and Angola, northeastward to the Kenyan Highlands, southeastward to the Eastern Arc Mountains of Tanzania, and ultimately to southern Africa via the Malawi Rift — while its western edge abuts the vast Guinea-Congolian lowland rainforest. This convergence produces a transitional flora and fauna of exceptional richness and complexity, with altitudinal zonation adding yet another layer of ecological variation across its slopes.`,

      `In terms of raw biodiversity, the numbers are striking. The Albertine Rift harbours 402 recorded mammal species, including 35 strict endemics — the majority of which are small mammals: rodents, shrews, and bats. Among its most iconic mammals are Grauer's Gorilla (the world's largest gorilla subspecies), the eastern chimpanzee, the forest elephant, and an array of small mammal endemics including the Kivu Shrew (Crocidura kivuana), the Ruwenzori Otter Shrew (Micropotamogale ruwenzori), the Hill's Horseshoe Bat (Rhinolophus hilli), and Verschuren's Praomys. Birds count 30 strict endemics and 16 near-endemics, and amphibians contribute 33 strictly endemic species from 12 genera. The total number of strictly endemic plant species is estimated at 1,000–1,200, though this is widely considered an undercount given how poorly surveyed much of the region remains.`,

      `Despite this wealth, the Albertine Rift faces severe and accelerating threats. High human population densities — averaging around 300 inhabitants per square kilometre in some areas — drive agricultural encroachment, deforestation, and hunting pressure across and beyond protected area boundaries. In Rwanda, highland forests have been largely cleared; in DR Congo, vast areas of montane forest remain intact but are increasingly threatened by armed conflict, artisanal mining, and the collapse of conservation governance. The region is simultaneously one of the richest places on Earth for biodiversity and one of the least studied — a combination that makes the work of resident scientists like Dr. Kaleme not merely important, but irreplaceable.`,
    ],
  },
  {
    title: "Mammalogy",
    content: [
      `Mammalogy is the branch of zoology devoted to the scientific study of mammals — the class Mammalia, a group of vertebrates defined by a suite of shared characteristics: homeothermic (warm-blooded) metabolism, a body covering of fur or hair, mammary glands that produce milk for offspring, a four-chambered heart, and a highly developed nervous system with a large cerebral cortex. Mammals first appeared in the fossil record approximately 225 million years ago, and today represent one of the most ecologically diverse and behaviourally complex groups of animals on the planet — from the blue whale, the largest animal ever to have lived, to the bumblebee bat, the world's smallest mammal by mass.`,

      `The total number of described mammal species currently stands at approximately 6,495, a figure that continues to grow as molecular techniques, improved field methods, and expeditions to under-surveyed regions reveal previously unknown diversity. Remarkably, around 1,251 new mammal species have been described since 2006 alone — the majority of them bats, rodents, and shrews found in biodiverse tropical regions such as the Albertine Rift. This ongoing discovery underscores a central truth of mammalogy: even the best-studied class of vertebrates still holds surprises, and the work of dedicated field biologists remains essential.`,

      `The discipline branches into a rich array of subdisciplines. Taxonomy and systematics focus on naming, describing, and classifying species and understanding their evolutionary relationships. Ecology and ethology examine how mammals interact with their environments and with each other — their feeding behaviour, social structures, reproductive strategies, and population dynamics. Biogeography traces the historical and contemporary distributions of mammal lineages across landscapes and continents. Physiology and anatomy investigate the internal workings of mammalian bodies. Applied mammalogy connects these fields to conservation, wildlife management, pest control, and disease surveillance.`,

      `Primatology, cetology, rodentology, and chiropterology (the study of bats) are among the more specialised subdisciplines that have developed their own bodies of literature, methods, and conservation frameworks. Dr. Kaleme's work spans several of these — from long-term primate ecology in Kahuzi-Biega National Park to bat survey and taxonomy across the Albertine Rift and beyond, and from rodent phylogeography to hippopotamus population census. He is a member of the American Society of Mammalogy, reflecting his engagement with the global mammalogical community. Across DR Congo and the wider Albertine Rift, his surveys have contributed specimens, data, and species records that form the empirical backbone of what is known about the mammal fauna of one of the world's most species-rich and least-studied regions.`,
    ],
  },
  {
    title: "One Health",
    content: [
      `One Health is not a new concept, but it has received dramatic renewed attention over the past two decades as the frequency, severity, and global reach of zoonotic disease outbreaks has intensified. The COVID-19 pandemic, the Ebola crises in West and Central Africa, the mpox outbreaks in DR Congo and beyond, and the persistent threat of highly pathogenic avian influenza have all brought into sharp relief what ecologists and veterinarians have long argued: that human health, animal health, plant health, and environmental health are not separate domains but deeply and inextricably interconnected.`,

      `The formal definition adopted by the Quadripartite — the FAO, UNEP, WHO, and WOAH — through the One Health High-Level Expert Panel (OHHLEP) captures this integration clearly: One Health is an integrated, unifying approach that aims to sustainably balance and optimize the health of humans, animals, plants and ecosystems. It recognizes the health of humans, domestic and wild animals, plants and the wider environment are closely linked and interdependent. The approach mobilizes multiple sectors, disciplines and communities at varying levels of society to work together to foster well-being and tackle threats to health and ecosystems, while addressing the collective need for clean water, energy and air, safe and nutritious food, taking action on climate change, and contributing to sustainable development.`,

      `At its practical core, One Health demands collaboration across disciplines that have historically operated in silos — clinical medicine, veterinary science, ecology, epidemiology, public health, environmental science, and social science. A disease outbreak in wildlife may signal an emerging threat to livestock and then to humans. The loss of a keystone species may disrupt the ecological balance that kept a rodent-borne pathogen in check. The conversion of forest to farmland may bring human settlements into contact with reservoir species for viruses that were previously contained within undisturbed ecosystems. Each of these dynamics requires integrated monitoring, integrated response, and integrated policy — the essence of the One Health framework.`,

      `In the context of eastern DR Congo and the Albertine Rift, One Health carries particular urgency. The region hosts some of the world's highest densities of zoonotic disease reservoirs — bats, rodents, and primates that share habitats with dense and often impoverished human populations engaged in bushmeat hunting, artisanal mining, and forest clearance. Dr. Kaleme's research sits directly at this interface. His mammalogical surveys provide the species inventory and ecological data needed to identify which animals carry which pathogens and where. His co-authorship of the 2026 Lancet study on mpox (subclade Ib) in South Kivu patients, and the 2026 environmental DNA study on tuberculosis at the human–great ape interface, are direct expressions of the One Health approach in practice. He is a member of the One Health Consortium in DR Congo for Sud Kivu Province and serves as Focal Point for the Centre de Surveillance de la Biodiversité, Antenne du Sud Kivu.`,
    ],
  },
  {
    title: "Phylogeography",
    content: [
      `Phylogeography is the study of the historical processes that have shaped the present-day geographic distributions of genealogical lineages — asking not just where species live today, but how, when, and why their ancestors came to be distributed across particular landscapes. The field sits at the intersection of population genetics, biogeography, and evolutionary biology, using the geographic structure of genetic variation within and among species as a window onto the deep history of populations and the environments they have inhabited.`,

      `The term was introduced by the American evolutionary biologist John Avise in 1987, in a paper that described mitochondrial DNA as a "bridge" between population genetics and systematics. Avise and colleagues recognised that the geographic patterning of mitochondrial lineages within a single species often revealed coherent historical signals — evidence of past population isolation, range contractions during glacial maxima, expansions following climatic amelioration, and the influence of geological barriers such as mountain ranges, rivers, and rifts on the movement of individuals between populations. By 2000, Avise had produced a landmark book that formalised phylogeography as a discipline in its own right.`,

      `In the decades since, phylogeography has been transformed by the genomics revolution. What began with single mitochondrial gene sequences has expanded to analyses of hundreds of thousands of nuclear loci across entire genomes, allowing far more precise reconstruction of population histories, divergence times, and patterns of gene flow. At the same time, the theoretical framework has deepened, incorporating coalescent theory — which models the genealogical history of gene copies through populations — and increasingly integrating distributional modelling, palaeoclimate reconstructions, and geological data to build rich, multi-layered pictures of how landscapes and climates have shaped biodiversity over time.`,

      `For the Albertine Rift, phylogeography is not merely an academic exercise — it is an essential tool for understanding and conserving one of the world's most threatened biodiversity hotspots. The region's complex topography, its history of Pleistocene climate cycling, and the dramatic geological events associated with the East African Rift System have all left distinct signatures in the genetic structure of its fauna. Dr. Kaleme's PhD research at Stellenbosch University, and his subsequent work with collaborators at the Royal Belgian Institute of Natural Sciences, the Field Museum of Chicago, and institutions across Europe and Africa, has used phylogeographic approaches to investigate these signatures in small mammals — particularly within the genus Praomys and related rodent groups. His work on the African common pangolin (Manis tricuspis), published in Molecular Ecology in 2016, revealed six previously unrecognised cryptic lineages across the species' range — findings with direct implications for identifying the provenance of illegally traded animals and for designing conservation strategies that respect the evolutionary distinctiveness of each lineage.`,
    ],
  },
  {
    title: "Conservation Biology",
    content: [
      `Conservation biology is the scientific discipline dedicated to understanding, protecting, and restoring biodiversity — the variety of life on Earth at the level of genes, species, communities, and ecosystems. It emerged as a formal field in the late 1970s, crystallised by growing alarm among ecologists and evolutionary biologists over the accelerating pace of species extinction, tropical deforestation, and the erosion of genetic diversity within wild populations. The field was formally launched at the First International Conference on Research in Conservation Biology, held at the University of California San Diego in 1978 and led by Bruce Wilcox and Michael Soulé, who recognised that the gap between ecological theory and conservation practice had become dangerously wide.`,

      `At its heart, conservation biology is a crisis discipline — one defined not by a particular method or taxonomic focus but by an urgent applied goal: to prevent the loss of biodiversity and, where it has already occurred, to restore it. This urgency shapes everything from the questions researchers ask to the timescales on which results are needed. Current estimates suggest that up to 50% of all species on Earth could disappear within the next 50 years if present trends continue — a mass extinction event comparable in scale to the five great extinctions recorded in the fossil record, but driven not by asteroid impacts or volcanic eruptions but by human activity: habitat destruction, overexploitation, invasive species, pollution, and climate change.`,

      `Because biodiversity loss is driven by human activity and embedded in human social, economic, and political systems, conservation biology has evolved into a deeply interdisciplinary field. Its biological core — population ecology, evolutionary genetics, community ecology, landscape ecology — is increasingly integrated with conservation social science, which examines the human dimensions of conservation; with conservation behaviour, which applies ethological insights to the management of wild populations; and with conservation physiology, which studies the physiological responses of organisms to environmental stress. The field also engages directly with economics, law, policy, and governance, recognising that biological knowledge alone is insufficient to change the trajectories driving biodiversity loss.`,

      `In the Albertine Rift, conservation biology confronts some of its most difficult challenges in concentrated form. Protected areas such as Kahuzi-Biega National Park, Virunga National Park, and the Itombwe Massif are among the most globally significant reserves for mammal biodiversity — and among the most threatened, by armed conflict, mining, agricultural encroachment, and the collapse of state authority. Dr. Kaleme's career has been built on the conviction that rigorous, locally conducted science is the foundation of any credible conservation response. His population censuses of gorillas, chimpanzees, hippopotamuses, and small mammals across eastern DR Congo — carried out over more than three decades under conditions that would have ended most field programmes — represent an irreplaceable longitudinal record of how the wildlife of the Albertine Rift is faring, and what is being lost.`,
    ],
  },
];

const researchAreas = [
  {
    icon: "🦇",
    title: "Mammal Taxonomy & Phylogeography",
    desc: "Systematics and evolutionary history of small mammals across the Albertine Rift, with discovery of new species and cryptic lineages.",
  },
  {
    icon: "🌿",
    title: "Conservation Biology",
    desc: "Population census and conservation planning for threatened mammals in national parks of eastern DR Congo.",
  },
  {
    icon: "🦍",
    title: "Eco-ethology of Primates",
    desc: "Long-term ecological studies on gorillas and chimpanzees in Kahuzi-Biega National Park.",
  },
  {
    icon: "🔬",
    title: "One Health Research",
    desc: "Surveillance of zoonotic diseases including mpox, tuberculosis, and other mammals-to-human pathogens.",
  },
  {
    icon: "🗺️",
    title: "Biogeography",
    desc: "Modeling the distribution and dispersal routes of mammal taxa across the Congo Basin and Albertine Rift.",
  },
  {
    icon: "🌡️",
    title: "Climate Change Impacts",
    desc: "Using repeat photography and stable isotopes to track the effects of climate change on mammal populations and vegetation.",
  },
];

const career = [
  { year: "2022–present", role: "Scientific Director", org: "CRSN-Lwiro / Bukavu, DR Congo" },
  { year: "2015–present", role: "Professor & Head of Laboratory", org: "ISTM Bukavu, DR Congo" },
  { year: "2013–present", role: "Head of Mammal Research Unit", org: "Mammalogy Laboratory, CRSN-Lwiro" },
  { year: "2012", role: "Project Leader", org: "Frankfurt Zoological Society, Maiko NP" },
  { year: "2015–2020", role: "Scientific Director (first term)", org: "CRSN-Lwiro / Bukavu" },
  { year: "2005–2006", role: "Project Leader", org: "Wildlife Conservation Society, DR Congo" },
  { year: "2004", role: "Consultant / Senior Field Leader", org: "WCS, Kahuzi-Biega NP" },
  { year: "1994–present", role: "Researcher, Mammalogy Laboratory", org: "CRSN-Lwiro, DR Congo" },
];

const education = [
  { year: "2007–2011", degree: "PhD – Molecular Zoology, Mammal Taxonomy, Biogeography & Phylogeography", inst: "Stellenbosch University, South Africa" },
  { year: "2002–2003", degree: "M.Sc. – Conservation Biology", inst: "Percy FitzPatrick Institute, University of Cape Town, South Africa" },
  { year: "1987–1989", degree: "Honours – Biology", inst: "Institut Supérieur Pédagogique de Bukavu, DR Congo" },
  { year: "1983–1986", degree: "Undergraduate – Biology", inst: "Institut Supérieur Pédagogique de Kikwit, DR Congo" },
];

const memberships = [
  "IUCN Mammal Species Survival Commission – Bats",
  "Bat Conservation Africa – Vice Chair for Central Africa",
  "International Society of Zoological Sciences",
  "International Society of Rodent Biology and Management",
  "Zoological Society of Southern Africa – Council Member (DR Congo representative)",
  "Visiting Researcher, University of Johannesburg (since 2014)",
];

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [pubFilter, setPubFilter] = useState("all");

  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);
  const filteredPubs =
    pubFilter === "all" ? publications : publications.filter((p) => p.year === parseInt(pubFilter));

  const navItems = [
    { id: "about", label: "About" },
    { id: "research", label: "Research" },
    { id: "career", label: "Career" },
    { id: "publications", label: "Publications" },
    { id: "contact", label: "Contact" },
  ];

  const styles = {
    root: {
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#f7f4ef",
      minHeight: "100vh",
      color: "#1a1a1a",
    },
    nav: {
      background: "#1c3a2f",
      padding: "0 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
    },
    navBrand: {
      color: "#d4a84b",
      fontFamily: "'Georgia', serif",
      fontSize: "1rem",
      fontWeight: "bold",
      letterSpacing: "0.05em",
      padding: "1rem 0",
    },
    navLinks: {
      display: "flex",
      gap: "0.25rem",
    },
    navBtn: (active) => ({
      background: active ? "rgba(212,168,75,0.18)" : "transparent",
      border: "none",
      color: active ? "#d4a84b" : "#a8c8b8",
      padding: "0.5rem 0.85rem",
      borderRadius: "4px",
      cursor: "pointer",
      fontFamily: "inherit",
      fontSize: "0.85rem",
      letterSpacing: "0.04em",
      transition: "all 0.2s",
      borderBottom: active ? "2px solid #d4a84b" : "2px solid transparent",
    }),
    hero: {
      background: "linear-gradient(135deg, #1c3a2f 60%, #2d5a42 100%)",
      color: "#fff",
      padding: "4rem 2rem 3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2.5rem",
      flexWrap: "wrap",
    },
    avatar: {
      width: 110,
      height: 110,
      borderRadius: "50%",
      background: "#d4a84b",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "2.8rem",
      fontWeight: "bold",
      color: "#1c3a2f",
      flexShrink: 0,
      border: "4px solid rgba(255,255,255,0.2)",
    },
    heroName: {
      fontSize: "2rem",
      fontWeight: "bold",
      margin: "0 0 0.3rem",
      letterSpacing: "0.02em",
    },
    heroTitle: {
      fontSize: "1rem",
      color: "#a8d8b8",
      margin: "0 0 0.5rem",
      fontStyle: "italic",
    },
    heroBadges: {
      display: "flex",
      gap: "0.5rem",
      flexWrap: "wrap",
      marginTop: "0.75rem",
    },
    badge: {
      background: "rgba(212,168,75,0.22)",
      border: "1px solid rgba(212,168,75,0.4)",
      color: "#f0d080",
      padding: "0.25rem 0.75rem",
      borderRadius: "20px",
      fontSize: "0.78rem",
      letterSpacing: "0.03em",
    },
    section: {
      maxWidth: 820,
      margin: "0 auto",
      padding: "2.5rem 1.5rem",
    },
    sectionTitle: {
      fontSize: "1.35rem",
      fontWeight: "bold",
      color: "#1c3a2f",
      borderBottom: "2px solid #d4a84b",
      paddingBottom: "0.4rem",
      marginBottom: "1.5rem",
      letterSpacing: "0.03em",
    },
    card: {
      background: "#fff",
      borderRadius: "8px",
      border: "1px solid #e0dbd0",
      padding: "1.25rem 1.5rem",
      marginBottom: "1rem",
    },
    researchGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "1rem",
    },
    researchCard: {
      background: "#fff",
      borderRadius: "8px",
      border: "1px solid #e0dbd0",
      padding: "1.25rem",
      borderTop: "3px solid #d4a84b",
    },
    timelineItem: {
      display: "flex",
      gap: "1.25rem",
      marginBottom: "1.1rem",
      alignItems: "center",
      textAlign: "center",
    },
    timelineItem2: {
      display: "flex",
      gap: "1.25rem",
      marginBottom: "1.1rem",
      alignItems: "center",
      textAlign: "justify",
    },
    timelineYear: {
      minWidth: 110,
      fontSize: "0.78rem",
      color: "#fff",
      background: "#1c3a2f",
      borderRadius: "4px",
      padding: "0.22rem 0.6rem",
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: "0.02em",
    },
    pubCard: {
      background: "#fff",
      borderRadius: "8px",
      border: "1px solid #e0dbd0",
      padding: "1rem 1.25rem",
      marginBottom: "0.85rem",
      borderLeft: "4px solid #1c3a2f",
    },
    avatar: {
      width: 110,
      height: 110,
      borderRadius: "50%",
      flexShrink: 0,
      border: "4px solid rgba(255,255,255,0.2)",
      objectFit: "cover", 
      objectPosition: "center 10%",
    },
    pubYear: {
      display: "inline-block",
      background: "#1c3a2f",
      color: "#d4a84b",
      fontSize: "0.75rem",
      fontWeight: "bold",
      padding: "0.15rem 0.5rem",
      borderRadius: "3px",
      marginBottom: "0.4rem",
    },
    pubTitle: {
      fontSize: "0.95rem",
      fontWeight: "bold",
      color: "#1a1a1a",
      marginBottom: "0.3rem",
      lineHeight: 1.45,
    },
    pubAuthors: {
      fontSize: "0.82rem",
      color: "#555",
      fontStyle: "italic",
      marginBottom: "0.25rem",
    },
    pubJournal: {
      fontSize: "0.82rem",
      color: "#1c3a2f",
      fontWeight: "bold",
    },
    filterRow: {
      display: "flex",
      gap: "0.4rem",
      flexWrap: "wrap",
      marginBottom: "1.25rem",
    },
    filterBtn: (active) => ({
      background: active ? "#1c3a2f" : "#fff",
      color: active ? "#d4a84b" : "#555",
      border: "1px solid " + (active ? "#1c3a2f" : "#ccc"),
      borderRadius: "20px",
      padding: "0.25rem 0.75rem",
      fontSize: "0.78rem",
      cursor: "pointer",
      fontFamily: "inherit",
      transition: "all 0.15s",
    }),
    references:{
      background: "#fff",
      borderRadius: "8px",
      border: "1px solid #e0dbd0",
      padding: "1.25rem 1.5rem",
      marginBottom: "1rem",
      textAlign: "justify",
      fontSize: "0.8rem",
    },
    contactCard: {
      background: "#1c3a2f",
      color: "#fff",
      borderRadius: "10px",
      padding: "1.75rem 2rem",
    },
    contactRow: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      marginBottom: "0.9rem",
      fontSize: "0.95rem",
      textAlign: "justify",
    },
    contactIcon: {
      fontSize: "1.2rem",
      minWidth: 26,
    },
    membershipItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "0.5rem",
      marginBottom: "0.6rem",
      fontSize: "0.9rem",
      color: "#2a2a2a",
      textAlign: "justify",
    },
    dot: {
      minWidth: 8,
      height: 8,
      borderRadius: "50%",
      background: "#d4a84b",
      marginTop: 6,
    },
  };

  return (
    <div style={styles.root}>
      <nav style={styles.nav}>
        <div style={styles.navBrand}>Dr. P.K. Kaleme</div>
        <div style={styles.navLinks}>
          {navItems.map((n) => (
            <button
              key={n.id}
              style={styles.navBtn(activeSection === n.id)}
              onClick={() => setActiveSection(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div style={styles.hero}>
        <img src="/avatar.jpeg" alt="Dr. Prince Kaleme Kiswele" style={styles.avatar} />
        
        <div>
          <h1 style={styles.heroName}>Dr. Prince Kaleme Kiswele</h1>
          <p style={styles.heroTitle}>M.Sc. Conservation Biology · PhD Molecular Zoology</p>
          <p style={{ margin: "0 0 0.25rem", color: "#c8e8d8", fontSize: "0.9rem" }}>
            Scientific Director & Head of Mammal Research Unit
          </p>
          <p style={{ margin: 0, color: "#a8c8b8", fontSize: "0.85rem" }}>
            Centre de Recherche en Sciences Naturelles (CRSN-Lwiro) · Bukavu, DR Congo
          </p>
          <div style={styles.heroBadges}>
            <span style={styles.badge}>Albertine Rift</span>
            <span style={styles.badge}>Mammalogy</span>
            <span style={styles.badge}>One Health</span>
            <span style={styles.badge}>Conservation</span>
            <span style={styles.badge}>Phylogeography</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      {activeSection === "about" && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>About</h2>
          <div style={styles.card}>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
              Dr. Prince Kaleme Kiswele is one of central Africa's most distinguished field biologists — a scientist whose career has unfolded almost entirely in one of the world's most extraordinary, and most dangerous, biodiversity hotspots: the Albertine Rift of eastern DR Congo. With over 1,450 citations to his name and 28 published scientific works (including a book and two book chapters) on ResearchGate alone, his influence reaches far beyond the forests he has spent decades walking through. 
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
              Born in Bandundu Province (now Kwilu), he grew up in western Congo where, even before his university years, he knew he had a passion for research — drawn in first by the biology lectures of his American teachers, and later by the fieldwork of an undergraduate professor who showed him what a scientist's life could look like. He completed his early education in Bandundu before moving east to Bukavu for his honours degree, and briefly taught secondary school before the pull of research proved irresistible.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
              In 1991, he was given a position at CRSN in Lwiro after a competitive test organised to recruit researchers. He began at the Mammalogy Laboratory working on ape eco-ethology and conservation, before becoming increasingly focused on small mammals. It was a turning point that would define the next three decades. CRSN-Lwiro, an enormous colonial-era research centre on the edge of Kahuzi-Biega National Park, became his scientific home — and he has remained there ever since, eventually rising to lead it as Scientific Director.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
              His formal graduate training took him far afield. He earned an M.Sc. in Conservation Biology from the Percy FitzPatrick Institute at the University of Cape Town in 2002–2003, followed by a PhD in Molecular Zoology from Stellenbosch University in South Africa, completed in 2011. Both degrees deepened his capacity for the kind of work that sets him apart: combining rigorous field collection with molecular and morphological analysis to resolve some of the most contested questions in African mammal systematics.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
              The Albertine Rift has been the geographical heart of his science. Its habitats are defined by two outstanding features: exceptionally high biodiversity and endemism on the one hand, and dramatic threat to that biodiversity from high human population density and resource pressure on the other. Within this tension, Dr. Kaleme has spent his career trying to document what is there before it disappears — and to understand how it got there in the first place. His phylogeographic research has explored the relationship between mountain forest fragments across the Albertine Rift and the distribution of small mammals, as well as the geographic patterns of genetic variation associated with different morphological forms, work that has revealed hidden cryptic diversity across the region.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
             His taxonomic contributions are concrete and substantial. He co-authored papers describing new bat species of the Rhinolophus maclaudi group and new shrew species from the Misotshi-Kabogo highlands. He contributed to the landmark pangolin phylogeography study that revealed six cryptic lineages in the heavily traded Manis tricuspis — findings with direct implications for anti-poaching enforcement and wildlife trade law. He co-described a new genus of duiker antelope from eastern DRC in 2022, a rare and remarkable achievement in large mammal taxonomy.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
             At CRSN's Mammalogy Laboratory, Dr. Kaleme has built wide-ranging collaborations with institutions across West, Central and East Africa, with particular expertise in bats, rodents and shrews. He is a vice chair for Central Africa within Bat Conservation Africa, a body affiliated with Bat Conservation International, and has worked to promote training and youth engagement in small mammal research across the region. His membership of the IUCN Mammal Species Survival Commission — Bats specialist group reflects international recognition of that expertise.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
             Beyond taxonomy, his career has addressed some of the largest questions in African ecology. He was part of the team that conducted long-running gorilla and chimpanzee studies in Kahuzi-Biega National Park, tracking food plant phenology and the social ecology of Grauer's gorilla — the world's largest gorilla subspecies — across more than a decade of fieldwork. He contributed specimens and data to stable isotope studies of hominins and large herbivores in the Turkana Basin published in PNAS, and co-authored the widely cited Science piece warning that oil extraction threatens Africa's Great Lakes. His climate change work, using repeat photography to track shifts in tree aloe populations across southern Africa, demonstrated a rare ability to move between tropical forest mammalogy and arid-zone plant ecology.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
             In recent years, his work has moved decisively into One Health.
              He was a co-author on the landmark 2026 Lancet observational cohort
               study documenting mpox (subclade Ib) in hospitalised patients — including
                children and adolescents — in South Kivu, work conducted at the epicentre
                 of one of the world's most pressing emerging disease outbreaks. He also 
                 contributed to a 2026 Emerging Microbes & Infections study using environmental
                  DNA to detect tuberculosis risk at the human–great ape interface. His
                   affiliation with the international biorepository capacity initiative
                    published in Science reflects a broader argument he has long made: that 
                    comprehensive decentralised pathogen surveillance requires robust biodiversity infrastructure in the very countries experiencing the highest rates of habitat conversion, wildlife trafficking, and human–wildlife contact.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
             That argument is inseparable from where he works. The research staff at CRSN-Lwiro have studied the biological diversity of the southern Albertine Rift for generations — documenting diversity and distribution, monitoring populations, and conducting applied research on flora and fauna relevant to local communities. Because of heavy conflict in the region, much of this work has been carried out without reliable compensation. Dr. Kaleme's persistence through those conditions — continuing to publish, mentor, and lead fieldwork while eastern Congo has repeatedly descended into crisis — is itself a form of scientific achievement.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
             His 2025 commentary in Nature Sustainability, co-authored with Pedro Romero-Vidal and others, addressed directly how armed conflicts damage biodiversity research — a subject he knows not from the outside but from lived experience. Due to the M23 rebellion, he has had to relocate at times to Kinshasa while continuing his role as Scientific Director remotely.
            </p>
            <p style={{ margin: "0 0 0.9rem", lineHeight: 1.8, fontSize: "0.97rem" }}>
             He is also a Professor and Head of the Laboratory Section at the Institut Supérieur des Techniques Médicales (ISTM) in Bukavu, teaching the next generation of medical and scientific practitioners in South Kivu. He is fluent in French, English, Swahili, Kikongo, and Lingala — a linguistic range that reflects the breadth of communities he moves through and serves. He holds a visiting researcher appointment at the University of Johannesburg, and maintains active collaborations with the Field Museum of Natural History in Chicago, the Muséum National de l'Histoire Naturelle in Paris, and the Royal Belgian Institute of Natural Sciences in Brussels.
            </p>
            <p style={{ margin: 0, lineHeight: 1.8, fontSize: "0.97rem" }}>
              He has reflected that Congo offers biologists truly endless opportunities — many wild places to explore, many more still to discover, and in recent years many completely new species identified with more expected in the future. That spirit — part scientific optimism, part stubborn commitment to a place the rest of the world often writes off — runs through everything Dr. Prince Kaleme has built.
            </p>
          </div>

          <h2 style={{ ...styles.sectionTitle, marginTop: "2rem" }}>Education</h2>
          {education.map((e, i) => (
            <div key={i} style={styles.timelineItem2}>
              <span style={styles.timelineYear}>{e.year}</span>
              <div>
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "0.9rem" }}>{e.degree}</p>
                <p style={{ margin: 0, fontSize: "0.83rem", color: "#555", fontStyle: "italic" }}>{e.inst}</p>
              </div>
            </div>
          ))}

          <h2 style={{ ...styles.sectionTitle, marginTop: "2rem" }}>Hobbies & Interests</h2>
          <div style={styles.card}>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#444", lineHeight: 1.8 }}>
              Walking and hiking in rugged terrain · Tourism and visiting forested areas · Watching sport with
              companions · Spending time with friends and colleagues · Reading and listening to good stories
            </p>
          </div>
          <div style={styles.references}>
            <h3>References &amp; Sources</h3>
            <ol>
              <li>
                <a href="https://www.researchgate.net/profile/Prince-Kaleme" target="_blank" rel="noopener noreferrer">
                  ResearchGate Profile — Prince Kaleme (citations &amp; publications)
                </a>
              </li>
              <li>
                <a href="https://gorillahighlands.com/the-many-surprises-of-lwiro-in-eastern-dr-congo/" target="_blank" rel="noopener noreferrer">
                  Gorilla Highlands Experts — "The Many Surprises of Lwiro in Eastern DR Congo" (personal narrative by Dr. Kaleme, 2021)
                </a>
              </li>
              <li>
                <a href="https://taxonomy.naturalsciences.be/traineeships/internship-kaleme-prince-kiswele-dr-congo/" target="_blank" rel="noopener noreferrer">
                  Royal Belgian Institute of Natural Sciences — Internship Report: Kaleme Prince Kiswele, Habitat Fragmentation &amp; Phylogeography of Small Mammals in the Albertine Rift (2010)
                </a>
              </li>
              <li>
                <a href="https://bii4africa.org/dr-prince-kaleme/" target="_blank" rel="noopener noreferrer">
                  Biodiversity Intactness for Africa (BII4Africa) — Expert Profile: Dr. Prince Kaleme (bats, rodents &amp; insectivores, CRSN Lwiro)
                </a>
              </li>
              <li>
                <a href="https://www.science.org/doi/10.1126/science.abe4813" target="_blank" rel="noopener noreferrer">
                  <em>Science</em> — "Build International Biorepository Capacity" (Colella, Kaleme et al.) — One Health &amp; zoonotic surveillance infrastructure
                </a>
              </li>
              <li>
                <a href="https://www.nature.com/articles/s41893-025-01699-2" target="_blank" rel="noopener noreferrer">
                  Nature Sustainability — "Armed Conflicts and Biodiversity Research" (Romero-Vidal, Flores, Kaleme et al., 2025/2026)
                </a>
              </li>
              <li>
                <a href="https://doi.org/10.1016/S1473-3099(26)00051-4" target="_blank" rel="noopener noreferrer">
                  <em>The Lancet</em> — "Case presentation of patients hospitalised with mpox (subclade Ib/2023sh) in South Kivu, DRC" (Flores Girón, Kaleme et al., 2026)
                </a>
              </li>
              <li>
                <a href="https://doi.org/10.1080/22221751.2026.2645874" target="_blank" rel="noopener noreferrer">
                  <em>Emerging Microbes &amp; Infections</em> — "Non-invasive environmental DNA sampling reveals tuberculosis risks at the human–Great Ape Interface in Africa" (Kalalizi, Kaleme et al., 2026)
                </a>
              </li>
              <li>
                <a href="https://doi.org/10.1007/s42991-022-00279-7" target="_blank" rel="noopener noreferrer">
                  <em>Mammalian Biology</em> — "New insights into the taxonomy of duiker antelopes from eastern DRC, with the formal description of a new genus" (Bärmann, Fonseca, Langen &amp; Kaleme, 2022)
                </a>
              </li>
              <li>
                <a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/mec.13886" target="_blank" rel="noopener noreferrer">
                  <em>Molecular Ecology</em> — "Phylogeography of the heavily poached African common pangolin (Manis tricuspis) reveals six cryptic lineages" (Gaubert, Kaleme et al., 2016)
                </a>
              </li>
              <li>
                <a href="https://academic.oup.com/biolinnean/article/96/4/913/2448004" target="_blank" rel="noopener noreferrer">
                  <em>Biological Journal of the Linnean Society</em> — "Speciation mirrors geomorphological history in African laminate-toothed rats" (Taylor, Kaleme et al., 2009)
                </a>
              </li>
            </ol>
          </div>
        </div>
      )}

      {/* RESEARCH */}
      {activeSection === "research" && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Research Areas</h2>
          <div style={styles.researchGrid}>
            {researchAreas.map((r, i) => (
              <div key={i} style={styles.researchCard}>
                <div style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>{r.icon}</div>
                <h3 style={{ margin: "0 0 0.4rem", fontSize: "0.95rem", color: "#1c3a2f", fontWeight: "bold" }}>
                  {r.title}
                </h3>
                <p style={{ margin: 0, fontSize: "0.83rem", color: "#555", lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ ...styles.sectionTitle, marginTop: "2.5rem" }}>Field Experience</h2>
          <div style={styles.card}>
            {[
              "1994–present: Inventories (census) of mammal populations in national parks and wild places of eastern DR Congo (Kahuzi-Biega NP, Itombwe Massif, Mount Kabobo, Maiko NP, Virunga NP, Okapi Faunal Reserve, etc.)",
              "1994–2001: Monitoring ape food plant phenology in mountain forest, eastern DR Congo",
              "1999–present: Biogeography and ecology of small mammals in tropical rain forests of the Albertine Rift",
              "2002–2003: Monitoring effects of climate change using repeat photography (M.Sc. project, UCT)",
              "2007–present: Phylogeography of small mammals across the Albertine Rift, central–east Africa",
            ].map((item, i) => (
              <div key={i} style={{ ...styles.membershipItem, marginBottom: "0.8rem" }}>
                <div style={styles.dot}></div>
                <span style={{ fontSize: "0.88rem", lineHeight: 1.6, textAlign: "justify" }}>{item}</span>
              </div>
            ))}
          </div>

          <h2 style={{ ...styles.sectionTitle, marginTop: "2.5rem" }}>Scientific Memberships</h2>
          <div style={styles.card}>
            {memberships.map((m, i) => (
              <div key={i} style={styles.membershipItem}>
                <div style={styles.dot}></div>
                <span>{m}</span>
              </div>
            ))}
          </div>
          <h2 style={{ ...styles.sectionTitle, marginTop: "2.5rem" }}>Background & Concepts</h2>
          {backgroundSections.map((sec, i) => (
            <details key={i} style={{ ...styles.card, marginBottom: "0.85rem" }}>
              <summary style={{ fontWeight: "bold", fontSize: "0.95rem", color: "#1c3a2f", cursor: "pointer", padding: "0.25rem 0" }}>
                {sec.title}
              </summary>
              {sec.content.map((para, j) => (
                <p key={j} style={{ marginTop: "0.75rem", fontSize: "0.88rem", lineHeight: 1.8, color: "#333" }}>
                  {para}
                </p>
              ))}
            </details>
          ))}
        </div>
      )}

      {/* CAREER */}
      {activeSection === "career" && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Professional Career</h2>
          {career.map((c, i) => (
            <div key={i} style={styles.timelineItem}>
              <span style={styles.timelineYear}>{c.year}</span>
              <div style={{ ...styles.card, margin: 0, flex: 1, padding: "0.75rem 1rem" }}>
                <p style={{ margin: "0 0 0.2rem", fontWeight: "bold", fontSize: "0.92rem" }}>{c.role}</p>
                <p style={{ margin: 0, fontSize: "0.82rem", color: "#555" }}>{c.org}</p>
              </div>
            </div>
          ))}

          <h2 style={{ ...styles.sectionTitle, marginTop: "2.5rem" }}>Training & Courses</h2>
          {[
            { year: "2024", item: "Procedure for taking samples from captured rodents and bats – and use of personal protective equipment." },
            { year: "2008", item: "Basic GIS course, Stellenbosch University, South Africa" },
            { year: "2005–06", item: "Theory and practice of stable light isotopes spectrometry, Dept. of Archaeology, UCT" },
            { year: "2004", item: "Training on data collection and management in tropical rain forest, WCS – DR Congo" },
            { year: "2001", item: "Museum management, field methodology and small mammal identification, Field Museum of Natural History, Chicago, USA" },
            { year: "1999", item: "African Tropical Biodiversity Program (ATBP), Makerere University Institute of Environment & Natural Resources, Uganda" },
          ].map((t, i) => (
            <div key={i} style={styles.timelineItem}>
              <span style={styles.timelineYear}>{t.year}</span>
              <p style={{ margin: 0, fontSize: "0.87rem", lineHeight: 1.6, paddingTop: "0.15rem", textAlign: "justify" }}>{t.item}</p>
            </div>
          ))}

          <h2 style={{ ...styles.sectionTitle, marginTop: "2.5rem" }}>Collaborations</h2>
          <div style={styles.card}>
            {[
              "Department of Zoology, University of Johannesburg – Visiting Researcher since 2014",
              "Zoology Department, Field Museum of Natural Science, Chicago, USA",
              "Violaine Nicolas, Muséum National de l'Histoire Naturelle, Paris, France",
              "Erik Verheyen, Royal Belgian Institute of Natural Sciences / Royal Museum for Central Africa",
              "Robert Kityo, Department of Zoology, Makerere University, Kampala, Uganda",
              "Andrew Plumptre, Wildlife Conservation Society, Albertine Rift office, Kampala, Uganda",
            ].map((c, i) => (
              <div key={i} style={{ ...styles.membershipItem, marginBottom: "0.65rem", justifyContent: "flex-start" }}>
                <div style={styles.dot}></div>
                <span style={{ fontSize: "0.87rem" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PUBLICATIONS */}
      {activeSection === "publications" && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Publications</h2>
          <div style={styles.filterRow}>
            <button style={styles.filterBtn(pubFilter === "all")} onClick={() => setPubFilter("all")}>
              All ({publications.length})
            </button>
            {years.map((y) => (
              <button
                key={y}
                style={styles.filterBtn(pubFilter === String(y))}
                onClick={() => setPubFilter(String(y))}
              >
                {y}
              </button>
            ))}
          </div>

          {filteredPubs.map((p, i) => (
            <div key={i} style={styles.pubCard}>
              <span style={styles.pubYear}>{p.year}</span>
              <p style={styles.pubTitle}>{p.title}</p>
              <p style={styles.pubAuthors}>{p.authors}</p>
              <p style={styles.pubJournal}>{p.journal}</p>
              {p.doi && (
                <a
                  href={p.doi}
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontSize: "0.78rem", color: "#1c6a3f", marginTop: "0.3rem", display: "inline-block" }}
                >
                  DOI →
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* CONTACT */}
      {activeSection === "contact" && (
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <div style={styles.contactCard}>
            <h3 style={{ margin: "0 0 1.25rem", color: "#d4a84b", fontSize: "1.05rem", letterSpacing: "0.04em" }}>
              Get in Touch
            </h3>
            {[
              { icon: "📍", label: "Institution", value: "CRSN-Lwiro / Bukavu, DR Congo" },
              { icon: "📧", label: "Email", value: "pkaleme@gmail.com" },
              { icon: "📞", label: "Phone", value: "(+243) 82 251 3485 · (+243) 99 363 5621" },
              { icon: "🏠", label: "Residence", value: "Kinshasa, N'sele, BAT, Nº 83 C, Av. Ilanga" },
            ].map((r, i) => (
              <div key={i} style={styles.contactRow}>
                <span style={styles.contactIcon}>{r.icon}</span>
                <div>
                  <p style={{ margin: 0, fontSize: "0.75rem", color: "#a8c8b8", letterSpacing: "0.05em" }}>
                    {r.label.toUpperCase()}
                  </p>
                  <p style={{ margin: 0, color: "#fff", fontSize: "0.9rem" }}>{r.value}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ ...styles.sectionTitle, marginTop: "2rem" }}>Current Positions</h2>
          {[
            {
              title: "Scientific Director",
              org: "Centre de Recherche en Sciences Naturelles (CRSN-Lwiro), Bukavu, DR Congo",
              since: "Aug 2022–present",
            },
            {
              title: "Head of Mammal Research Unit, Mammalogy Laboratory",
              org: "Department of Biology, CRSN-Lwiro",
              since: "2013–present",
            },
            {
              title: "Professor of Mammalogy",
              org: "Université Officielle de Bukavu",
              since: "2024–present",
            },
            {
              title: "Professor of Renewable natural resource management, Mammalogy & Animal biology",
              org: "Université Shalom de Bunia",
              since: "2024–present",
            },
            {
              title: "Member of Consortium",
              org: "One Health Consortium DR Congo",
              since: "2024–present",
            },
            {
              title: "Focal point (Antenne du Sud Kivu",
              org: "Centre de Surveillance de la Biodiversité",
              since: "2024–present",
            },
          ].map((pos, i) => (
            <div key={i} style={{ ...styles.card, borderLeft: "4px solid #d4a84b" }}>
              <p style={{ margin: "0 0 0.2rem", fontWeight: "bold", fontSize: "0.95rem" }}>{pos.title}</p>
              <p style={{ margin: "0 0 0.15rem", fontSize: "0.85rem", color: "#333" }}>{pos.org}</p>
              <p style={{ margin: 0, fontSize: "0.78rem", color: "#888", fontStyle: "italic" }}>{pos.since}</p>
            </div>
          ))}
        </div>
      )}

      <footer style={{ background: "#1c3a2f", color: "#a8c8b8", textAlign: "center", padding: "1.25rem", fontSize: "0.8rem", marginTop: "2rem" }}>
        © 2026 Dr. Prince Kaleme Kiswele · CRSN-Lwiro, Bukavu, DR Congo
      </footer>
    </div>
  );
}
