import { useState, useEffect, useRef } from "react";
import "./App.css";
import { images, galleryItems } from "./assets/images";
import {
  User,
  Briefcase,
  FileText,
  Image as ImageIcon,
  Mail,
  ExternalLink,
  MapPin,
  Building2,
  Phone,
  Award,
  BookMarked,
  Compass,
  Dna,
  Activity,
  Microscope,
  Mountain,
  Trees,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  GraduationCap,
  ShieldCheck,
  Globe,
  Camera,
  Search,
  BookOpen,
  Sparkles,
  Check,
  Copy,
  Calendar,
  RotateCcw,
} from "lucide-react";

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
    journal: "American Academic Scientific Research Journal for Engineering, Technology, and Sciences (ASRJETS) – Vol. 97, No 1, pp 150–157",
    doi: null,
  },
  {
    year: 2024,
    authors: "Ngoy Y., Nshimba H., Kaleme Prince, Kahindo J., Musalizi Muharabu L.",
    title: "Inventory of Urban Trees in the City of Bunia, Case of the Mudzipela District, Ituri Province, DRC.",
    journal: "American Academic Scientific Research Journal for Engineering, Technology, and Sciences (ASRJETS) – Vol. 97, No 1, pp 158–168",
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
    year: 2016,
    authors: "Bakwo Fils E.M., Kaleme P. & Weber N.",
    title: "Megaloglossus woermanni.",
    journal: "The IUCN Red List of Threatened Species 2016: e.T84462869A22012371",
    doi: "https://dx.doi.org/10.2305/IUCN.UK.2016-1.RLTS.T84462869A22012371.en",
  },
  {
    year: 2016,
    authors: "Bakwo Fils E.M. & Kaleme P.",
    title: "Micropteropus pusillus.",
    journal: "The IUCN Red List of Threatened Species 2016: e.T13402A22126384",
    doi: "https://dx.doi.org/10.2305/IUCN.UK.2016-1.RLTS.T13402A22126384.en",
  },
  {
    year: 2016,
    authors: "Bakwo Fils E.M. & Kaleme P.",
    title: "Myonycteris torquata.",
    journal: "The IUCN Red List of Threatened Species 2016: e.T84463104A22046504",
    doi: "https://dx.doi.org/10.2305/IUCN.UK.2016-1.RLTS.T84463104A22046504.en",
  },
  {
    year: 2015,
    authors: "Cerling T.E., et al., Kaleme Prince, et al.",
    title: "Dietary changes of large herbivores in the Turkana Basin, Kenya from 4 to 1 Ma.",
    journal: "PNAS",
    doi: null,
  },
  {
    year: 2014,
    authors: "Mangambu Mokoso J.D.D., Robbrecht E., Janssen T., Misakabu Majiba F., Kaleme Kiswele Prince, Ntahobavuka Habimana H. & van Diggelen R.",
    title: "Analysis of the Congolese distribution of ferns and allies mountainous of Kahuzi Biega National Park (DRC): contribution to the conservation of actual protected areas in the park.",
    journal: "International Journal of Biological Sciences (IJBS) Vol. 01, No. 06, pp. 01–23",
    doi: null,
  },
  {
    year: 2014,
    authors: "Kaleme P.K., Kaningini M.B., Kahindo M.N.C., Kujirakwinja D., Nishuli R., Chifundera K.Z., Ndakala P., Magadju C. & Abulwa E.",
    title: "État des lieux de la biodiversité – Province du Sud Kivu.",
    journal: "In: États des lieux de la Biodiversité de la RD Congo, pp. 338–380",
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
    year: 2010,
    authors: "Hoffman M.T., Rohde R.F., Duncan J. & Kaleme P.",
    title: "Repeat photography, climate change and the long-term population dynamics of tree Aloes in southern Africa.",
    journal: "In: Repeat Photography — Methods and Applications in the Natural Sciences. Island Press, Washington DC. ISBN 978-1-59726-713-7",
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
  {
    year: 2005,
    authors: "Matsubara M., Basabose K., Omari I., Kaleme K., Kizungu B., Sikubwabo K., Kahindo M., Yamagiwa J. & Takenaka O.",
    title: "Species and sex identification of western lowland gorillas (Gorilla gorilla gorilla), eastern lowland gorillas (Gorilla beringei graueri) and humans.",
    journal: "Primates, 46: pp 199–202",
    doi: null,
  },
  {
    year: 2003,
    authors: "Yamagiwa J., Basabose K., Kaleme K. & Yumoto T.",
    title: "Within-group feeding competition and socioecological factors influencing social organization of gorillas in the Kahuzi-Biega National Park, DRC.",
    journal: "In: Gorilla Biology: A Multidisciplinary Perspective, Cambridge University Press, pp. 230–257",
    doi: null,
  },
  {
    year: 1998,
    authors: "Hall J., White L., Inogwabini B., Omari I., Morland H.S., Williamson L., Saltonstall K., Walsh P., Sikubwabo C., Dumbo B., Kaleme P.K., Vedder A. & Freeman K.",
    title: "Survey of Grauer's Gorillas (Gorilla gorilla graueri) and Eastern Chimpanzees (Pan troglodytes schweinfurthii) in Kahuzi-Biega National Park Lowland sector and adjacent Forest in Eastern DRC.",
    journal: "International Journal of Primatology, vol. 19, No 2",
    doi: null,
  },
  {
    year: 1996,
    authors: "Yamagiwa J., Kaleme K., Mwanga M. & Basabose K.",
    title: "Food Density and Ranging Pattern of gorillas and chimpanzees in Kahuzi-Biega National Park, Zaire.",
    journal: "TROPICS, vol. 6½, pp 65–77",
    doi: null,
  },
];

const backgroundSections = [
  {
    title: "The Albertine Rift",
    images: [
      { src: images.tropicalTree, label: "Albertine Rift montane rainforest canopy" },
      { src: images.congoBasinExpedition, label: "Riverine waterways and expansive basin habitats" },
    ],
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
    images: [
      { src: images.fruitBat, label: "Fruit bat (Pteropodidae) in Congo Basin" },
      { src: images.rodentDendromus, label: "Specimen examination: Dendromus in hand" },
    ],
    content: [
      `Mammalogy is the branch of zoology devoted to the scientific study of mammals — the class Mammalia, a group of vertebrates defined by a suite of shared characteristics: homeothermic (warm-blooded) metabolism, a body covering of fur or hair, mammary glands that produce milk for offspring, a four-chambered heart, and a highly developed nervous system with a large cerebral cortex. Mammals first appeared in the fossil record approximately 225 million years ago, and today represent one of the most ecologically diverse and behaviourally complex groups of animals on the planet — from the blue whale, the largest animal ever to have lived, to the bumblebee bat, the world's smallest mammal by mass.`,
      `The total number of described mammal species currently stands at approximately 6,495, a figure that continues to grow as molecular techniques, improved field methods, and expeditions to under-surveyed regions reveal previously unknown diversity. Remarkably, around 1,251 new mammal species have been described since 2006 alone — the majority of them bats, rodents, and shrews found in biodiverse tropical regions such as the Albertine Rift. This ongoing discovery underscores a central truth of mammalogy: even the best-studied class of vertebrates still holds surprises, and the work of dedicated field biologists remains essential.`,
      `The discipline branches into a rich array of subdisciplines. Taxonomy and systematics focus on naming, describing, and classifying species and understanding their evolutionary relationships. Ecology and ethology examine how mammals interact with their environments and with each other — their feeding behaviour, social structures, reproductive strategies, and population dynamics. Biogeography traces the historical and contemporary distributions of mammal lineages across landscapes and continents. Physiology and anatomy investigate the internal workings of mammalian bodies. Applied mammalogy connects these fields to conservation, wildlife management, pest control, and disease surveillance.`,
      `Primatology, cetology, rodentology, and chiropterology (the study of bats) are among the more specialised subdisciplines that have developed their own bodies of literature, methods, and conservation frameworks. Dr. Kaleme's work spans several of these — from long-term primate ecology in Kahuzi-Biega National Park to bat survey and taxonomy across the Albertine Rift and beyond, and from rodent phylogeography to hippopotamus population census. He is a member of the American Society of Mammalogists, reflecting his engagement with the global mammalogical community. Across DR Congo and the wider Albertine Rift, his surveys have contributed specimens, data, and species records that form the empirical backbone of what is known about the mammal fauna of one of the world's most species-rich and least-studied regions.`,
    ],
  },
  {
    title: "One Health",
    images: [
      { src: images.lab15, label: "Microscopy & biosurveillance at CRSN-Lwiro" },
      { src: images.teamAtCave, label: "Field biosafety preparation at bat cave entrance" },
    ],
    content: [
      `One Health is not a new concept, but it has received dramatic renewed attention over the past two decades as the frequency, severity, and global reach of zoonotic disease outbreaks has intensified. The COVID-19 pandemic, the Ebola crises in West and Central Africa, the mpox outbreaks in DR Congo and beyond, and the persistent threat of highly pathogenic avian influenza have all brought into sharp relief what ecologists and veterinarians have long argued: that human health, animal health, plant health, and environmental health are not separate domains but deeply and inextricably interconnected.`,
      `The formal definition adopted by the Quadripartite — the FAO, UNEP, WHO, and WOAH — through the One Health High-Level Expert Panel (OHHLEP) captures this integration clearly: One Health is an integrated, unifying approach that aims to sustainably balance and optimize the health of humans, animals, plants and ecosystems. It recognizes the health of humans, domestic and wild animals, plants and the wider environment are closely linked and interdependent. The approach mobilizes multiple sectors, disciplines and communities at varying levels of society to work together to foster well-being and tackle threats to health and ecosystems, while addressing the collective need for clean water, energy and air, safe and nutritious food, taking action on climate change, and contributing to sustainable development.`,
      `At its practical core, One Health demands collaboration across disciplines that have historically operated in silos — clinical medicine, veterinary science, ecology, epidemiology, public health, environmental science, and social science. A disease outbreak in wildlife may signal an emerging threat to livestock and then to humans. The loss of a keystone species may disrupt the ecological balance that kept a rodent-borne pathogen in check. The conversion of forest to farmland may bring human settlements into contact with reservoir species for viruses that were previously contained within undisturbed ecosystems. Each of these dynamics requires integrated monitoring, integrated response, and integrated policy — the essence of the One Health framework.`,
      `In the context of eastern DR Congo and the Albertine Rift, One Health carries particular urgency. The region hosts some of the world's highest densities of zoonotic disease reservoirs — bats, rodents, and primates that share habitats with dense and often impoverished human populations engaged in bushmeat hunting, artisanal mining, and forest clearance. Dr. Kaleme's research sits directly at this interface. His mammalogical surveys provide the species inventory and ecological data needed to identify which animals carry which pathogens and where. His co-authorship of the 2026 Lancet study on mpox (subclade Ib) in South Kivu patients, and the 2026 environmental DNA study on tuberculosis at the human–great ape interface, are direct expressions of the One Health approach in practice. He is a member of the One Health Consortium in DR Congo for Sud Kivu Province and serves as Focal Point for the Centre de Surveillance de la Biodiversité, Antenne du Sud Kivu.`,
    ],
  },
  {
    title: "Phylogeography",
    images: [
      { src: images.insectivoreBat, label: "Insectivorous bat: morphological & genetic study" },
      { src: images.congoBasinField, label: "Forest surveys documenting genetic boundaries" },
    ],
    content: [
      `Phylogeography is the study of the historical processes that have shaped the present-day geographic distributions of genealogical lineages — asking not just where species live today, but how, when, and why their ancestors came to be distributed across particular landscapes. The field sits at the intersection of population genetics, biogeography, and evolutionary biology, using the geographic structure of genetic variation within and among species as a window onto the deep history of populations and the environments they have inhabited.`,
      `The term was introduced by the American evolutionary biologist John Avise in 1987, in a paper that described mitochondrial DNA as a "bridge" between population genetics and systematics. Avise and colleagues recognised that the geographic patterning of mitochondrial lineages within a single species often revealed coherent historical signals — evidence of past population isolation, range contractions during glacial maxima, expansions following climatic amelioration, and the influence of geological barriers such as mountain ranges, rivers, and rifts on the movement of individuals between populations. By 2000, Avise had produced a landmark book that formalised phylogeography as a discipline in its own right.`,
      `In the decades since, phylogeography has been transformed by the genomics revolution. What began with single mitochondrial gene sequences has expanded to analyses of hundreds of thousands of nuclear loci across entire genomes, allowing far more precise reconstruction of population histories, divergence times, and patterns of gene flow. At the same time, the theoretical framework has deepened, incorporating coalescent theory — which models the genealogical history of gene copies through populations — and increasingly integrating distributional modelling, palaeoclimate reconstructions, and geological data to build rich, multi-layered pictures of how landscapes and climates have shaped biodiversity over time.`,
      `For the Albertine Rift, phylogeography is not merely an academic exercise — it is an essential tool for understanding and conserving one of the world's most threatened biodiversity hotspots. The region's complex topography, its history of Pleistocene climate cycling, and the dramatic geological events associated with the East African Rift System have all left distinct signatures in the genetic structure of its fauna. Dr. Kaleme's PhD research at Stellenbosch University, and his subsequent work with collaborators at the Royal Belgian Institute of Natural Sciences, the Field Museum of Chicago, and institutions across Europe and Africa, has used phylogeographic approaches to investigate these signatures in small mammals — particularly within the genus Praomys and related rodent groups. His work on the African common pangolin (Manis tricuspis), published in Molecular Ecology in 2016, revealed six previously unrecognised cryptic lineages across the species' range — findings with direct implications for identifying the provenance of illegally traded animals and for designing conservation strategies that respect the evolutionary distinctiveness of each lineage.`,
    ],
  },
  {
    title: "Conservation Biology",
    images: [
      { src: images.meetingMunicipality, label: "Dialogue with local authorities for conservation" },
      { src: images.conservationOutreach, label: "Community conservation outreach in rural DRC" },
    ],
    content: [
      `Conservation biology is the scientific discipline dedicated to understanding, protecting, and restoring biodiversity — the variety of life on Earth at the level of genes, species, communities, and ecosystems. It emerged as a formal field in the late 1970s, crystallised by growing alarm among ecologists and evolutionary biologists over the accelerating pace of species extinction, tropical deforestation, and the erosion of genetic diversity within wild populations. The field was formally launched at the First International Conference on Research in Conservation Biology, held at the University of California San Diego in 1978 and led by Bruce Wilcox and Michael Soulé, who recognised that the gap between ecological theory and conservation practice had become dangerously wide.`,
      `At its heart, conservation biology is a crisis discipline — one defined not by a particular method or taxonomic focus but by an urgent applied goal: to prevent the loss of biodiversity and, where it has already occurred, to restore it. This urgency shapes everything from the questions researchers ask to the timescales on which results are needed. Current estimates suggest that up to 50% of all species on Earth could disappear within the next 50 years if present trends continue — a mass extinction event comparable in scale to the five great extinctions recorded in the fossil record, but driven not by asteroid impacts or volcanic eruptions but by human activity: habitat destruction, overexploitation, invasive species, pollution, and climate change.`,
      `Because biodiversity loss is driven by human activity and embedded in human social, economic, and political systems, conservation biology has evolved into a deeply interdisciplinary field. Its biological core — population ecology, evolutionary genetics, community ecology, landscape ecology — is increasingly integrated with conservation social science, which examines the human dimensions of conservation; with conservation behaviour, which applies ethological insights to the management of wild populations; and with conservation physiology, which studies the physiological responses of organisms to environmental stress. The field also engages directly with economics, law, policy, and governance, recognising that biological knowledge alone is insufficient to change the trajectories driving biodiversity loss.`,
      `In the Albertine Rift, conservation biology confronts some of its most difficult challenges in concentrated form. Protected areas such as Kahuzi-Biega National Park, Virunga National Park, and the Itombwe Massif are among the most globally significant reserves for mammal biodiversity — and among the most threatened, by armed conflict, mining, agricultural encroachment, and the collapse of state authority. Dr. Kaleme's career has been built on the conviction that rigorous, locally conducted science is the foundation of any credible conservation response. His population censuses of gorillas, chimpanzees, hippopotamuses, and small mammals across eastern DR Congo — carried out over more than three decades under conditions that would have ended most field programmes — represent an irreplaceable longitudinal record of how the wildlife of the Albertine Rift is faring, and what is being lost.`,
    ],
  },
];

const researchProgramsFluid = [
  {
    icon: <Dna size={18} />,
    photo: images.fruitBat,
    tag: "Chiroptera & Systematics",
    title: "Mammal Taxonomy & Phylogeography",
    desc: "Systematics and evolutionary history of small mammals across the Albertine Rift, with discovery of new bat species and cryptic rodent lineages.",
  },
  {
    icon: <ShieldCheck size={18} />,
    photo: images.conservationOutreach,
    tag: "Protected Area Ecology",
    title: "Conservation Biology & Participatory Planning",
    desc: "Population census and conservation planning for threatened mammals in national parks and community reserves of eastern DR Congo.",
  },
  {
    icon: <Trees size={18} />,
    photo: images.teamFieldWork,
    tag: "Primate Monitoring",
    title: "Eco-ethology of Primates",
    desc: "Long-term ecological studies on Grauer's gorillas and chimpanzees in Kahuzi-Biega National Park and adjacent montane forest blocks.",
  },
  {
    icon: <Activity size={18} />,
    photo: images.lab00,
    tag: "Zoonotic Biosurveillance",
    title: "One Health & Pathogen Surveillance",
    desc: "Surveillance of zoonotic diseases including mpox, tuberculosis, and emerging mammal-to-human pathogens in high-risk forest interfaces.",
  },
  {
    icon: <Globe size={18} />,
    photo: images.congoBasinField,
    tag: "Spatial Ecology",
    title: "Biogeography & Deep Forest Surveys",
    desc: "Modeling distributions and dispersal routes of endemic mammal taxa across the Congo Basin, Albertine Rift, and Great Lakes highlands.",
  },
  {
    icon: <Mountain size={18} />,
    photo: images.teamInCave,
    tag: "Subterranean Habitats",
    title: "Cave Ecology & Chiroptera Roosts",
    desc: "Long-term monitoring of subterranean bat roosts, cave microclimates, and environmental factors influencing viral reservoir ecology.",
  },
];

const career = [
  { year: "2022–present", role: "Scientific Director", org: "CRSN-Lwiro / Bukavu, DR Congo", thumb: images.crsnMuseumVisit },
  { year: "2015–present", role: "Professor & Head of Laboratory", org: "ISTM Bukavu, DR Congo", thumb: images.lab15 },
  { year: "2013–present", role: "Head of Mammal Research Unit", org: "Mammalogy Laboratory, CRSN-Lwiro", thumb: images.lab00 },
  { year: "2012", role: "Project Leader", org: "Frankfurt Zoological Society, Maiko NP", thumb: images.goingToField },
  { year: "2015–2020", role: "Scientific Director (first term)", org: "CRSN-Lwiro / Bukavu", thumb: null },
  { year: "2005–2006", role: "Project Leader", org: "Wildlife Conservation Society, DR Congo", thumb: images.teamFieldWork },
  { year: "2004", role: "Consultant / Senior Field Leader", org: "WCS, Kahuzi-Biega NP", thumb: null },
  { year: "1994–present", role: "Researcher, Mammalogy Laboratory", org: "CRSN-Lwiro, DR Congo", thumb: images.meetingMunicipality },
];

const education = [
  { year: "2007–2011", degree: "PhD – Molecular Zoology, Mammal Taxonomy, Biogeography & Phylogeography", inst: "Stellenbosch University, South Africa" },
  { year: "2002–2003", degree: "M.Sc. – Conservation Biology", inst: "Percy FitzPatrick Institute, University of Cape Town, South Africa" },
  { year: "1987–1989", degree: "Honours – Biology", inst: "Institut Supérieur Pédagogique de Bukavu, DR Congo" },
  { year: "1983–1986", degree: "Undergraduate – Biology", inst: "Institut Supérieur Pédagogique de Kikwit, DR Congo" },
];

const memberships = [
  "IUCN Mammal Species Survival Commission – Bats Specialist Group",
  "Bat Conservation Africa – Vice Chair for Central Africa",
  "International Society of Zoological Sciences",
  "International Society of Rodent Biology and Management",
  "Zoological Society of Southern Africa – Council Member (DR Congo representative)",
  "American Society of Mammalogists (ASM)",
  "Visiting Researcher, University of Johannesburg (since 2014)",
];

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [pubCategory, setPubCategory] = useState("all");
  const [pubYear, setPubYear] = useState("all");
  const [pubSearch, setPubSearch] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    setActiveSection("about");
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  const pubCategories = [
    { id: "all", label: "All Works", icon: <FileText size={13} />, count: publications.length },
    {
      id: "landmark",
      label: "Landmark Papers",
      icon: <Sparkles size={13} />,
      count: publications.filter((p) =>
        ["the lancet", "nature", "science", "pnas", "molecular ecology"].some((j) => p.journal.toLowerCase().includes(j))
      ).length,
    },
    {
      id: "chiroptera",
      label: "Chiroptera & Mammals",
      icon: <Dna size={13} />,
      count: publications.filter((p) =>
        ["bat", "bats", "rhinolophus", "taphozous", "myonycteris", "micropteropus", "megaloglossus", "murid", "rodent", "dendromus", "otomys", "duiker", "pangolin", "manis", "shrew", "mammif", "mammal"].some((k) =>
          `${p.title} ${p.journal} ${p.authors}`.toLowerCase().includes(k)
        )
      ).length,
    },
    {
      id: "onehealth",
      label: "One Health & Pathogens",
      icon: <Activity size={13} />,
      count: publications.filter((p) =>
        ["mpox", "tuberculosis", "disease", "infection", "health", "surveillance", "invasive", "epidemiol", "pathogen"].some((k) =>
          `${p.title} ${p.journal} ${p.authors}`.toLowerCase().includes(k)
        )
      ).length,
    },
    {
      id: "ecology",
      label: "Primates & Ecology",
      icon: <Trees size={13} />,
      count: publications.filter((p) =>
        ["gorilla", "chimpanzee", "primate", "tree", "biomass", "aloe", "hippo", "fern", "climate", "oil", "food density", "macrowear"].some((k) =>
          `${p.title} ${p.journal} ${p.authors}`.toLowerCase().includes(k)
        )
      ).length,
    },
    {
      id: "books",
      label: "Books & Red List",
      icon: <BookMarked size={13} />,
      count: publications.filter((p) =>
        ["iucn", "book", "livre", "ceruki", "états des lieux", "cambridge"].some((k) =>
          `${p.title} ${p.journal} ${p.authors}`.toLowerCase().includes(k)
        )
      ).length,
    },
  ];

  const filteredPubs = publications.filter((p) => {
    const fullText = `${p.title} ${p.journal} ${p.authors}`.toLowerCase();

    // Category filter
    if (pubCategory !== "all") {
      if (pubCategory === "landmark") {
        const isLandmark = ["the lancet", "nature", "science", "pnas", "molecular ecology"].some((j) =>
          p.journal.toLowerCase().includes(j)
        );
        if (!isLandmark) return false;
      } else if (pubCategory === "chiroptera") {
        const isChiroptera = [
          "bat", "bats", "rhinolophus", "taphozous", "myonycteris", "micropteropus", "megaloglossus",
          "murid", "rodent", "dendromus", "otomys", "duiker", "pangolin", "manis", "shrew", "mammif", "mammal"
        ].some((k) => fullText.includes(k));
        if (!isChiroptera) return false;
      } else if (pubCategory === "onehealth") {
        const isOneHealth = [
          "mpox", "tuberculosis", "disease", "infection", "health", "surveillance", "invasive", "epidemiol", "pathogen"
        ].some((k) => fullText.includes(k));
        if (!isOneHealth) return false;
      } else if (pubCategory === "ecology") {
        const isEcology = [
          "gorilla", "chimpanzee", "primate", "tree", "biomass", "aloe", "hippo", "fern", "climate", "oil", "food density", "macrowear"
        ].some((k) => fullText.includes(k));
        if (!isEcology) return false;
      } else if (pubCategory === "books") {
        const isBook = ["iucn", "book", "livre", "ceruki", "états des lieux", "cambridge"].some((k) =>
          fullText.includes(k)
        );
        if (!isBook) return false;
      }
    }

    // Year filter
    if (pubYear !== "all") {
      if (p.year !== parseInt(pubYear)) return false;
    }

    // Search filter
    if (pubSearch.trim()) {
      const q = pubSearch.toLowerCase().trim();
      const match =
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q) ||
        p.journal.toLowerCase().includes(q) ||
        String(p.year).includes(q);
      if (!match) return false;
    }

    return true;
  });

  const getPubBadges = (p) => {
    const j = p.journal.toLowerCase();
    if (j.includes("the lancet") || j.includes("lancet")) {
      return { isLandmark: true, label: "★ The Lancet", type: "Clinical & Global Health Cohort" };
    }
    if (j.includes("nature sustainability") || j.includes("nature")) {
      return { isLandmark: true, label: "★ Nature Sustainability", type: "Conservation Policy & Conflict" };
    }
    if (j.includes("science")) {
      return { isLandmark: true, label: "★ Science", type: "Biorepository Capacity Letter" };
    }
    if (j.includes("pnas")) {
      return { isLandmark: true, label: "★ PNAS", type: "Paleoecology & Isotope Science" };
    }
    if (j.includes("molecular ecology")) {
      return { isLandmark: true, label: "★ Molecular Ecology", type: "Genomics & Cryptic Lineages" };
    }
    if (j.includes("iucn")) {
      return { isLandmark: false, label: "IUCN Red List Assessment", type: "Chiroptera Red List Assessment" };
    }
    if (j.includes("book") || j.includes("ceruki") || j.includes("états des lieux") || j.includes("cambridge")) {
      return { isLandmark: false, label: "Book Chapter / Monograph", type: "Academic Volume" };
    }
    return { isLandmark: false, label: "Peer-Reviewed Article", type: "Original Research" };
  };

  const renderHighlightedAuthors = (authorsStr) => {
    const parts = authorsStr.split(/(Kaleme[^\,\;\.]*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("Kaleme")) {
        return (
          <span key={idx} className="author-highlight-pk">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  const handleCopyCitation = (p, index) => {
    const citation = `${p.authors} (${p.year}). ${p.title} ${p.journal}.${p.doi ? ` ${p.doi}` : ""}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(citation);
    }
    setCopiedId(index);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredGallery =
    galleryFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === galleryFilter);

  const navItems = [
    { id: "about", label: "About", icon: <User size={15} /> },
    { id: "research", label: "Research", icon: <Microscope size={15} /> },
    { id: "career", label: "Career & Mentorship", icon: <Briefcase size={15} /> },
    { id: "publications", label: "Publications", icon: <FileText size={15} />, badge: publications.length },
    { id: "gallery", label: "Fieldwork & Gallery", icon: <ImageIcon size={15} />, badge: galleryItems.length },
    { id: "contact", label: "Contact", icon: <Mail size={15} /> },
  ];

  const openLightbox = (imgData) => {
    setLightboxImg(imgData);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  return (
    <div>
      {/* Sticky Header with Dynamic Brand Label & Responsive Menu */}
      <header className="site-header">
        <div className="nav-container">
          <div className="brand-link" onClick={scrollToHero} title="Return to About">
            <div className="brand-emblem">PK</div>
            <span
              className={`brand-text-name ${
                activeSection !== "about" || isScrolled ? "brand-visible" : "brand-hidden"
              }`}
            >
              Dr. Prince Kaleme Kiswele
            </span>
          </div>

          {/* Expandable Menu Toggle Button (appears when nav does not fit) */}
          <button
            className="nav-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            <span className="menu-toggle-label">Menu</span>
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="nav-tabs">
            {navItems.map((n) => (
              <button
                key={n.id}
                className={`nav-tab-btn ${activeSection === n.id ? "active" : ""}`}
                onClick={() => handleNavClick(n.id)}
              >
                {n.icon}
                <span>{n.label}</span>
                {n.badge && <span className="tab-pill-badge">{n.badge}</span>}
              </button>
            ))}
          </nav>
        </div>

        {/* Expandable Navigation Drawer (When viewport is narrow) */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="mobile-nav-list">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  className={`mobile-nav-btn ${activeSection === n.id ? "active" : ""}`}
                  onClick={() => handleNavClick(n.id)}
                >
                  <div className="mobile-nav-btn-left">
                    {n.icon}
                    <span>{n.label}</span>
                  </div>
                  {n.badge && <span className="tab-pill-badge">{n.badge}</span>}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section: Rendered ONLY on the About page with Natural Canopy Background */}
      {activeSection === "about" && (
        <div
          className="hero-wrapper"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(9, 24, 16, 0.62) 0%, rgba(12, 28, 19, 0.78) 100%), url(${images.tropicalTree})`,
          }}
        >
          <div className="hero-inner">
            <div className="hero-avatar-box">
              <img
                src="/avatar.jpeg"
                alt="Dr. Prince Kaleme Kiswele"
                className="hero-avatar-img"
              />
            </div>

            <div className="hero-content">
              <h1 className="hero-title-main">Dr. Prince Kaleme Kiswele</h1>
              <p className="hero-subtitle">
                M.Sc. Conservation Biology (UCT) · PhD Molecular Zoology (Stellenbosch)
              </p>
            </div>
          </div>

          {/* Stats Ribbon & Snappy Scroll Trigger */}
          <div className="stats-ribbon">
            <div className="stats-container">
              <div className="stat-box">
                <div className="stat-icon-wrap">
                  <BookMarked size={16} />
                </div>
                <div>
                  <div className="stat-number">1,450+</div>
                  <div className="stat-label">Citations on ResearchGate</div>
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-icon-wrap">
                  <Compass size={16} />
                </div>
                <div>
                  <div className="stat-number">30+ Yrs</div>
                  <div className="stat-label">Albertine Rift Expeditions</div>
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-icon-wrap">
                  <FileText size={16} />
                </div>
                <div>
                  <div className="stat-number">28+</div>
                  <div className="stat-label">Peer-Reviewed Papers &amp; Books</div>
                </div>
              </div>

              <div className="stat-box">
                <div className="stat-icon-wrap">
                  <Award size={16} />
                </div>
                <div>
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Cryptic Lineages &amp; New Taxa</div>
                </div>
              </div>
            </div>

            {/* Snappy Scroll Cue to Section Content */}
            <button className="hero-snap-cue" onClick={scrollToContent}>
              <span>Explore Scientific Trajectory</span>
              <ChevronDown size={14} className="bounce-arrow" />
            </button>
          </div>
        </div>
      )}

      {/* Scroll-Snap Content Anchor */}
      <main ref={contentRef} id="content-snap-target" className="main-content-anchor">
        {/* ================= ABOUT SECTION: WARM ARCHIVAL IVORY BAND ================= */}
        {activeSection === "about" && (
          <section className="section-band section-band-about">
            <div className="section-inner-measure">
              <div className="section-header-wrap">
                <div>
                  <span className="section-eyebrow">Biographical Trajectory &amp; Scientific Legacy</span>
                  <h2 className="section-heading">About Dr. Prince Kaleme Kiswele</h2>
                  <p className="section-subtext">Three decades of field mammalogy, biosurveillance, and conservation in Central Africa</p>
                </div>
              </div>

            {/* Paragraph 1 */}
            <p className="essay-paragraph">
              Dr. Prince Kaleme Kiswele is one of central Africa's most distinguished field biologists — a scientist whose career has unfolded almost entirely in one of the world's most extraordinary, and most dangerous, biodiversity hotspots: the Albertine Rift of eastern DR Congo. With over 1,450 citations to his name and 28 published scientific works (including a book and two book chapters) on ResearchGate alone, his influence reaches far beyond the forests he has spent decades walking through.
            </p>

            {/* Paragraph 2 */}
            <p className="essay-paragraph">
              Born in Bandundu Province (now Kwilu), he grew up in western Congo where, even before his university years, he knew he had a passion for research — drawn in first by the biology lectures of his American teachers, and later by the fieldwork of an undergraduate professor who showed him what a scientist's life could look like. He completed his early education in Bandundu before moving east to Bukavu for his honours degree, and briefly taught secondary school before the pull of research proved irresistible.
            </p>

            {/* Plate 1: Lab Work */}
            <div className="archival-plate-float float-right">
              <div className="contour-arch-frame">
                <img src={images.lab00} alt="Dr. Kaleme in the Lab" className="contour-arch-img" />
              </div>
            </div>

            {/* Paragraph 3 */}
            <p className="essay-paragraph">
              In 1991, he was given a position at CRSN in Lwiro after a competitive test organised to recruit researchers. He began at the Mammalogy Laboratory working on ape eco-ethology and conservation, before becoming increasingly focused on small mammals. It was a turning point that would define the next three decades. CRSN-Lwiro, an enormous colonial-era research centre on the edge of Kahuzi-Biega National Park, became his scientific home — and he has remained there ever since, eventually rising to lead it as Scientific Director.
            </p>

            {/* Paragraph 4 */}
            <p className="essay-paragraph">
              His formal graduate training took him far afield. He earned an M.Sc. in Conservation Biology from the Percy FitzPatrick Institute at the University of Cape Town in 2002–2003, followed by a PhD in Molecular Zoology from Stellenbosch University in South Africa, completed in 2011. Both degrees deepened his capacity for the kind of work that sets him apart: combining rigorous field collection with molecular and morphological analysis to resolve some of the most contested questions in African mammal systematics.
            </p>

            {/* Panoramic Plate: Albertine Rift Canopy */}
            <div className="panoramic-plate-wrap">
              <div className="panoramic-contour-frame">
                <img src={images.tropicalTree} alt="Albertine Rift canopy tree" className="panoramic-img" />
              </div>
            </div>

            {/* Paragraph 5 */}
            <p className="essay-paragraph">
              The Albertine Rift has been the geographical heart of his science. Its habitats are defined by two outstanding features: exceptionally high biodiversity and endemism on the one hand, and dramatic threat to that biodiversity from high human population density and resource pressure on the other. Within this tension, Dr. Kaleme has spent his career trying to document what is there before it disappears — and to understand how it got there in the first place. His phylogeographic research has explored the relationship between mountain forest fragments across the Albertine Rift and the distribution of small mammals, as well as the geographic patterns of genetic variation associated with different morphological forms, work that has revealed hidden cryptic diversity across the region.
            </p>

            {/* Paragraph 6 */}
            <p className="essay-paragraph">
              His taxonomic contributions are concrete and substantial. He co-authored papers describing new bat species of the <em>Rhinolophus maclaudi</em> group and new shrew species from the Misotshi-Kabogo highlands. He contributed to the landmark pangolin phylogeography study that revealed six cryptic lineages in the heavily traded <em>Manis tricuspis</em> — findings with direct implications for anti-poaching enforcement and wildlife trade law. He co-described a new genus of duiker antelope from eastern DRC in 2022, a rare and remarkable achievement in large mammal taxonomy.
            </p>

            {/* Duo Contoured Plates */}
            <div className="specimen-duo-flow">
              <div className="specimen-contour-item">
                <div className="specimen-contour-frame">
                  <img src={images.insectivoreBat} alt="Insectivorous Bat" />
                </div>
              </div>

              <div className="specimen-contour-item">
                <div className="specimen-contour-frame">
                  <img src={images.rodentDendromus} alt="Rodent Dendromus" />
                </div>
              </div>
            </div>

            {/* Paragraph 7 */}
            <p className="essay-paragraph">
              At CRSN's Mammalogy Laboratory, Dr. Kaleme has built wide-ranging collaborations with institutions across West, Central and East Africa, with particular expertise in bats, rodents and shrews. He is a vice chair for Central Africa within Bat Conservation Africa, a body affiliated with Bat Conservation International, and has worked to promote training and youth engagement in small mammal research across the region. His membership of the IUCN Mammal Species Survival Commission — Bats specialist group reflects international recognition of that expertise.
            </p>

            {/* Plate 3: Student Training */}
            <div className="archival-plate-float float-left">
              <div className="contour-arch-frame">
                <img src={images.trainingStudents} alt="Training students in the field" className="contour-arch-img" />
              </div>
            </div>

            {/* Paragraph 8 */}
            <p className="essay-paragraph">
              Beyond taxonomy, his career has addressed some of the largest questions in African ecology. He was part of the team that conducted long-running gorilla and chimpanzee studies in Kahuzi-Biega National Park, tracking food plant phenology and the social ecology of Grauer's gorilla — the world's largest gorilla subspecies — across more than a decade of fieldwork. He contributed specimens and data to stable isotope studies of hominins and large herbivores in the Turkana Basin published in PNAS, and co-authored the widely cited Science piece warning that oil extraction threatens Africa's Great Lakes. His climate change work, using repeat photography to track shifts in tree aloe populations across southern Africa, demonstrated a rare ability to move between tropical forest mammalogy and arid-zone plant ecology.
            </p>

            {/* Paragraph 9 */}
            <p className="essay-paragraph">
              In recent years, his work has moved decisively into One Health. He was a co-author on the landmark 2026 <em>The Lancet</em> observational cohort study documenting mpox (subclade Ib) in hospitalised patients — including children and adolescents — in South Kivu, work conducted at the epicentre of one of the world's most pressing emerging disease outbreaks. He also contributed to a 2026 <em>Emerging Microbes &amp; Infections</em> study using environmental DNA to detect tuberculosis risk at the human–great ape interface. His affiliation with the international biorepository capacity initiative published in <em>Science</em> reflects a broader argument he has long made: that comprehensive decentralised pathogen surveillance requires robust biodiversity infrastructure in the very countries experiencing the highest rates of habitat conversion, wildlife trafficking, and human–wildlife contact.
            </p>

            {/* Plate 4: Microscopy & One Health */}
            <div className="archival-plate-float float-right">
              <div className="contour-botanical-frame">
                <img src={images.lab15} alt="Dr. Kaleme at the microscope" className="contour-botanical-img" />
              </div>
            </div>

            {/* Paragraph 10 */}
            <p className="essay-paragraph">
              That argument is inseparable from where he works. The research staff at CRSN-Lwiro have studied the biological diversity of the southern Albertine Rift for generations — documenting diversity and distribution, monitoring populations, and conducting applied research on flora and fauna relevant to local communities. Because of heavy conflict in the region, much of this work has been carried out without reliable compensation. Dr. Kaleme's persistence through those conditions — continuing to publish, mentor, and lead fieldwork while eastern Congo has repeatedly descended into crisis — is itself a form of scientific achievement.
            </p>

            {/* Paragraph 11 */}
            <p className="essay-paragraph">
              His 2025 commentary in <em>Nature Sustainability</em>, co-authored with Pedro Romero-Vidal and others, addressed directly how armed conflicts damage biodiversity research — a subject he knows not from the outside but from lived experience. Due to the M23 rebellion, he has had to relocate at times to Kinshasa while continuing his role as Scientific Director remotely.
            </p>

            {/* Plate 5: Academic Conference */}
            <div className="archival-plate-float float-left">
              <div className="contour-arch-frame">
                <img src={images.conferencePres} alt="Prince presenting at conference" className="contour-arch-img" />
              </div>
            </div>

            {/* Paragraph 12 */}
            <p className="essay-paragraph">
              He is also a Professor and Head of the Laboratory Section at the Institut Supérieur des Techniques Médicales (ISTM) in Bukavu, teaching the next generation of medical and scientific practitioners in South Kivu. He is fluent in French, English, Swahili, Kikongo, and Lingala — a linguistic range that reflects the breadth of communities he moves through and serves. He holds a visiting researcher appointment at the University of Johannesburg, and maintains active collaborations with the Field Museum of Natural History in Chicago, the Muséum National de l'Histoire Naturelle in Paris, and the Royal Belgian Institute of Natural Sciences in Brussels.
            </p>

            {/* Paragraph 13 */}
            <p className="essay-paragraph">
              He has reflected that Congo offers biologists truly endless opportunities — many wild places to explore, many more still to discover, and in recent years many completely new species identified with more expected in the future. That spirit — part scientific optimism, part stubborn commitment to a place the rest of the world often writes off — runs through everything Dr. Prince Kaleme has built.
            </p>

            {/* Pull Quote */}
            <div className="essay-quote-block">
              <p className="essay-quote-text">
                "Comprehensive decentralised pathogen surveillance requires robust biodiversity infrastructure in the very countries experiencing the highest rates of habitat conversion, wildlife trafficking, and human–wildlife contact."
              </p>
              <div className="essay-quote-cite">
                — Dr. Prince Kaleme Kiswele · <em>Science</em> &amp; <em>The Lancet</em>
              </div>
            </div>

            {/* Academic Qualifications Subsection */}
            <div className="fluid-section-block subsection-bg-degrees">
              <h3 className="subheading-serif">
                <GraduationCap size={20} color="var(--gold-600)" />
                <span>Academic Qualifications &amp; Degrees</span>
              </h3>
              <div className="fluid-timeline-track">
                {education.map((e, i) => (
                  <div key={i} className="fluid-timeline-item">
                    <div className="fluid-timeline-node"></div>
                    <div className="degree-card-item">
                      <div className="fluid-timeline-year">{e.year}</div>
                      <div className="fluid-timeline-title">{e.degree}</div>
                      <div className="fluid-timeline-desc">{e.inst}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Life & Hobbies Subsection */}
            <div className="fluid-section-block subsection-bg-personal">
              <h3 className="subheading-serif">
                <Compass size={20} color="var(--forest-700)" />
                <span>Personal Life &amp; Life Beyond the Field</span>
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Walking and hiking in rugged terrain · Tourism and visiting forested areas · Watching sport with companions · Spending time with friends, family, and colleagues · Reading and listening to good stories
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
                <div>
                  <div className="contour-botanical-frame" style={{ height: "160px" }}>
                    <img src={images.tourismAfterFieldwork} alt="Tourism after fieldwork" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>

                <div>
                  <div className="contour-botanical-frame" style={{ height: "160px" }}>
                    <img src={images.dadAndSon} alt="Dad and son" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>

                <div>
                  <div className="contour-botanical-frame" style={{ height: "160px" }}>
                    <img src={images.familyLife} alt="Family life" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>

                <div>
                  <div className="contour-botanical-frame" style={{ height: "160px" }}>
                    <img src={images.congoBasinField} alt="In the field in Congo Basin" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* References Subsection */}
            <div className="fluid-section-block subsection-bg-refs">
              <h3 className="subheading-serif">
                <BookMarked size={20} color="var(--gold-600)" />
                <span>Selected Biographical Sources &amp; Profiles</span>
              </h3>
              <ol style={{ paddingLeft: "1.2rem", margin: 0, fontSize: "0.85rem", lineHeight: 1.8, color: "var(--text-muted)" }}>
                <li>
                  <a href="https://www.researchgate.net/profile/Prince-Kaleme" target="_blank" rel="noopener noreferrer">
                    ResearchGate Profile — Dr. Prince Kaleme (Citations, H-Index &amp; Publications)
                  </a>
                </li>
                <li>
                  <a href="https://gorillahighlands.com/the-many-surprises-of-lwiro-in-eastern-dr-congo/" target="_blank" rel="noopener noreferrer">
                    Gorilla Highlands Experts — "The Many Surprises of Lwiro in Eastern DR Congo" (Personal Narrative by Dr. Kaleme, 2021)
                  </a>
                </li>
                <li>
                  <a href="https://taxonomy.naturalsciences.be/traineeships/internship-kaleme-prince-kiswele-dr-congo/" target="_blank" rel="noopener noreferrer">
                    Royal Belgian Institute of Natural Sciences — Internship Report: Kaleme Prince Kiswele, Habitat Fragmentation &amp; Phylogeography of Small Mammals in the Albertine Rift
                  </a>
                </li>
                <li>
                  <a href="https://bii4africa.org/dr-prince-kaleme/" target="_blank" rel="noopener noreferrer">
                    Biodiversity Intactness for Africa (BII4Africa) — Expert Profile: Dr. Prince Kaleme (Bats, Rodents &amp; Insectivores, CRSN Lwiro)
                  </a>
                </li>
                <li>
                  <a href="https://www.science.org/doi/10.1126/science.abe4813" target="_blank" rel="noopener noreferrer">
                    <em>Science</em> — "Build International Biorepository Capacity" (Colella, Kaleme et al.) — Decentralized surveillance infrastructure
                  </a>
                </li>
                <li>
                  <a href="https://www.nature.com/articles/s41893-025-01699-2" target="_blank" rel="noopener noreferrer">
                    <em>Nature Sustainability</em> — "Armed Conflicts and Biodiversity Research" (Romero-Vidal, Flores, Kaleme et al., 2025/2026)
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
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* ================= RESEARCH SECTION: MUTED BOTANICAL FOREST SAGE BAND ================= */}
      {activeSection === "research" && (
        <section className="section-band section-band-research">
          <div className="section-inner-measure">
            <div className="section-header-wrap">
              <div>
                <span className="section-eyebrow">Biodiversity Science &amp; Biosurveillance</span>
                <h2 className="section-heading">Research Programs &amp; Field Studies</h2>
                <p className="section-subtext">Taxonomy, conservation biology, One Health surveillance, and evolutionary history</p>
              </div>
            </div>

            <div className="fluid-section-block" style={{ background: "rgba(255, 255, 255, 0.75)", border: "1px solid rgba(37, 82, 61, 0.15)" }}>
              <h3 className="subheading-serif">
                <Microscope size={20} color="var(--gold-600)" />
                <span>Primary Research Themes</span>
              </h3>
              <div className="themes-grid-two-by-two">
                {researchProgramsFluid.map((r, i) => (
                  <div key={i} className="theme-grid-tile">
                    <div className="theme-grid-header">
                      <div className="theme-grid-tag">
                        {r.icon}
                        <span>{r.tag}</span>
                      </div>
                      <h4 className="theme-grid-title">{r.title}</h4>
                    </div>
                    <div className="theme-grid-img-wrap">
                      <img src={r.photo} alt={r.title} className="theme-grid-img" />
                    </div>
                    <p className="theme-grid-desc">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Field Experience */}
            <div className="fluid-section-block">
              <h3 className="subheading-serif">
                <Compass size={20} color="var(--gold-600)" />
                <span>Field Experience Across Eastern DR Congo</span>
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "1.5rem" }}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openLightbox({
                      src: images.goingToField,
                      title: "Trek to the Field",
                      caption: "Field research team on foot traversing steep montane rainforest trails.",
                      category: "Expeditions",
                    })
                  }
                >
                  <div className="contour-botanical-frame" style={{ height: "180px" }}>
                    <img src={images.goingToField} alt="Going to the field" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="side-annotation-card" style={{ marginTop: "0.5rem" }}>
                    <div className="annotation-header">Deep Forest Expeditions</div>
                    <div className="annotation-text">Reaching remote survey plots across Kahuzi-Biega, Itombwe, and Maiko.</div>
                  </div>
                </div>

                <div
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openLightbox({
                      src: images.teamAtCave,
                      title: "Bat Cave Survey Team",
                      caption: "Research crew preparing for subterranean cave sampling and biosafety protocols.",
                      category: "Chiroptera Expeditions",
                    })
                  }
                >
                  <div className="contour-botanical-frame" style={{ height: "180px" }}>
                    <img src={images.teamAtCave} alt="Team at cave" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="side-annotation-card" style={{ marginTop: "0.5rem" }}>
                    <div className="annotation-header">Subterranean Bat Surveys</div>
                    <div className="annotation-text">Cave mapping and monitoring of bat roosts for zoonotic pathogen detection.</div>
                  </div>
                </div>
              </div>

              <div className="fluid-timeline-track">
                {[
                  { year: "1994–present", title: "Mammal Population Inventories & Censuses", desc: "National parks and wild places of eastern DR Congo (Kahuzi-Biega NP, Itombwe Massif, Mount Kabobo, Maiko NP, Virunga NP, Okapi Faunal Reserve)." },
                  { year: "1994–2001", title: "Primate Food Plant Phenology", desc: "Long-term monitoring of ape food resources in montane forests of eastern DR Congo." },
                  { year: "1999–present", title: "Small Mammal Biogeography & Ecology", desc: "Distribution and ecology of rodents, bats, and shrews in tropical rain forests of the Albertine Rift." },
                  { year: "2002–2003", title: "Climate Change Monitoring via Repeat Photography", desc: "Repeat photography of tree aloes across arid and southern African biomes (M.Sc., UCT)." },
                  { year: "2007–present", title: "Albertine Rift Small Mammal Phylogeography", desc: "Evolutionary genetics and speciation patterns across Central and East African mountain forests." },
                ].map((item, i) => (
                  <div key={i} className="fluid-timeline-item">
                    <div className="fluid-timeline-node"></div>
                    <div className="fluid-timeline-year">{item.year}</div>
                    <div className="fluid-timeline-title">{item.title}</div>
                    <div className="fluid-timeline-desc">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Background & Concepts: Distinct Thematic Chapters */}
            <div className="fluid-section-block" style={{ background: "rgba(255, 255, 255, 0.75)", border: "1px solid rgba(0, 0, 0, 0.08)" }}>
              <h3 className="subheading-serif">
                <BookMarked size={20} color="var(--gold-600)" />
                <span>Core Background &amp; Scientific Concepts</span>
              </h3>
              {backgroundSections.map((sec, i) => {
                const treatiseClass =
                  i === 0 ? "treatise-mammalogy" :
                  i === 1 ? "treatise-onehealth" :
                  i === 2 ? "treatise-phylo" : "treatise-conservation";
                return (
                  <details key={i} className={`fluid-concept-item treatise-block ${treatiseClass}`}>
                    <summary className="fluid-concept-summary">
                      <span>{sec.title}</span>
                      <ChevronRight size={18} color="var(--gold-500)" />
                    </summary>
                    <div className="fluid-concept-body">
                      {sec.images && sec.images.length > 0 && (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem", margin: "1rem 0" }}>
                          {sec.images.map((imgItem, k) => (
                            <div
                              key={k}
                              style={{ cursor: "pointer" }}
                              onClick={() =>
                                openLightbox({
                                  src: imgItem.src,
                                  title: sec.title,
                                  caption: imgItem.label,
                                  category: "Scientific Background",
                                })
                              }
                            >
                              <div className="contour-botanical-frame" style={{ height: "160px" }}>
                                <img src={imgItem.src} alt={imgItem.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                              </div>
                              <div className="side-annotation-card" style={{ marginTop: "0.4rem" }}>
                                <div className="annotation-text">
                                  <Camera size={12} style={{ display: "inline", marginRight: "4px" }} />
                                  {imgItem.label}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {sec.content.map((para, j) => (
                        <p key={j} className="essay-paragraph" style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= CAREER SECTION: DISTINGUISHED ARCHIVAL SAND BAND ================= */}
      {activeSection === "career" && (
        <section className="section-band section-band-career">
          <div className="section-inner-measure">
            <div className="section-header-wrap">
              <div>
                <span className="section-eyebrow">Institutional Leadership &amp; Mentorship</span>
                <h2 className="section-heading">Professional Career &amp; Leadership</h2>
                <p className="section-subtext">Research directorship, institutional leadership, and regional training</p>
              </div>
            </div>

            {/* Career Appointments Track */}
            <div className="fluid-section-block" style={{ background: "#ffffff" }}>
              <h3 className="subheading-serif">
                <Briefcase size={20} color="var(--gold-600)" />
                <span>Career Appointments &amp; Roles</span>
              </h3>
              <div className="fluid-timeline-track">
                {career.map((c, i) => (
                  <div key={i} className="fluid-timeline-item">
                    <div className="fluid-timeline-node"></div>
                    <div className="degree-card-item" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                      <div>
                        <div className="fluid-timeline-year">{c.year}</div>
                        <div className="fluid-timeline-title">{c.role}</div>
                        <div className="fluid-timeline-desc">{c.org}</div>
                      </div>
                      {c.thumb && (
                        <div
                          className="contour-botanical-frame"
                          style={{ width: "54px", height: "54px", flexShrink: 0, cursor: "pointer" }}
                          onClick={() =>
                            openLightbox({
                              src: c.thumb,
                              title: c.role,
                              caption: `${c.role} at ${c.org}`,
                              category: "Career & Leadership",
                            })
                          }
                        >
                          <img src={c.thumb} alt={c.role} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Training & Mentorship */}
            <div className="fluid-section-block subsection-bg-degrees">
              <h3 className="subheading-serif">
                <GraduationCap size={20} color="var(--gold-600)" />
                <span>Mentorship &amp; Specialized Training Courses</span>
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                Dr. Kaleme is committed to local capacity building across the Albertine Rift, providing rigorous field method and biosafety training to university students and research teams.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "1.75rem" }}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openLightbox({
                      src: images.trainingSession2024,
                      title: "2024 Field Training Workshop",
                      caption: "Training session with researchers and university students on biosafety protocols, PPE use, and specimen sampling.",
                      category: "Training & Mentorship",
                    })
                  }
                >
                  <div className="contour-botanical-frame" style={{ height: "180px" }}>
                    <img src={images.trainingSession2024} alt="Training session 2024" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="side-annotation-card" style={{ marginTop: "0.5rem" }}>
                    <div className="annotation-header">2024 Biosafety Workshop</div>
                    <div className="annotation-text">Procedure training for capturing and handling small mammals with protective equipment.</div>
                  </div>
                </div>

                <div
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    openLightbox({
                      src: images.fieldMethodsTraining,
                      title: "Field Methods Instruction",
                      caption: "Teaching ecological sampling, non-invasive traps, and morphological measurements in South Kivu.",
                      category: "Training & Mentorship",
                    })
                  }
                >
                  <div className="contour-botanical-frame" style={{ height: "180px" }}>
                    <img src={images.fieldMethodsTraining} alt="Training students field methods" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div className="side-annotation-card" style={{ marginTop: "0.5rem" }}>
                    <div className="annotation-header">Field Methods Instruction</div>
                    <div className="annotation-text">On-site ecological training in montane forest transects and small mammal inventory protocols.</div>
                  </div>
                </div>
              </div>

              <div className="fluid-timeline-track">
                {[
                  { year: "2024", title: "Biosafety & Specimen Sampling", desc: "Procedure for taking samples from captured rodents and bats – and use of personal protective equipment." },
                  { year: "2008", title: "Geographic Information Systems (GIS)", desc: "Basic GIS course, Stellenbosch University, South Africa" },
                  { year: "2005–06", title: "Stable Light Isotopes Spectrometry", desc: "Theory and practice of stable light isotopes spectrometry, Dept. of Archaeology, UCT" },
                  { year: "2004", title: "Tropical Rain Forest Data Management", desc: "Training on data collection and management in tropical rain forest, WCS – DR Congo" },
                  { year: "2001", title: "Museum Management & Field Methodology", desc: "Museum management, field methodology and small mammal identification, Field Museum of Natural History, Chicago, USA" },
                  { year: "1999", title: "African Tropical Biodiversity Program", desc: "African Tropical Biodiversity Program (ATBP), Makerere University Institute of Environment & Natural Resources, Uganda" },
                ].map((t, i) => (
                  <div key={i} className="fluid-timeline-item">
                    <div className="fluid-timeline-node"></div>
                    <div className="degree-card-item">
                      <div className="fluid-timeline-year">{t.year}</div>
                      <div className="fluid-timeline-title">{t.title}</div>
                      <div className="fluid-timeline-desc">{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Institutional Collaborations */}
            <div className="fluid-section-block" style={{ background: "#ffffff" }}>
              <h3 className="subheading-serif">
                <Globe size={20} color="var(--gold-600)" />
                <span>International &amp; Regional Collaborations</span>
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                {[
                  { inst: "University of Johannesburg", desc: "Department of Zoology – Visiting Researcher since 2014" },
                  { inst: "Field Museum of Natural History", desc: "Zoology Department, Chicago, USA" },
                  { inst: "Muséum National d'Histoire Naturelle", desc: "Violaine Nicolas, Paris, France" },
                  { inst: "Royal Belgian Institute of Natural Sciences", desc: "Erik Verheyen, Brussels, Belgium" },
                  { inst: "Makerere University", desc: "Robert Kityo, Department of Zoology, Kampala, Uganda" },
                  { inst: "Wildlife Conservation Society (WCS)", desc: "Albertine Rift Regional Conservation Office" },
                ].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      borderLeft: "3px solid var(--gold-500)",
                      padding: "0.85rem 1rem",
                      background: "rgba(247, 244, 238, 0.7)",
                      borderRadius: "0 6px 6px 0",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--forest-900)" }}>{c.inst}</div>
                    <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{c.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific Memberships: High Contrast Nocturnal Card */}
            <div className="memberships-dark-card">
              <h3 className="subheading-serif">
                <Globe size={20} color="var(--gold-400)" />
                <span>Global Scientific Memberships &amp; Affiliations</span>
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "0.85rem", marginTop: "1.25rem" }}>
                {memberships.map((m, i) => (
                  <div key={i} className="membership-dark-pill">
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= PUBLICATIONS SECTION: CRISP ACADEMIC ALABASTER BAND ================= */}
      {activeSection === "publications" && (
        <section className="section-band section-band-publications">
          <div className="section-inner-measure">
            <div className="section-header-wrap">
              <div>
                <span className="section-eyebrow">Peer-Reviewed Scientific Record</span>
                <h2 className="section-heading">Scientific Publications &amp; Monographs</h2>
                <p className="section-subtext">
                  Longitudinal research across Central &amp; East Africa · Biodiversity taxonomy, One Health biosurveillance, and conservation ecology
                </p>
              </div>
            </div>

            {/* Scientific Impact Highlights Ribbon */}
            <div className="pub-impact-ribbon">
              <div className="pub-impact-stat">
                <div className="pub-impact-icon-wrap">
                  <Award size={16} />
                </div>
                <div>
                  <div className="pub-impact-val">{publications.length} Works</div>
                  <div className="pub-impact-lbl">Peer-Reviewed Papers &amp; Books</div>
                </div>
              </div>

              <div className="pub-impact-stat">
                <div className="pub-impact-icon-wrap">
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="pub-impact-val">Top Journals</div>
                  <div className="pub-impact-lbl">Lancet · Science · Nature · PNAS</div>
                </div>
              </div>

              <div className="pub-impact-stat">
                <div className="pub-impact-icon-wrap">
                  <BookMarked size={16} />
                </div>
                <div>
                  <div className="pub-impact-val">1,450+</div>
                  <div className="pub-impact-lbl">ResearchGate Citations</div>
                </div>
              </div>

              <div className="pub-impact-stat">
                <div className="pub-impact-icon-wrap">
                  <Dna size={16} />
                </div>
                <div>
                  <div className="pub-impact-val">6+ Cryptic Taxa</div>
                  <div className="pub-impact-lbl">New Lineages &amp; Duiker Genus</div>
                </div>
              </div>
            </div>

            {/* Academic Filter & Search Control Panel */}
            <div className="pub-controls-panel">
              {/* Search & Year Selection Row */}
              <div className="pub-search-row">
                <div className="pub-search-box">
                  <Search size={16} className="pub-search-icon" />
                  <input
                    type="text"
                    className="pub-search-input"
                    placeholder="Search publications by title, co-author, species, or journal..."
                    value={pubSearch}
                    onChange={(e) => setPubSearch(e.target.value)}
                    aria-label="Search scientific publications"
                  />
                  {pubSearch && (
                    <button
                      className="pub-search-clear-btn"
                      onClick={() => setPubSearch("")}
                      title="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                <div className="pub-year-dropdown-wrap">
                  <Calendar size={14} className="pub-dropdown-icon" />
                  <select
                    className="pub-year-dropdown"
                    value={pubYear}
                    onChange={(e) => setPubYear(e.target.value)}
                    aria-label="Filter by publication year"
                  >
                    <option value="all">All Years (1996–2026)</option>
                    {years.map((y) => (
                      <option key={y} value={String(y)}>
                        {y} ({publications.filter((p) => p.year === y).length})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Theme & Subject Category Pills */}
              <div className="pub-category-pills-wrap">
                {pubCategories.map((c) => (
                  <button
                    key={c.id}
                    className={`pub-category-pill-btn ${pubCategory === c.id ? "active" : ""}`}
                    onClick={() => setPubCategory(c.id)}
                  >
                    {c.icon}
                    <span>{c.label}</span>
                    <span className="pub-category-count">{c.count}</span>
                  </button>
                ))}
              </div>

              {/* Active Filter & Count Feedback */}
              <div className="pub-filter-status-row">
                <div className="pub-status-count">
                  Showing <strong>{filteredPubs.length}</strong> of {publications.length} scientific works
                  {(pubCategory !== "all" || pubYear !== "all" || pubSearch.trim()) && (
                    <span className="pub-filter-active-tag">· Filtered</span>
                  )}
                </div>

                {(pubCategory !== "all" || pubYear !== "all" || pubSearch.trim()) && (
                  <button
                    className="pub-reset-all-btn"
                    onClick={() => {
                      setPubCategory("all");
                      setPubYear("all");
                      setPubSearch("");
                    }}
                  >
                    <RotateCcw size={12} />
                    <span>Reset filters</span>
                  </button>
                )}
              </div>
            </div>

            {/* Academic Publication Cards List */}
            <div className="pub-cards-list">
              {filteredPubs.length === 0 ? (
                <div className="pub-empty-card">
                  <BookOpen size={36} color="var(--gold-500)" style={{ margin: "0 auto 1rem" }} />
                  <h4 className="pub-empty-title">No Publications Match Selected Filters</h4>
                  <p className="pub-empty-desc">
                    Try searching for a different keyword, selecting a different year, or resetting filters.
                  </p>
                  <button
                    className="pub-empty-reset-btn"
                    onClick={() => {
                      setPubCategory("all");
                      setPubYear("all");
                      setPubSearch("");
                    }}
                  >
                    Show All Works
                  </button>
                </div>
              ) : (
                filteredPubs.map((p, i) => {
                  const badge = getPubBadges(p);
                  return (
                    <article
                      key={i}
                      className={`pub-card-academic ${badge.isLandmark ? "landmark-card" : ""}`}
                    >
                      {/* Top metadata strip */}
                      <div className="pub-card-top-strip">
                        <div className="pub-badges-left">
                          <span className="pub-pill-year">{p.year}</span>
                          <span className={`pub-pill-category ${badge.isLandmark ? "badge-gold" : "badge-forest"}`}>
                            {badge.label}
                          </span>
                          <span className="pub-pill-type-label">{badge.type}</span>
                        </div>
                        <div className="pub-badge-indexed">
                          <BookMarked size={12} />
                          <span>Peer-Reviewed Record</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="pub-card-title">{p.title}</h3>

                      {/* Authors with Dr. Kaleme highlighted */}
                      <p className="pub-card-authors">
                        {renderHighlightedAuthors(p.authors)}
                      </p>

                      {/* Journal / Venue row */}
                      <div className="pub-card-venue-row">
                        <BookOpen size={14} className="pub-venue-icon" />
                        <span className="pub-journal-title">{p.journal}</span>
                      </div>

                      {/* Actions & Verification Bar */}
                      <div className="pub-card-footer">
                        <div className="pub-actions-group">
                          {p.doi && (
                            <a
                              href={p.doi}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="pub-btn-doi"
                              title="Open article in journal repository"
                            >
                              <ExternalLink size={13} />
                              <span>Access Paper (DOI)</span>
                            </a>
                          )}
                          <button
                            className="pub-btn-cite"
                            onClick={() => handleCopyCitation(p, i)}
                            title="Copy full academic citation"
                          >
                            {copiedId === i ? (
                              <>
                                <Check size={13} color="var(--forest-600)" />
                                <span style={{ color: "var(--forest-700)", fontWeight: 700 }}>Citation Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy size={13} />
                                <span>Copy Citation</span>
                              </>
                            )}
                          </button>
                        </div>

                        {p.doi && (
                          <span className="pub-doi-snippet">
                            DOI: {p.doi.replace(/^https?:\/\/doi\.org\//, "")}
                          </span>
                        )}
                      </div>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        </section>
      )}

      {/* ================= GALLERY & FIELDWORK: COOL EXHIBITION STONE BAND ================= */}
      {activeSection === "gallery" && (
        <section className="section-band section-band-gallery">
          <div className="section-inner-measure">
            <div className="section-header-wrap">
              <div>
                <span className="section-eyebrow">Photographic Archive</span>
                <h2 className="section-heading">Fieldwork, Expeditions &amp; Life Gallery</h2>
                <p className="section-subtext">
                  Photographic archive across the Albertine Rift, Congo Basin, research laboratories, and communities
                </p>
              </div>
            </div>

            {/* Category filter pills */}
            <div className="filter-bar-pro">
              {[
                { id: "all", label: "All Photos", count: galleryItems.length },
                { id: "fieldwork", label: "Fieldwork & Caves", count: galleryItems.filter((g) => g.category === "fieldwork").length },
                { id: "wildlife", label: "Wildlife & Specimens", count: galleryItems.filter((g) => g.category === "wildlife").length },
                { id: "lab", label: "Laboratory & Museum", count: galleryItems.filter((g) => g.category === "lab").length },
                { id: "mentorship", label: "Mentorship & Training", count: galleryItems.filter((g) => g.category === "mentorship").length },
                { id: "outreach", label: "Outreach & Conferences", count: galleryItems.filter((g) => g.category === "outreach").length },
                { id: "personal", label: "Personal & Family", count: galleryItems.filter((g) => g.category === "personal").length },
              ].map((f) => (
                <button
                  key={f.id}
                  className={`filter-btn-pro ${galleryFilter === f.id ? "active" : ""}`}
                  onClick={() => setGalleryFilter(f.id)}
                >
                  {f.label} ({f.count})
                </button>
              ))}
            </div>

            {/* Fluid Contoured Gallery */}
            <div className="gallery-grid-fluid">
              {filteredGallery.map((item) => (
                <div key={item.id} className="gallery-card-fluid" onClick={() => openLightbox(item)}>
                  <div className="gallery-frame-contour">
                    <img src={item.src} alt={item.title} />
                  </div>
                  <div className="side-annotation-card" style={{ marginTop: "0.55rem" }}>
                    <div className="annotation-header">
                      <span>{item.category}</span>
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--forest-900)" }}>
                      {item.title}
                    </div>
                    <div className="annotation-text" style={{ marginTop: "0.2rem" }}>
                      {item.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= CONTACT SECTION: HERITAGE LINEN & FOREST BAND ================= */}
      {activeSection === "contact" && (
        <section className="section-band section-band-contact">
          <div className="section-inner-measure">
            <div className="section-header-wrap">
              <div>
                <span className="section-eyebrow">Institutional Coordinates</span>
                <h2 className="section-heading">Contact &amp; Institutional Coordinates</h2>
                <p className="section-subtext">Direct communication channels, institutional affiliations, and official appointments</p>
              </div>
            </div>

            {/* Fluid Open Contact Grid */}
            <div className="fluid-contact-grid">
              <div className="fluid-contact-tile">
                <Building2 size={22} className="fluid-contact-icon" />
                <div>
                  <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--gold-600)", fontWeight: 700, marginBottom: "0.2rem" }}>
                    Primary Institution
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "var(--forest-900)", fontWeight: 600 }}>
                    Centre de Recherche en Sciences Naturelles (CRSN-Lwiro)
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Bukavu, Sud Kivu, DR Congo</div>
                </div>
              </div>

              <div className="fluid-contact-tile">
                <Mail size={22} className="fluid-contact-icon" />
                <div>
                  <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--gold-600)", fontWeight: 700, marginBottom: "0.2rem" }}>
                    Email Address
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "var(--forest-900)", fontWeight: 600 }}>
                    <a href="mailto:pkaleme@gmail.com" style={{ color: "var(--forest-700)", textDecoration: "underline" }}>
                      pkaleme@gmail.com
                    </a>
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Direct academic correspondence</div>
                </div>
              </div>

              <div className="fluid-contact-tile">
                <Phone size={22} className="fluid-contact-icon" />
                <div>
                  <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--gold-600)", fontWeight: 700, marginBottom: "0.2rem" }}>
                    Telephone
                  </div>
                  <div style={{ fontSize: "0.92rem", color: "var(--forest-900)", fontWeight: 600 }}>
                    (+243) 82 251 3485
                  </div>
                  <div style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                    (+243) 99 363 5621
                  </div>
                </div>
              </div>

              <div className="fluid-contact-tile">
                <MapPin size={22} className="fluid-contact-icon" />
                <div>
                  <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--gold-600)", fontWeight: 700, marginBottom: "0.2rem" }}>
                    Residence
                  </div>
                  <div style={{ fontSize: "0.92rem", color: "var(--forest-900)", fontWeight: 600 }}>
                    Kinshasa, N'sele, BAT
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>Nº 83 C, Av. Ilanga, DR Congo</div>
                </div>
              </div>
            </div>

            {/* Current Positions */}
            <div className="fluid-section-block" style={{ background: "#ffffff" }}>
              <h3 className="subheading-serif">
                <Building2 size={20} color="var(--gold-600)" />
                <span>Current Official Appointments</span>
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
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
                    title: "Professor of Renewable Natural Resource Management, Mammalogy & Animal Biology",
                    org: "Université Shalom de Bunia",
                    since: "2024–present",
                  },
                  {
                    title: "Member of Consortium",
                    org: "One Health Consortium DR Congo",
                    since: "2024–present",
                  },
                  {
                    title: "Focal Point (Antenne du Sud Kivu)",
                    org: "Centre de Surveillance de la Biodiversité",
                    since: "2024–present",
                  },
                ].map((pos, i) => (
                  <div
                    key={i}
                    style={{
                      borderLeft: "3.5px solid var(--gold-500)",
                      padding: "1rem 1.15rem",
                      background: "rgba(247, 244, 238, 0.7)",
                      borderRadius: "0 8px 8px 0",
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--forest-900)", marginBottom: "0.2rem" }}>
                      {pos.title}
                    </div>
                    <div style={{ fontSize: "0.86rem", color: "var(--text-muted)", marginBottom: "0.3rem" }}>
                      {pos.org}
                    </div>
                    <div style={{ fontSize: "0.76rem", color: "var(--forest-600)", fontWeight: 700 }}>
                      {pos.since}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
      </main>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    textTransform: "uppercase",
                    color: "var(--gold-400)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  {lightboxImg.category || "Field Photograph"}
                </span>
                <h3 style={{ color: "#ffffff", fontSize: "1.15rem", marginTop: "0.2rem" }}>
                  {lightboxImg.title}
                </h3>
              </div>
              <button className="lightbox-close-btn" onClick={closeLightbox} title="Close">
                <X size={18} />
              </button>
            </div>

            <div className="lightbox-img-box">
              <img src={lightboxImg.src} alt={lightboxImg.title} className="lightbox-img" />
            </div>

            <div className="lightbox-caption-box">
              {lightboxImg.caption || lightboxImg.desc}
            </div>
          </div>
        </div>
      )}

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="brand-emblem" style={{ width: "30px", height: "30px", fontSize: "0.85rem" }}>PK</div>
            <span style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.9rem" }}>Dr. Prince Kaleme Kiswele</span>
          </div>
          <div style={{ fontSize: "0.82rem" }}>
            © 2026 Centre de Recherche en Sciences Naturelles (CRSN-Lwiro) · Bukavu, DR Congo
          </div>
        </div>
      </footer>
    </div>
  );
}
